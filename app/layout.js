import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { NextAuthProvider } from "./providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luendu",
  description:
    "Bienvenue sur Luendu, le site internet de l'organisation Luendu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar />
          <NextTopLoader />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
