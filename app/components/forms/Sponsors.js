"use client";
import Link from "next/link";
import { useState } from "react";

const Sponsors = () => {
  const [showModal, setShowModal] = useState(false);
  const tables2 = [
    { montant: "Montant:.....", don: "1-3", categorie: "Champion" },
    { montant: "Montant:.....", don: "4-5", categorie: "Argent" },
    { montant: "Montant:.....", don: "6-10", categorie: "Or" },
    { montant: "Montant:.....", don: "Au-délà de 10", categorie: "Diamant" },
  ];
  return (
    <div>
      <p className="mt-2">
        C&apos;est qui un sponsor Luendu ?{" "}
        <span
          onClick={() => setShowModal(true)}
          className="text-blue-500 hover:cursor-pointer hover:text-blue-700"
        >
          Cliquez ici pour en savoir plus
        </span>{" "}
        ou{" "}
        <span className="text-blue-500 hover:cursor-pointer hover:text-blue-700">
          <Link
            href="/Fiche-engagement-luendu.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Télécharger le document pour plus de détails
          </Link>
        </span>{" "}
        ou voir encore ce document qui montre les pilliers de Luendu :{" "}
        <span className="text-blue-500 hover:cursor-pointer hover:text-blue-700">
          <Link
            href="/Les-piliers-opérationnels-de-Luendu.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Les pilliers opérationnels de Luendu
          </Link>
        </span>
      </p>{" "}
      <>
        {/* *** 
            **
            MODAL
            ****
            *** */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gray-900 opacity-75"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="bg-white lg:w-4/5 h-4/5 overflow-y-scroll p-8 rounded-lg z-10 mx-8 lg:mx-16">
              <button
                className="absolute top-0 right-0 p-2 text-white"
                onClick={() => setShowModal(false)}
              >
                Fermer
              </button>
              <div className="px-8 w-full  mx-auto flex flex-col gap-3">
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 p-2 rounded-md text-white"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                </div>
                <h2 className="text-xl font-semibold">
                  Membre d’honneur et Comité de soutien #01
                </h2>
                <span className="text-gray-600">Préambule</span>
                <p>
                  Le Hub central du pays est à la RDC ce qu’elle est elle-même
                  au continent africain, le coeur.
                </p>
                <p>Vous avez rempli le formulaire</p>
                <p>
                  Vous avez la possibilité de participer à la levée de fonds
                  pour soutenir les opérations de la 1ère année.
                </p>
                <p>
                  Nous nous appuyons sur les pionniers, ceux qui prennent à
                  coeur les défis du Grand Kasaï et qui veulent faire un don.
                </p>
                <p>
                  Vous pouvez donner ce que vous désirez et nous vous en serons
                  reconnaissant.
                </p>
                <p>
                  Cependant, les grands donateurs auront une contrepartie à
                  savoir l’inscription au MUR de l’HONNEUR et de la GRANDEUR du
                  Centre.
                </p>
                <p>
                  Ce mur sera érigé sur un site prestigieux qui sera qui sera
                  inauguré en Octobre 2025 avec tout le prestige que cela
                  mérite.
                </p>
                <p>
                  Sur ce mur, nous vendons des briques et vous pouvez en
                  sponsoriser une ou plusieurs. Chaque brique ou groupe de
                  brique portera le souvenir des précurseurs de Luendu, ceux qui
                  auront compris l’impérieuse nécessité d’AGIR, pour bâtir,
                  maintenant, un espace Grand Kasaï responsable, compétitif et
                  prospère.
                </p>
                <p>
                  Cela n’arrivera pas par hasard et aura un coût. Nous vous
                  encourageons à participer et à donner généreusement. Cinq
                  personnes volontaires parmi les donateurs constitueront
                  l’équipe de surveillance de l’utilisation des moyens
                  mobilisés.
                </p>
                <p>L’équipe de gestion aura pour mission annuelle de :</p>
                <ol className="list-decimal flex flex-col gap-2">
                  <li>
                    Mobiliser du foncier (1.000.000 ha) de tous types dans les 5
                    provinces du Centre.
                  </li>
                  <li>
                    Identifier des réserves/ressources naturelles en vue de
                    planifier les stratégies minières pour une exploitation
                    responsable.
                  </li>
                  <li>
                    Planifier des sites à aménager pour accueillir 1.000.000
                    unités de logement dans l’espace des 5 provinces, premier
                    lot d’un projet intensif de logement décent. Ce projet sera
                    ouvert à la diaspora interne et celle vivant dans les pays
                    étrangers. Le lancement de ces travaux sera financé par le
                    levier des fonciers et une ingénierie spéciale.
                  </li>
                  <li>
                    Les travailleurs des BTP créeront une demande des produits
                    alimentaires et nous nous donnons pour initiative de lancer
                    5 x 5.000 ha en vue d’inonder les provinces et exporter vers
                    le Sud et l’Ouest.
                  </li>
                  <li>
                    Pour transformer les produits alimentaires, des projets
                    énergétiques sont impératifs. Ils seront financés par un
                    modèle collaboratif en obtenant pour le compte de Luendu des
                    licences de producteurs, transporteurs et distributeurs
                    d’électricité.
                  </li>
                </ol>
                <table className="border text-center">
                  <tbody>
                    <tr>
                      <td className="border border-black p-2" colSpan={6}>
                        People & Luendu
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black w-1/ p-2" colSpan={3}>
                        Food
                      </td>
                      <td className="border border-black w-1/2 p-2" colSpan={3}>
                        Energie
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="text-center border border-black w-1/3 p-2"
                        colSpan={2}
                      >
                        Land
                      </td>
                      <td className="w-1/3 border border-black p-2" colSpan={2}>
                        Natural Ressources
                      </td>
                      <td className="w-1/3 border border-black p-2" colSpan={2}>
                        Construction
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Tenez, le mur qui sera lancé en 2025 sera le reflet du MUR
                  DIGITAL qui est sur le site de Luendu Chaque brique y
                  correspond à un onglet où vous pouvez raconter votre histoire
                  ou celle de votre famille, votre parcours avec Luendu, votre
                  expérience personnelle et même vos publications.{" "}
                </p>
                <p>
                  Nos sponsors sont classifiés en 4 catégories et toute la
                  reconnaissance leur sera rendu. Plus, des informations
                  stratégiques des projets leurs seront livrées avant tout le
                  monde. Ce sera le prestige durable réservé à ceux qui auront
                  cru au projet et mis la main à la poche pour que cela SOIT.{" "}
                </p>
                <table className="border">
                  <tbody>
                    <tr>
                      <td className="border border-black p-2 font-semibold">
                        Dons (milliers USD)
                      </td>
                      <td className="border border-black p-2 font-semibold">
                        Catégorie
                      </td>
                      <td
                        className="border border-black p-2 italic"
                        rowSpan={5}
                      >
                        Si nous avons un très grand donateur, la communauté sera
                        invitée à lui exprimer la gratitude familiale.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2">1-3</td>

                      <td className="border border-black p-2">Champion</td>
                    </tr>
                    <tr>
                      {" "}
                      <td className="border border-black p-2">4-5</td>
                      <td className="border border-black p-2">Argent</td>
                    </tr>
                    <tr>
                      {" "}
                      <td className="border border-black p-2">6-10</td>
                      <td className="border border-black p-2">Or</td>
                    </tr>
                    <tr>
                      {" "}
                      <td className="border border-black p-2">Au-délà de 10</td>
                      <td className="border border-black p-2">Diamant</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold mt-4">
                    Fiche d’engagement des membres d’honneur de LUENDU asbl{" "}
                  </h2>
                  <span>(2.500 briques d’honneur) </span>
                  <p>
                    Un diplôme d’honneur vous sera remis avec communication pour
                    célébrer votre entrée dans le comité d’honneur.{" "}
                  </p>
                  <p>
                    J’ai compris la pertinence du programme LUENDU asbl ainsi
                    que l’importance des ambitions en présence.{" "}
                  </p>
                  <p>
                    Fier de mon appartenance au HUB central de l’économie, je
                    m’engage à œuvrer pour l’émergence d’une économie forte et
                    intégratrice de l’économie nationale.{" "}
                  </p>
                  <p>
                    Je soutiens Luendu asbl dans sa phase de levée de fonds pour
                    appuyer l’équipe opérationnelle.{" "}
                  </p>
                  <p>
                    Ma contribution au budget global de Luendu (±USD250.000)
                    nécessaires pour faire fonctionner l’équipe de départ
                    pendant un an est de USD.{" "}
                  </p>
                  <table>
                    <thead className="font-semibold border border-black">
                      <tr>
                        <td className="border border-black p-2">Choix</td>
                        <td className="border border-black p-2">
                          Dons (milliers USD)
                        </td>
                        <td className="border border-black p-2">Catégorie</td>
                      </tr>
                    </thead>
                    <tbody>
                      {tables2.map((data, id) => (
                        <tr key={id}>
                          <td className="border p-1">{data.montant}</td>
                          <td className="border p-1">{data.don}</td>
                          <td className="border p-1">{data.categorie}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-3 font-semibold text-gray-600">
                    Chaque millier de USD correspond à une brique sur le mur
                    d’honneur phygital qui sera érigé.{" "}
                  </p>
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 p-2 rounded-md text-white"
                      onClick={() => setShowModal(false)}
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Sponsors;
