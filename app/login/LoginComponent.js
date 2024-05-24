"use client";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// import AddItemMessage from "../components/AddItemMessage";
import AddItemMessage from "../components/AddItemMessage";
import Link from "next/link";
import { APP_URL } from "../lib/constants";

const LoginComponent = () => {
  const { data: session, status: sessionStatus } = useSession();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const signInUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setIsError(true);
      setErrorMessage("Veuillez remplir tous les champs");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setIsErrorEmail(true);
      setEmailValidation("Veuillez entrer un email valide");
      return;
    }
    setLoading(true);
    let options = {
      redirect: false,
      email,
      password,
    };

    const res = await signIn("credentials", options);

    if (res?.error) {
      setIsError(true);
      setLoading(false);
      setErrorMessage(res.error);
      return;
    }
    // setStatus(res.status);
    setLoading(false);
    setSuccess(true);
    setMessage("Connexion réussie, redirection...");
    router.push("/mon-compte");

    setTimeout(() => {
      setSuccess(false);
      //   router.push("/mon-compte");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Se connecter sur votre compte
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value), setIsError(false);
                    }}
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Votre email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Adresse mail
                  </label>
                </div>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setIsError(false);
                    }}
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Mot de passe
                  </label>
                </div>
                <div>
                  {isError && <p className="text-red-600">{errorMessage}</p>}
                </div>
                <div>
                  <p>
                    Vous n&apos;avez pas de compte ?{" "}
                    <Link
                      href={"/register"}
                      className="hover:text-blue-500 hover:cursor-pointer"
                    >
                      Enregistrez-vous
                    </Link>
                  </p>
                </div>

                <div className="relative">
                  <button
                    onClick={signInUser}
                    disabled={loading || !email || !password}
                    className={`${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-700"
                    } rounded-md px-2 py-2`}
                  >
                    Se connecter
                  </button>
                  {loading && (
                    <p className="italic text-gray-500 mt-3">
                      Connexion en cours...
                    </p>
                  )}
                </div>
                {success && (
                  <AddItemMessage message="Connexion avec succès, redirection..." />
                )}
                {success && (
                  <p className="text-green-700 italic">
                    Connexion reussie, redirection...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
