"use client";
import { useState } from "react";

const UserAccount = ({ userData }) => {
  // State pour stocker les informations de l'utilisateur
  const [user, setUser] = useState({
    firstName: userData?.nickname,
    lastName: userData?.familyName,
    email: userData?.email,
    password: "",
  });

  // Gestionnaire de changement pour les champs de saisie
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer une action avec les informations utilisateur mises à jour, par exemple :
    // updateUser(user);
    console.log("Informations utilisateur mises à jour :", user);
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
          <label htmlFor="lastName" className="block mb-2 font-medium">
            Nom de famille
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
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

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Mettre à jour les informations
        </button>
      </form>
      <form action="" className="mt-4">
        <h2 className="text-xl font-semibold py-3">
          Mis à jour du mot de passe
        </h2>

        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            Ancien Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            Nouveau Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
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
