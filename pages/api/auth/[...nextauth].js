import NextAuth from "next-auth";
import connectDB from "../../../utils/connectDB";
import Users from "./../../../models/userModel";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcryptjs";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session: { strategy: "jwt" },

  providers: [
    GoogleProvider({
      clientId:
        "533014022875-q81hpv7o5gb6ddtioegu35j5gn8bqjra.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        const client = await connectDB();
        const user = await Users.findOne({ email: credentials.email }).select(
          "+password"
        );

        console.log("providers, user???", user);
        if (!user) {
          throw new Error("no user found");
        }

        const compare1 = await compare(credentials.password, user.password);

        console.log("pass compare", compare1);
        if (!compare1) {
          throw new Error("bad password ");
        }

        return { name: user.name, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      // if (session) {
      //   const user = await Users.findOne({ email: session.user.email });

      //   if (session.user) {
      //     session.user.role = user.role;
      //   }
      // }

      // massage our session
      if (token.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },

  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
});
