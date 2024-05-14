// import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import LoginComponent from "./LoginComponent";
import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import Signout from "./Signout";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session && session?.user ? (
        <div className="flex flex-col justify-center items-center border h-[90vh] gap-8">
          <div>
            <p className="text-black font-semibold">
              Vous êtes déjà connecté(e)
            </p>
          </div>
          <div>
            <Link
              className="p-2 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              href="/dashboard"
            >
              Aller sur le tableau de bord
            </Link>{" "}
            <Signout />
          </div>
        </div>
      ) : (
        <LoginComponent />
      )}
    </div>
  );
};

export default Page;
