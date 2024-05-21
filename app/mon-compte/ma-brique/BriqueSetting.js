"use client";
import { useState } from "react";

const BriqueSetting = ({ data }) => {
  console.log("data", data);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer une action avec les informations utilisateur mises à jour, par exemple :
    // updateUser(user);
    console.log("Informations utilisateur mises à jour :", message);
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

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Mettre à jour
          </button>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BriqueSetting;
