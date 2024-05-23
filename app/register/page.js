import React from "react";
import RegistrationForm from "../components/forms/RegistrationForm";
import { getBricksData } from "../data/loaders";

export const metadata = {
  title: "Enregistrez-vous sur Luendu",
  description:
    "Bienvenue sur Luendu, Veuillez remplir le formulaire pour vous enregistrer",
};
const Page = async () => {
  const data = await getBricksData();

  return (
    <div>
      <RegistrationForm bricks={data} />
    </div>
  );
};

export default Page;
