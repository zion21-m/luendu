import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mon compte Luendu",
  description: "Bienvenue sur votre compte Luendu",
};

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
          <div className="w-full flex-none md:w-64">
            <Sidebar session={session} />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      ) : (
        <div>
          <p>Vous n&apos;êtes pas autorisé à accéder à cette page</p>
        </div>
      )}
    </>
  );
}
