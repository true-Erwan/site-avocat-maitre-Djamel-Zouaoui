import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Litige Locatif et Expulsion Paris | Maître Djamel Zouaoui",
  description: "Avocat à Paris expert en baux d'habitation. Loyers impayés, procédures d'expulsion, congés pour vente ou reprise.",
};

export default function LitigeLocatif() {
  return (
    <>
      <PageHero 
        title="Litiges Locatifs & Expulsions" 
        subtitle="Agissez rapidement face aux loyers impayés et aux conflits bailleur-locataire."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
          <FadeIn>
            <h2 className="text-3xl font-serif text-primary">Défense des propriétaires bailleurs à Paris</h2>
            <p>
              Face à un locataire indélicat, la rapidité d'exécution est essentielle. Les procédures d'expulsion sont extrêmement longues et encadrées, et la moindre erreur peut repousser l'issue du litige de plusieurs mois.
            </p>
            <h3 className="text-2xl font-serif text-primary mt-8">Étapes d'une procédure d'expulsion</h3>
            <ul>
              <li><strong>Mise en demeure et Commandement de payer :</strong> L'acte déclencheur délivré par un huissier partenaire.</li>
              <li><strong>Assignation en justice :</strong> Devant le Juge des Contentieux de la Protection (JCP).</li>
              <li><strong>Obtention de la résiliation judiciaire :</strong> Résiliation du bail et condamnation au paiement de l'arriéré locatif.</li>
              <li><strong>Expulsion forcée :</strong> Mise en œuvre avec le concours de la force publique si nécessaire.</li>
            </ul>
            <p>
              Le cabinet intervient également pour contester ou valider un <strong>congé pour reprise ou pour vente</strong>, protégeant ainsi vos droits sur votre patrimoine.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
