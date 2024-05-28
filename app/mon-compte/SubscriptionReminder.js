"use client";
import { useState } from "react";

const SubscriptionReminder = ({ subscriptionDate }) => {
  const [daysLeft, setDaysLeft] = useState(null);
  const subDate = new Date(subscriptionDate);
  const today = new Date();

  const timeDifference = today - subDate;
  const diffDays = Math.ceil(5 - timeDifference / (1000 * 60 * 60 * 24));

  if (diffDays === null) {
    return <p>Chargement ...</p>;
  }
  if (diffDays === 0) {
    return (
      <p className="font-semibold text-gray-600 italic">
        Votre période de souscription prend fin aujourd&apos;hui. Veuillez
        contacter nos services.
      </p>
    );
  }
  if (diffDays < 0) {
    return (
      <p className="font-semibold text-gray-600 italic">
        Votre période de souscription est passée de {diffDays}. Veuillez
        contacter nos services pour régulariser votre situation
      </p>
    );
  }
  return (
    <p className="font-semibold text-gray-600 italic">
      Il vous reste{" "}
      <span className="font-bold text-black">{diffDays} jour(s)</span> pour vous
      acquitter de votre montant et confirmer votre brique sur le mur de
      l&apos;Honneur et de la Solidarité
    </p>
  );
};

export default SubscriptionReminder;
