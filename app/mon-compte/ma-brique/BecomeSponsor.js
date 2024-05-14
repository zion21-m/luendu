"use client";
import WallForm from "@/app/mur-de-luendu/WallForm";

import { useState } from "react";

const BecomeSponsor = ({ bricks, userId }) => {
  const [isSponsor, setIsSponsor] = useState(false);
  return (
    <div>
      <p className="mt-4 font-semibold text-gray-700">
        Voulez-vous partie des sponsors de Luendu ?
      </p>
      <div className="flex gap-4 mt-4">
        <div>
          <input
            type="radio"
            id="sponsorNo"
            name="sponsor"
            value={isSponsor}
            onChange={() => setIsSponsor("no")}
          />
          <label htmlFor="sponsorNo" className="ml-1">
            Non
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="sponsor"
            id="sponsorYes"
            value={isSponsor}
            onChange={() => setIsSponsor("yes")}
          />
          <label htmlFor="sponsorYes" className="ml-1">
            Oui
          </label>
        </div>
      </div>
      {isSponsor === "yes" ? (
        <div className="py-4">
          <WallForm bricks={bricks} userId={userId} />
        </div>
      ) : isSponsor === "no" ? (
        <div className="w-full lg:w-1/2 mx-auto py-4">
          <p className="mb-4">
            Nous sommes heureux de vous compter dans cette communauté et Famille
            de Luendu. <br />
            Veuillez nous contacter pour plus de précisions sur les sponsors
            Luendu
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default BecomeSponsor;
