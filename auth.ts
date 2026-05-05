import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async signIn({ user }) {
      // Allowlist of approved client emails — add client emails here
      const ALLOWED_EMAILS: string[] = [
        // 'client@example.com',
      ]
      if (ALLOWED_EMAILS.length === 0) return false
      return ALLOWED_EMAILS.includes(user.email ?? '')
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/portal`
    },
  },
})
