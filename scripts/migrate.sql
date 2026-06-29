-- Run this once to set up the blog CMS table
CREATE TABLE IF NOT EXISTS cms_posts (
  id            SERIAL PRIMARY KEY,
  slug          TEXT UNIQUE NOT NULL,
  title         TEXT NOT NULL,
  category      TEXT NOT NULL DEFAULT 'Strategy',
  hero_image    TEXT NOT NULL DEFAULT '',
  listing_image TEXT,
  seo_title     TEXT,
  seo_description TEXT,
  keywords      TEXT[] DEFAULT '{}',
  published_at  TEXT NOT NULL DEFAULT TO_CHAR(NOW(), 'YYYY-MM-DD'),
  author_name   TEXT NOT NULL DEFAULT 'Darren McGrath',
  author_role   TEXT NOT NULL DEFAULT 'Partner',
  author_bio    TEXT NOT NULL DEFAULT 'A Cannes Lion-winning creative strategist with 25 years of experience.',
  author_image  TEXT NOT NULL DEFAULT '/images/blog/blog-author.webp',
  body          JSONB NOT NULL DEFAULT '[]',
  is_published  BOOLEAN NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at on row changes
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at ON cms_posts;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON cms_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
