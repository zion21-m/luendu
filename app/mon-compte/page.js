import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getUserData } from "../data/loaders";
import { formatDate, formatDateOnly } from "../data/date";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const userId = await session?.id;
  const data = await getUserData({ userId });

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-semibold">Mon compte</h1>
      <h2>
        Bienvenue{" "}
        <span>
          {!data
            ? session?.user?.name
            : `${data?.nickname} ${data?.name} ${data?.familyName}`}
        </span>
      </h2>
      <p>Nom d&apos;utilisateur : {data?.username}</p>
      <p>
        Téléphone : {data?.phone ? data.phone : "Information non disponible"}
      </p>
      <p>Compte créé le {formatDate(data?.createdAt)}</p>
      <p>Date de naissance : {formatDateOnly(data?.birthDate)}</p>
      <p>Ville de résidence : {data?.city}</p>
      <p>Pays de résidence : {data?.country}</p>
      <p>Votre Profile : {data?.profile}</p>
      <p>Zones d&apos;intérêts : {data?.interestZone}</p>
    </div>
  );
};

export default Page;
