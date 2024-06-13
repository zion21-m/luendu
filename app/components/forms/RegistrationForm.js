"use client";
import WallForm from "@/app/mur-de-luendu/WallForm";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Sponsors from "./Sponsors";
import { API_URL } from "@/app/lib/constants";
import { signIn } from "next-auth/react";

const RegistrationForm = ({ bricks }) => {
  // State pour stocker les valeurs des champs du formulaire
  const profiles = [
    "Médecin",
    "Ingénieur logiciel",
    "Avocat",
    "Enseignant",
    "Architecte",
    "Comptable",
    "Designer graphique",
    "Chef de projet",
    "Analyste financier",
    "Infirmièr",
    "Consultant en management",
    "Traducteur",
    "Agent immobilier",
    "Journaliste",
    "Psychologue clinicien",
    "Responsable des ressources humaines",
    "Électricien",
    "Analyste de données",
    "Développeur web",
    "Entrepreneur",
    "Autre",
  ];
  const interestZones = [
    "Kasai Oriental",
    "Sankuru",
    "Kasai Central",
    "Lomami",
    "Kasai",
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postNom, setPostNom] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [profile, setProfile] = useState();
  const [otherProfile, setOtherProfile] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isSponsor, setIsSponsor] = useState(false);

  //loadings
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //

  const [validationError, setValidationError] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  const [isNextStep, setIsNextStep] = useState(false);

  //

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Autre") {
      setIsOtherSelected(true);
      setProfile("");
    } else {
      setIsOtherSelected(false);
      setProfile(selectedValue);
    }
  };
  const handleOtherChange = (event) => {
    const value = event.target.value;
    setProfile(value); // Mettre à jour directement le profil avec la valeur saisie
  };
  // INTEREST ZONE
  const handleCheckboxChange = (e) => {
    setValidationError(false);
    setValidationErrorMessage("");
    const { value, checked } = e.target;
    if (checked) {
      if (selectedInterests.length < 2) {
        setSelectedInterests([...selectedInterests, value]);
      } else {
        // Affichez une alerte ou un message si vous le souhaitez
        alert("Vous ne pouvez sélectionner que 2 zones d'intérêts au maximum.");
        e.target.checked = false;
      }
    } else {
      setSelectedInterests(
        selectedInterests.filter((interest) => interest !== value)
      );
    }
  };
  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      // Validation des données côté client (à adapter selon vos besoins)
      if (selectedInterests.length === 0) {
        setValidationError(true);
        setValidationErrorMessage(
          "Vous devez sélectionner au moins une zone d'intérêt."
        );
        return;
      }
      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !phone ||
        !username ||
        !birthDate ||
        !city ||
        !country ||
        !profile ||
        !selectedInterests.length
      ) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
      }

      const response = await axios.post(`${API_URL}/users`, {
        nickname: firstName,
        name: lastName,
        email,
        password,
        username,
        familyName: postNom,
        birthDate,
        city,
        phone,
        country,
        profile,
        role: "",
        interestZone: selectedInterests.join(", "),
      });

      // Gestion de la réponse de l'API
      if (response.status === 201) {
        await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        setIsSuccess(true);
        setIsNextStep(true);
      } else {
        console.error("Échec de la création de l'utilisateur :", response.data);
        setIsError(true);
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
      setIsError(true);
      setErrorMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-4 pb-8">
      <div className="mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4">
          Formulaire d&apos;enregistrement
        </h1>
      </div>
      {!isNextStep ? (
        <form onSubmit={handleSubmit}>
          {/* Champs du formulaire */}
          {/* Prénom */}
          <div className="mx-auto px-8 md:px-4 lg:px-0 lg:w-1/2 xl:w-1/2">
            <div className="mb-4">
              <label htmlFor="firstName" className="block font-medium mb-1">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border rounded px-3 py-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            {/* Nom */}
            <div className="mb-4">
              <label htmlFor="lastName" className="block font-medium mb-1">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border rounded px-3 py-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            {/* Post-nom */}
            <div className="mb-4">
              <label htmlFor="postNom" className="block font-medium mb-1">
                Post-nom
              </label>
              <input
                type="text"
                id="postNom"
                className="w-full border rounded px-3 py-2"
                value={postNom}
                onChange={(e) => setPostNom(e.target.value)}
                required
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border rounded px-3 py-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Nom d&apos;utilisateur
              </label>
              <input
                required
                type="text"
                id="username"
                className="w-full border rounded px-3 py-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {/* Password */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="w-full border rounded px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Date de naissance */}
            <div className="mb-4">
              <label htmlFor="birthDate" className="block font-medium mb-1">
                Date de naissance
              </label>
              <input
                type="date"
                id="birthDate"
                className="w-full border rounded px-3 py-2"
                value={birthDate}
                onChange={(e) => setbirthDate(e.target.value)}
                required
              />
            </div>
            {/* Ville de résidence */}
            <div className="mb-4">
              <label htmlFor="city" className="block font-medium mb-1">
                Ville de résidence
              </label>
              <input
                type="text"
                id="city"
                className="w-full border rounded px-3 py-2"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            {/* Pays de résidence */}
            <div className="mb-4">
              <label htmlFor="country" className="block font-medium mb-1">
                Pays de résidence
              </label>
              <input
                type="text"
                id="country"
                className="w-full border rounded px-3 py-2"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            {/* Profils professionnels */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Profil professionnel
              </label>
              {/* Exemple de cases à cocher pour les profils professionnels */}
              <div>
                <select
                  className="w-full border rounded px-3 py-2"
                  name=""
                  id=""
                  onChange={handleSelectChange}
                  value={isOtherSelected ? "Autre" : profile}
                  required
                >
                  <option value="">-- Choisir un profil</option>
                  {profiles.map((profile, id) => (
                    <option key={id} value={profile}>
                      {profile}
                    </option>
                  ))}
                </select>
              </div>
              {isOtherSelected && (
                <div className="mb-4 mt-4">
                  <label
                    htmlFor="otherProfile"
                    className="block font-medium mb-1"
                  >
                    Préciser votre profile
                  </label>
                  <input
                    type="text"
                    id="otherProfile"
                    className="w-full border rounded px-3 py-2"
                    value={profile}
                    onChange={handleOtherChange}
                    required
                  />
                </div>
              )}
              {/* Ajoutez d'autres cases à cocher pour les profils professionnels */}
            </div>
            {/* Zones d'intérêts */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Zones d&apos;intérêts (choisissez jusqu&apos;à 2)
              </label>
              {/* Exemple de cases à cocher pour les zones d'intérêts */}
              <div className="flex gap-4">
                {interestZones.map((zone, id) => (
                  <div key={id}>
                    <input
                      type="checkbox"
                      id={zone}
                      value={zone}
                      onChange={handleCheckboxChange}
                      checked={selectedInterests.includes(zone)}
                    />
                    <label htmlFor={zone} className="ml-1">
                      {zone}
                    </label>
                  </div>
                ))}
              </div>
              {validationError && (
                <p className="mt-2 text-red-600">{validationErrorMessage}</p>
              )}

              {/* Ajoutez d'autres cases à cocher pour les zones d'intérêts */}
            </div>
            {isLoading ? (
              <p className="italic">Création du compte en cours ...</p>
            ) : isError ? (
              <div>
                <div className=" pb-4">
                  <span> Une erreur est survenue : </span>
                  <p className="text-red-500">
                    {errorMessage?.response?.data?.error?.message}
                  </p>
                  {errorMessage?.response?.data?.error?.details?.errors?.map(
                    (error, id) => (
                      <p className="text-red-500" key={id}>
                        {error?.message}
                      </p>
                    )
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Réessayer
                </button>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Soumettre
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="my-4">
          <div className="mx-auto w-full lg:w-1/2">
            <p className="font-semibold text-lg py-4 text-green-600">
              Votre compte a été créé avec succès
            </p>
            <p className="font-semibold text-lg">
              Voulez-vous être sponsors de Luendu ?
            </p>
            <Sponsors />

            {/* SLFMQFQ */}
            <div className="flex gap-4 mt-4">
              <div>
                <input
                  type="radio"
                  id="sponsorNo"
                  name="sponsor"
                  value={isSponsor}
                  onChange={() => setIsSponsor("no")}
                />
                <label htmlFor="sponsorNo" className="ml-1">
                  Non
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="sponsor"
                  id="sponsorYes"
                  value={isSponsor}
                  onChange={() => setIsSponsor("yes")}
                />
                <label htmlFor="sponsorYes" className="ml-1">
                  Oui
                </label>
              </div>
            </div>
          </div>
          {isSponsor === "yes" ? (
            <div className="py-4">
              <WallForm bricks={bricks} />
            </div>
          ) : isSponsor === "no" ? (
            <div className="w-full lg:w-1/2 mx-auto py-4">
              <p className="mb-4">
                Merci d&apos;avoir rejoint la communauté Luendu
              </p>
              <Link
                href="https://luendu.org"
                className="border py-2 px-2 bg-slate-300 hover:bg-slate-400 rounded-md"
              >
                Allez sur le site
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
