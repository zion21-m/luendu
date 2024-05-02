"use client";
import WallForm from "@/app/mur-de-luendu/WallForm";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [profile, setProfile] = useState();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isSponsor, setIsSponsor] = useState(false);

  //loadings
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [isNextStep, setIsNextStep] = useState(false);
  const [userId, setUserId] = useState(null);

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      // Validation des données côté client (à adapter selon vos besoins)
      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !username ||
        !birthDate ||
        !city ||
        !country ||
        !profile ||
        !selectedInterests.length
      ) {
        throw new Error("Veuillez remplir tous les champs obligatoires.");
      }

      const response = await axios.post("https://api.luendu.org/api/users", {
        nickname: firstName,
        name: lastName,
        email,
        password,
        username,
        familyName: postNom,
        birthDate,
        city,
        country,
        profile,
        role: "",
        interestZone: selectedInterests.join(", "),
      });

      // Gestion de la réponse de l'API
      if (response.status === 201) {
        console.log("Utilisateur créé avec succès :", response.data);
        console.log("user iidd", response.data.id);
        setIsSuccess(true);
        setIsNextStep(true);
        setUserId(response.data.id);
      } else {
        console.error("Échec de la création de l'utilisateur :", response.data);
        setIsError(true);
      }
    } catch (error) {
      console.error(
        "Erreur lors de la soumission du formulaire :",
        error.message
      );
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  console.log("user idd", userId);

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
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full border rounded px-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Username */}
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Nom d&apos;utilisateur
              </label>
              <input
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
                  onChange={(e) => setProfile(e.target.value)}
                >
                  <option value="">-- Choisir un profil</option>
                  {profiles.map((profile, id) => (
                    <option key={id} value={profile}>
                      {profile}
                    </option>
                  ))}
                </select>
              </div>
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
                      onChange={(e) =>
                        setSelectedInterests([
                          ...selectedInterests,
                          e.target.value,
                        ])
                      }
                    />
                    <label htmlFor={zone} className="ml-1">
                      {zone}
                    </label>
                  </div>
                ))}
              </div>

              {/* Ajoutez d'autres cases à cocher pour les zones d'intérêts */}
            </div>
            {isLoading ? (
              <p className="italic">Création du compte en cours ...</p>
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
            <div className="flex gap-4">
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
              <WallForm bricks={bricks} userId={userId} />
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
