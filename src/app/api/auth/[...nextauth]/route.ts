import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import {AuthOptions} from 'next-auth'
export const authOptions:AuthOptions = {
  // Configure one or more authentication providers
  secret:process.env.NO_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
    
  ],
  callbacks: {
    async jwt({ token, user, profile,trigger,session }) {
      // Persist the OAuth access_token and or the user id to the token right after signin 
      if(trigger==='signIn')
      {
        token.address='Nha Be'
      }
      return token
    },
    async session({ session, token, user }) {
    // @ts-ignore
      session.address=token.address;
      return session;
    }
}
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }