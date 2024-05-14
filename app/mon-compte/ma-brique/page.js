import React from "react";
import BriqueSetting from "./BriqueSetting";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getBricksData, getUserBrickData } from "@/app/data/loaders";
import Sponsors from "@/app/components/forms/Sponsors";
import BecomeSponsor from "./BecomeSponsor";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const userId = await session?.id;
  const { data } = await getUserBrickData({ userId });
  const bricks = await getBricksData();

  console.log("bricks", bricks);
  console.log("brick", data);
  return (
    <div>
      {data.length === 0 ? (
        <div>
          <p>
            Vous n&apos;avez pas encore des briques. Les briques sont reservés
            aux sponsors
          </p>
          <Sponsors />
          <BecomeSponsor bricks={bricks} userId={userId} />
        </div>
      ) : data.length > 0 ? (
        <>
          <h1 className="text-xl font-semibold">Ma brique</h1>

          {data.map(({ id, message }) => {
            return (
              <div key={id} className="flex flex-col gap-4 py-4">
                <p>N° Brique : {id}</p>
                <p>Message :{message} </p>{" "}
              </div>
            );
          })}

          {/*  */}
          <BriqueSetting data={data[0]} />
        </>
      ) : (
        <p>
          Aucune information disponible. Veuillez Contacter nos services pour
          plus de précisions
        </p>
      )}
    </div>
  );
};

export default Page;
