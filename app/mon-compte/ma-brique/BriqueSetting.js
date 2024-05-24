"use client";
import { useState } from "react";
import axios from "axios";
import AddItemMessage from "@/app/components/AddItemMessage";
import userBriqueAction from "./action";
import { API_URL } from "@/app/lib/constants";
import userInformationsAction from "../settings/action";

const BriqueSetting = ({ data, userId }) => {
  // State pour stocker les informations de l'utilisateur
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState(data?.message ? data.message : "");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Gestionnaire de changement pour les champs de saisie
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Gestionnaire de soumission du formulaire

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.put(`${API_URL}/bricks/${data.id}`, {
        data: {
          message,
        },
      });
      await axios.put(`${API_URL}/users/${userId}`, {
        parts,
        hasPaid: false,
      });
      if (response.status === 200) {
        setIsSuccess(true);
        setShowForm(false);

        userBriqueAction();
        userInformationsAction();
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } else {
        console.error("Échec de la création de l'utilisateur :", response.data);
        setIsError(true);
      }
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
    <div className="container mx-auto p-4">
      <div className="mb-4">
        {showForm ? (
          <button
            onClick={() => setShowForm(!showForm)}
            className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
          >
            Ne pas mettre à jour
          </button>
        ) : (
          <button
            onClick={() => setShowForm(!showForm)}
            className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md"
          >
            Mettre à jour mon message
          </button>
        )}
      </div>
      {/* <h1 className="text-2xl font-bold mb-4">Compte utilisateur</h1> */}
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded"
            />
          </div>

          {isLoading ? (
            <button
              disabled
              type="button"
              className="bg-gray-400 cursor-not-allowed text-gray-700 italic px-4 py-2 rounded"
            >
              Mise à jour...
            </button>
          ) : isError ? (
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Réessayer
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Mettre à jour
            </button>
          )}
        </form>
      ) : (
        <div></div>
      )}
      {isSuccess && (
        <AddItemMessage
          message={"Votre message a été mis à jour avec succès"}
        />
      )}
    </div>
  );
};

export default BriqueSetting;
