import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  return (
    <div>
      <h1 className="text-xl font-semibold">Mon compte</h1>
      <h2>
        Bienvenue <span>{session?.user?.name}</span>
      </h2>
    </div>
  );
};

export default Page;
