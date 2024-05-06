"use client";
import { useState } from "react";
import styles from "./index.module.css";
import { getBrickData } from "../data/loaders";

const Cell = ({ cell }) => {
  const [modalData, setModalData] = useState({
    show: false,
    data: null,
    loading: false,
  });

  const handleClick = async (cellId) => {
    setModalData({ show: true, loading: true, data: null });
    const data = await getBrickData({ brickId: cellId });
    setModalData({ show: true, loading: false, data });
  };
  const backgroundColor = cell?.attributes?.message ? "#0080ff" : "#fffffe";
  const textColor = cell?.attributes?.message ? "white" : " black";

  return (
    <>
      <div
        className={`${styles.cell} overflow-hidden hover:cursor-pointer`}
        style={{
          gridColumnEnd: `span ${cell?.attributes.width}`,
          gridRowEnd: `span ${cell?.attributes.heigth}`,
          backgroundColor: backgroundColor,
          color: textColor,
        }}
        onClick={() => handleClick(cell.id)}
      >
        <p className={`truncate`}>{cell?.attributes?.message || cell?.id}</p>
      </div>
      {modalData.show && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white p-8 rounded-lg z-10">
            <button
              className="absolute top-0 right-0 p-2 text-white"
              onClick={() =>
                setModalData({ show: false, loading: false, data: null })
              }
            >
              Fermer
            </button>
            <div>
              {modalData.loading ? (
                <p>Chargement en cours ...</p>
              ) : modalData.data?.message === null ? (
                <p>Brique non encore attribuée</p>
              ) : (
                <div className="flex flex-col gap-4">
                  <p className="text-slate-800 pl-2 text-lg font-semibold">
                    Brique N°{modalData.data?.id}
                  </p>
                  <h2 className="p-2 shadow-md">
                    <span>Noms : </span>{" "}
                    <span className="font-semibold">
                      {modalData.data?.user?.nickname}{" "}
                      {modalData.data?.user?.name}
                    </span>
                  </h2>
                  <div className="p-2 shadow-md flex flex-col gap-3">
                    <p>
                      message :{" "}
                      <span className="italic">{modalData.data?.message}</span>
                    </p>
                    <p>
                      Zone(s) d&apos;intérêt :{" "}
                      {modalData.data?.user?.interestZone}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cell;
