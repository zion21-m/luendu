import { Inter } from "next/font/google";
import Sidebar from "../components/sidebar/Sidebar";
// import Sidebar from "../components/Sidebar";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Application de Gestion des Boîtes Postales",
  description: "Une application de la SCPT pour la gestion des Boîtes Postales",
};

export default async function Layout({ children }) {
  //   const session = await getServerSession(authOptions);
  const session = {
    user: {
      name: "Hello",
      firstName: "Merdie",
    },
  };

  return (
    <>
      {session && session?.user ? (
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
          <p>Vous n&apos;êtes pas autorisé à accéder à cette ressource</p>
        </div>
      )}
    </>
  );
}