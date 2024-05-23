import styles from "./index.module.css";
import { cells } from "./data";
import Cell from "./Cell";
import Wall from "./Wall";
import { getBricksData } from "../data/loaders";

export const metadata = {
  title: "Mur Luendu",
  description:
    "Le Mur de Luendu représente tous ces HEROS qui ont cru au développement du Centre",
};
const Page = async () => {
  const data = await getBricksData();

  return (
    <div>
      <div className="py-8 text-center">
        <h1 className="text-xl xl:text-5xl font-semibold">MUR LUENDU</h1>
        <p className="text-base lg:text-lg">
          de <span className="font-semibold italic">l&apos;Honneur </span> et de{" "}
          <span className="font-semibold italic">la solidarité</span>
        </p>
      </div>
      <Wall data={data} />
    </div>
  );
};

export default Page;
