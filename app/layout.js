import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { NextAuthProvider } from "./providers";
import NextTopLoader from "nextjs-toploader";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getUserData } from "./data/loaders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luendu",
  description:
    "Bienvenue sur Luendu, le site internet de l'organisation Luendu",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  const userData = await getUserData({ userId: session.id });
  console.log("sessions layout", session);
  console.log("userData layout", userData);

  return (
    <html lang="fr">
      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar userData={userData} />
          <NextTopLoader />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
