import Link from "next/link";
import React from "react";
import { APP_URL } from "../lib/constants";

const Page = () => {
  return (
    <div className="w-[80%] lg:w-1/2 mx-auto py-5 pb-8">
      <h1 className="text-2xl lg:text-4xl mb-2">Informations de paiement</h1>
      <div className="flex flex-col gap-3">
        <p>
          Félicitations ! Vous avez franchi une étape importante dans votre
          expérience sur notre plateforme. En ajoutant le paiement, vous
          confirmerez votre brique sur{" "}
          <span className="font-semibold italic text-blue-600">
            le mur de l&apos;honneur.
          </span>{" "}
          Vous disposez de 5 jours pour la confirmation de votre place
        </p>{" "}
        <p>
          Ainsi, pour cette étape, vous avez la liberté de choisir parmi une
          gamme de méthodes de paiement flexibles, adaptées à vos préférences et
          à vos besoins :
        </p>
        <p>
          <span className="font-semibold">Proforma avec compte bancaire :</span>{" "}
          Cette méthode vous permet de confirmer votre paiement par virement ou
          depôt bancaire. Une fois le paiement effectué, veuillez nous envoyer
          une copie de votre bordereau pour que nous confirmions votre paiement
          .{" "}
        </p>
        <p>
          <span className="font-semibold">Payer à la fondation :</span>
          Vous avez également la possibilité de régler votre paiement en
          personne à notre fondation, size à l&apos;appartement 408, Immeuble
          Skyview, Commune de la Gombe, à Kinshasa. Référence Restaurant chez
          Paul et salle Romeo Golf. Une fois le montant payé dans nos locaux,
          vous recevrez une confirmation et votre paiement sera enregistré sur
          notre site
        </p>{" "}
        <p>
          <span className="font-semibold">
            Récupération dans vos locaux (avec frais de 10 $)
          </span>
          : Si vous préférez, nous pouvons également organiser la récupération
          de votre paiement en envoyant quelqu&apos;un à votre emplacement.
          Cette option est pratique si vous souhaitez régler en espèces ou par
          chèque. Veuillez noter qu&apos;un frais de transport de 10 $ sera
          ajouté pour couvrir les frais de déplacement.
        </p>{" "}
        <p>N.B :</p>
        <p>
          Soyez assuré(e) que vos informations de paiement sont protégées et
          Nous veillons à ce que vos données personnelles restent
          confidentielles et sécurisées à tout moment.
        </p>
        <p>
          Nous vous remercions de votre confiance et sommes ravis de vous
          accompagner dans votre parcours sur notre plateforme. Si vous avez des
          questions ou des préoccupations concernant vos méthodes de paiement,
          n&apos;hésitez pas à contacter notre équipe d&apos;assistance dédiée,
          toujours à votre disposition pour vous aider.
        </p>
        <p>
          Encore une fois, félicitations pour avoir complété cette étape
          cruciale ! Nous sommes impatients de continuer à vous offrir une
          expérience utilisateur exceptionnelle.
        </p>
        <p>
          Bien cordialement, <br /> L&apos;équipe LUENDU
        </p>
        <div className="my-4">
          <a
            className="p-2 bg-slate-500 hover:bg-slate-700 text-white rounded-md m-2 "
            href={`${APP_URL}/mur-de-luendu`}
          >
            Visiter le mur
          </a>
          <a
            href={`${APP_URL}/mon-compte`}
            className="p-2 bg-green-500 hover:bg-green-700 text-white rounded-md m-2 "
          >
            Aller sur mon compte
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
