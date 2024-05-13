import React from "react";
import BriqueSetting from "./BriqueSetting";

const Page = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Ma brique</h1>
      <div className="flex flex-col gap-4 py-4">
        <p>Vous avez la brique N°:</p>
        <p>Message : </p>
      </div>
      {/*  */}
      <BriqueSetting />
    </div>
  );
};

export default Page;
