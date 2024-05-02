import React from "react";

const Page = () => {
  return (
    <div className="w-[80%] lg:w-1/2 mx-auto py-5 pb-8">
      <h1 className="text-2xl lg:text-4xl mb-2">Informations de paiement</h1>
      <div className="flex flex-col gap-3">
        <p>
          Félicitations ! Vous avez franchi une étape importante dans votre
          expérience avec notre plateforme. En ajoutant vos méthodes de
          paiement, vous vous assurez une navigation plus fluide et sécurisée
          lors de vos transactions.
        </p>{" "}
        <p>
          Désormais, vous avez la liberté de choisir parmi une gamme de méthodes
          de paiement flexibles, adaptées à vos préférences et à vos besoins :
        </p>
        <p>
          <span className="font-semibold">Proforma avec compte bancaire :</span>{" "}
          Cette méthode vous permet de régler vos achats par virement bancaire.
          Une fois votre commande confirmée, vous recevrez une facture proforma
          avec les détails nécessaires pour effectuer le paiement via votre
          compte bancaire.{" "}
        </p>
        <p>
          <span className="font-semibold">Payer à la fondation :</span>
          Vous avez également la possibilité de régler vos transactions en
          personne à notre fondation. Une fois que vous avez sélectionné cette
          option de paiement, vous pouvez vous rendre à nos locaux et effectuer
          le règlement sur place.
        </p>{" "}
        <p>
          <span className="font-semibold">
            Récupération dans vos locaux (avec frais de 50 $)
          </span>
          : Si vous préférez, nous pouvons également organiser la récupération
          de votre paiement en envoyant quelqu&apos;un à votre emplacement.
          Cette option est pratique si vous souhaitez régler en espèces ou par
          chèque. Veuillez noter qu&apos;un frais de transport de 50 $ sera
          ajouté pour couvrir les frais de déplacement. Votre sécurité est notre
          priorité absolue.
        </p>{" "}
        <p>N.B :</p>
        <p>
          Soyez assuré(e) que vos informations de paiement sont cryptées et
          protégées par des mesures de sécurité avancées. Nous veillons à ce que
          vos données personnelles restent confidentielles et sécurisées à tout
          moment.
        </p>
        <p>
          Grâce à vos méthodes de paiement enregistrées, vous pourrez effectuer
          des transactions en toute tranquillité d&apos;esprit, que ce soit pour
          des achats réguliers ou des services additionnels. Plus besoin de
          saisir manuellement vos informations à chaque fois, votre compte est
          désormais prêt à l&apos;emploi pour des transactions rapides et
          efficaces.
        </p>
        <p>
          N&apos;hésitez pas à explorer les différentes options de paiement
          disponibles dans votre profil utilisateur. Vous pouvez les gérer, les
          modifier ou en ajouter de nouvelles à tout moment, selon vos besoins
          évolutifs.
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
      </div>
    </div>
  );
};

export default Page;
