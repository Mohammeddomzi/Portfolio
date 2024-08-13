import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "@/app/firebase/firebase"; 

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log("signIn", user);
      const userRef = doc(firestore, "users", user.email ?? "");

      try {
        await setDoc(
          userRef,
          {
            name: user.name,
            email: user.email,
            image: user.image,
          },
          { merge: true }
        );
        return true;
      } catch (error) {
        console.error("Error adding user to Firestore:", error);
        return false;
      }
    },
    async session({ session, token }) {
      const userRef = doc(firestore, "users", session.user?.email as string);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        session.user = { ...session.user, ...userDoc.data() };
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
