import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Baux Commerciaux Paris | Maître Djamel Zouaoui",
  description: "Avocat baux commerciaux à Paris. Rédaction de bail, révision de loyer, renouvellement, indemnités d'éviction et litiges bailleur/preneur.",
};

export default function BauxCommerciaux() {
  return (
    <>
      <PageHero 
        title="Avocat Baux Commerciaux Paris" 
        subtitle="Sécurisez vos locaux commerciaux : conseil, rédaction et contentieux des baux commerciaux."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
          <FadeIn>
            <h2 className="text-3xl font-serif text-primary">Le bail commercial : Enjeu crucial pour l'entreprise</h2>
            <p>
              La conclusion, l'exécution et la rupture d'un bail commercial (statut des baux commerciaux) sont fortement encadrées par la loi. Notre cabinet conseille aussi bien les bailleurs institutionnels ou privés, que les locataires exploitants.
            </p>
            <h3 className="text-2xl font-serif text-primary mt-8">Notre expertise en droit des baux</h3>
            <ul>
              <li><strong>Rédaction sur mesure :</strong> Loyer, cautionnement, clause résolutoire, répartition des charges et travaux.</li>
              <li><strong>Renouvellement et Éviction :</strong> Congé avec offre de renouvellement, fixation du loyer révisé, fixation de l'indemnité d'éviction en cas de refus.</li>
              <li><strong>Procédures contentieuses :</strong> Mise en jeu de la clause résolutoire, loyers impayés, de-spécialisation.</li>
            </ul>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
