import styles from "./index.module.css";
import { cells } from "./data";
import Cell from "./Cell";
import Wall from "./Wall";
import { getBricksData } from "../data/loaders";

const Page = async () => {
  const data = await getBricksData();

  return (
    <div>
      <div className="py-8 text-center">
        <h1 className="text-xl font-semibold">Le mur de luendu</h1>
      </div>
      <Wall data={data} />
    </div>
  );
};

export default Page;
