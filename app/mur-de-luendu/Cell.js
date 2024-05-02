"use client";
import { useState } from "react";
import styles from "./index.module.css";

const Cell = ({ cell }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div
        className={`${styles.cell} overflow-hidden hover:cursor-pointer`}
        style={{
          gridColumnEnd: `span ${cell?.attributes.width}`,
          gridRowEnd: `span ${cell?.attributes.heigth}`,
        }}
        onClick={handleClick}
      >
        {/* {cell.id} */}
        <p className={`truncate`}>
          {cell?.attributes?.message ? cell?.attributes?.message : cell?.id}
        </p>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white p-8 rounded-lg z-10">
            <button
              className="absolute top-0 right-0 p-2 text-white"
              onClick={() => setShowModal(false)}
            >
              Fermer
            </button>
            {/* Contenu du modal avec les détails de la cellule */}
            <div>
              {cell?.attributes?.message
                ? cell?.attributes?.message
                : "Non encore attribué"}{" "}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cell;
