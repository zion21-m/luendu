"use client";
import styles from "./index.module.css";
import { cells } from "./data";
import CellForm from "./CellForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const WallForm = ({ bricks, userId }) => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(null);
  const [selected, setSelected] = useState(false);
  const [parts, setParts] = useState(1);
  const [orientation, setOrientation] = useState("none");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  //   console.log("bricks wall")

  const handleClick = (cellId) => {
    setSelectedId(cellId);
    console.log("selected id", { selectedId, cellId });
    // setSelected(!selected);
  };
  console.log("loading", isLoading);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let width, heigth;
    if (orientation === "none") {
      width = parts;
      heigth = parts;
    } else if (orientation === "column") {
      width = 1;
      heigth = parts;
    } else {
      width = parts;
      heigth = 1;
    }
    console.log({
      width,
      heigth,
      id: selectedId,
      orientation,
      userId,
      message,
    });

    try {
      const response = await axios.put(
        `https://api.luendu.org/api/bricks/${selectedId}`,
        {
          data: {
            width,
            heigth,
            user: userId,
            orientation,
            message,
          },
        }
      );
      if (response.status === 200) {
        console.log("Utilisateur créé avec succès :", response.data);

        setIsSuccess(true);
        setTimeout(() => {
          router.push("/informations-de-paiement");
        }, 1000);
      } else {
        console.error("Échec de la création de l'utilisateur :", response.data);
        setIsError(true);
      }
      console.log(response);
    } catch (error) {
      console.log("error", error);
      console.error(
        "Erreur lors de la soumission du formulaire :",
        error.message
      );
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-4">
      {!isSuccess ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="py-4">
            <h3>Avec Combien de parts voulez-vous contribuer ? </h3>
            <div>
              <input
                value={parts}
                className="border p-2"
                type="number"
                name="parts"
                id="parts"
                onChange={(e) => setParts(e.target.value)}
              />
              <span className="ml-3 text-gray-500">{parts * 1000} $</span>
              <label htmlFor="" className="ml-3 text-gray-400">
                1 part correspond à 1000$
              </label>
            </div>
          </div>
          <div>
            <h2 className="py-4 font-semibold">
              Choisir votre brique sur le mur de l&apos;Honneur et de la
              Solidarité
            </h2>
          </div>
          <div className={styles.grid}>
            {bricks.map((cell, index) => (
              <CellForm
                cell={cell}
                selected={selectedId === cell.id}
                key={index}
                onClick={handleClick}
              />
            ))}
          </div>
          {selectedId ? (
            <>
              <div className="py-4">
                <h3>Vous avez choisi la zone {selectedId}</h3>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-medium mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Quel message voudriez-vous mettre ?"
                  type="text"
                  id="message"
                  className="w-full border rounded px-3 py-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div>
                {parts > 1 ? (
                  <div>
                    <p className="font-semibold">
                      Voulez-vous prendre votre zone en :
                    </p>
                    <div className="flex gap-4">
                      <div>
                        <input
                          onChange={() => setOrientation("line")}
                          type="radio"
                          name="orientation"
                          id="line"
                        />
                        <label htmlFor="line" className="ml-1">
                          Ligne
                        </label>
                      </div>
                      <div>
                        <input
                          onChange={() => setOrientation("column")}
                          type="radio"
                          name="orientation"
                          id="column"
                        />
                        <label htmlFor="column" className="ml-1">
                          Colonne
                        </label>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              {isLoading ? (
                <p className="italic">Acquisition de la Brique en cours ...</p>
              ) : isError ? (
                <p className="text-red-500">Une erreur est survenue</p>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Soumettre
                </button>
              )}
            </>
          ) : (
            <div></div>
          )}
        </form>
      ) : (
        <div className="flex flex-col gap-4 w-full lg:w-1/2 mx-auto">
          <p>
            Votre brique N° {selectedId} et votre message{" "}
            <span className="italic text-gray-500">{message}</span> a été ajouté
            avec succès
          </p>
          <p className="italic">
            Vous serez redirigé sur une page avec toutes les informations
          </p>
          <p className="mt-4 italic">Rédirection ...</p>
        </div>
      )}
    </div>
  );
};

export default WallForm;
