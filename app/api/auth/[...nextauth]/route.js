import { API_URL } from "@/app/lib/constants";
import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")

      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, accountname, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Votre mail",
          type: "email",
          placeholder: "client@touricard.com",
        },
        password: {
          label: "Mot de passe",
          type: "password",
          placeholder: "Votre mot de passe",
        },
      },

      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        let userDetails;

        const email = credentials.email;
        const password = credentials.password;

        if (!email || !password) {
          throw new Error("Veuillez remplir tous les champs");
        }

        try {
          const { user, jwt } = await signInAccount({
            email,
            password,
          });
          return { ...user, jwt };
        } catch (error) {
          console.log("error", error);
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.id = token.id;
      session.jwt = token.jwt;
      return Promise.resolve(session);
      // if (token && token.userId) {
      //   // session.user.isAdmin = token.isAdmin;
      //   // session.user.phone = token.phone;
      //   // session.user.email = token.email;
      //   // session.user.accessToken = token.accessToken;
      //   // session.user.userId = token.userId;
      //   // session.user.accountId = token.accountId;
      //   // session.user.isAdmin = token.isAdmin;
      //   // session.user.accountType = token.accountType;
      //   // session.user.firstName = token.firstName;
      //   // session.user.lastName = token.lastName;
      //   // session.user.familyName = token.familyName;
      //   // session.user.companyName = token.companyName;
      // }

      return session;
    },
    async jwt({ token, user, account, profile }) {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.id = user.id;
        token.jwt = user.jwt;
      }
      // if (user && user._id) {
      //   const accessToken = await sign(
      //     { userId: user._id },
      //     process.env.JWT_SECRET,
      //     { expiresIn: "24h" }
      //   );
      //   token.accountId = user._id;
      //   token.userId = user.userId;
      //   token.isAdmin = user.isAdmin;
      //   token.accountType = user.accountType;
      //   token.firstName = user.firstName;
      //   token.lastName = user.lastName;
      //   token.familyName = user.familyName;
      //   token.companyName = user.companyName;
      //   token.email = user.email;
      //   token.phone = user.phone;
      //   token.accessToken = accessToken;
      // }
      // return token;
      return Promise.resolve(token);
    },
  },

  pages: {
    signIn: "/login",
  },
};

const signInAccount = async ({ password, email }) => {
  if (!password) {
    throw new Error("Veuillez entrer un mot de passe");
  }

  const res = await axios.post(`${API_URL}/auth/local`, {
    identifier: email,
    password,
  });

  return res.data;
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
