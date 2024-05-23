import React from "react";
import UserAccount from "./UserAccount";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserData } from "@/app/data/loaders";

export const metadata = {
  title: "Paramètres compte Luendu",
  description: "Mettez à jour vous informations sur Luendu",
};
const Page = async () => {
  const session = await getServerSession(authOptions);
  const userId = await session?.id;
  const data = await getUserData({ userId });

  return (
    <div>
      <h1 className="text-xl font-semibold">Réglages du compte</h1>
      {!data ? (
        <div>Informations non disponibles</div>
      ) : (
        <UserAccount userData={data} userId={userId} />
      )}
    </div>
  );
};

export default Page;
