import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  // configuration one or more authenticated here
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.sub;
      return session;
    },
  },

  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
