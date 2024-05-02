import React from "react";
import RegistrationForm from "../components/forms/RegistrationForm";
import { getBricksData } from "../data/loaders";

const Page = async () => {
  const data = await getBricksData();

  return (
    <div>
      <RegistrationForm bricks={data} />
    </div>
  );
};

export default Page;
