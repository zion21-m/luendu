import styles from "./index.module.css";
import { cells } from "./data";
import Cell from "./Cell";

const Wall = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map((cell, index) => (
        <Cell cell={cell} key={index} />
      ))}
    </div>
  );
};

export default Wall;
