import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Droit des Baux Paris | Maître Djamel Zouaoui",
  description: "Avocat expert en droit des baux à Paris. Rédaction de bail (commercial, d'habitation, professionnel), révision de loyer, renouvellement et litiges.",
};

export default function Baux() {
  return (
    <>
      <PageHero 
        title="Avocat Droit des Baux Paris" 
        subtitle="Sécurisez vos contrats de location : conseil, rédaction et contentieux des baux (commerciaux, d'habitation, professionnels)."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
          <FadeIn>
            <h2 className="text-3xl font-serif text-primary">Le bail : Enjeu crucial pour votre activité et votre patrimoine</h2>
            <p>
              La conclusion, l'exécution et la rupture d'un bail sont fortement encadrées par la loi. Que ce soit pour un bail commercial, professionnel, ou d'habitation, notre cabinet sécurise vos droits et vous conseille en tant que bailleur ou locataire.
            </p>
            <h3 className="text-2xl font-serif text-primary mt-8">Notre expertise en droit des baux</h3>
            <ul>
              <li><strong>Baux Commerciaux et Professionnels :</strong> Rédaction sur mesure, renouvellement, fixation de loyers, et procédures d'éviction.</li>
              <li><strong>Baux d'Habitation :</strong> Rédaction sécurisée, délivrance de congés (pour vente ou reprise), et accompagnement du bailleur.</li>
              <li><strong>Procédures contentieuses :</strong> Mise en jeu de la clause résolutoire, recouvrement des loyers impayés, procédures d'expulsion et litiges locatifs.</li>
            </ul>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
