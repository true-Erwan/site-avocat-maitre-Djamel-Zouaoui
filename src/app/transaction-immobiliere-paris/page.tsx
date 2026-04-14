import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Transaction et Vente Immobilière Paris | Maître Djamel Zouaoui",
  description: "Sécurisez vos transactions immobilières à Paris : promesse de vente, compromis, conditions suspensives, et contentieux de la vente immobilière.",
};

export default function Transaction() {
  return (
    <>
      <PageHero 
        title="Transaction & Vente Immobilière" 
        subtitle="L'assistance juridique indispensable pour la vente ou l'acquisition de vos biens."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
          <FadeIn>
            <h2 className="text-3xl font-serif text-primary">Achat ou Vente : La prudence est de mise</h2>
            <p>
              Même lors de ventes intermédiées par des notaires, la présence d'un avocat permet de défendre **exclusivement vos intérêts**. Nous analysons les risques en amont et traitons les contentieux en aval.
            </p>
            <h3 className="text-2xl font-serif text-primary mt-8">Notre accompagnement</h3>
            <ul>
              <li><strong>Avant la signature :</strong> Revue critique de la promesse ou du compromis de vente (clauses pénales, diagnostics, conditions suspensives de prêt ou d'urbanisme).</li>
              <li><strong>Exécution de la vente :</strong> Refus de réitérer l'acte authentique de la part de l'acquéreur ou du vendeur, demande d'application de la clause pénale.</li>
              <li><strong>Rupture abusive :</strong> Action pour obliger à vendre judiciairement le bien immobilier.</li>
            </ul>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
