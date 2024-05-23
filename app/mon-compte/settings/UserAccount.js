"use client";
import axios from "axios";
import { useState } from "react";
import userInformationsAction from "./action";
import AddItemMessage from "@/app/components/AddItemMessage";
import { API_URL } from "@/app/lib/constants";

const UserAccount = ({ userData, userId }) => {
  // State pour stocker les informations de l'utilisateur

  const [user, setUser] = useState({
    firstName: userData?.nickname,
    familyName: userData?.familyName,
    name: userData?.name,
    email: userData?.email,
    phone: userData?.phone,
    country: userData?.country,
    city: userData?.city,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  //
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Gestionnaire de changement pour les champs de saisie
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Effectuer une action avec les informations utilisateur mises à jour, par exemple :
    // updateUser(user);
    console.log("Informations utilisateur mises à jour :", user);
    setIsLoading(true);

    try {
      const response = await axios.put(
        `${API_URL}/users/${userId}`,

        user
      );
      if (response.status === 200) {
        console.log("Utilisateur créé avec succès :", response.data);

        setIsSuccess(true);

        userInformationsAction(userId);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Compte utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 font-medium">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="familyName" className="block mb-2 font-medium">
            Nom de famille
          </label>
          <input
            type="text"
            id="familyName"
            name="familyName"
            value={user.familyName}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-medium">
            Téléphone
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block mb-2 font-medium">
            Pays de Résidence
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={user.country}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Ville de résidence
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={user.city}
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
            Mise à jour en cours...
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
            Mettre à jour les informations
          </button>
        )}
        {isSuccess && (
          <AddItemMessage message={"Informations mises à jour avec succès"} />
        )}
      </form>
      <form action="" className="mt-4">
        <h2 className="text-xl font-semibold py-3">
          Mis à jour du mot de passe
        </h2>

        <div className="mb-4">
          <label htmlFor="oldPassword" className="block mb-2 font-medium">
            Ancien Mot de passe
          </label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={oldPassword}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block mb-2 font-medium">
            Nouveau Mot de passe
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Mettre à jour le mot de passe
        </button>
      </form>
    </div>
  );
};

export default UserAccount;
