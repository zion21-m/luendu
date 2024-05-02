"use client";
import { useState } from "react";
import styles from "./index.module.css";

const Cell = ({ cell, onClick, selected }) => {
  //   const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (cell?.attributes?.message) return;

    // setSelected(!selected);
    onClick(cell.id);
  };

  return (
    <div
      className={`${styles.cell} overflow-hidden hover:cursor-pointer `}
      style={{
        gridColumnEnd: `span ${cell.attributes.width}`,
        gridRowEnd: `span ${cell.attributes.heigth}`,
        backgroundColor: selected ? "blue" : "",
        color: selected ? "white" : "",
        cursor: cell?.attributes?.message ? "not-allowed" : "",
      }}
      onClick={handleClick}
    >
      {/* {cell.id} */}
      <p className={`truncate`}>
        {cell?.attributes?.message ? cell.attributes.message : cell.id}
      </p>
    </div>
  );
};

export default Cell;
