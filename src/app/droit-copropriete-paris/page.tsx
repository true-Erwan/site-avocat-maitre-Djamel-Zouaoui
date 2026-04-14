import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Droit de la Copropriété Paris | Maître Djamel Zouaoui",
  description: "Avocat spécialisé en droit de la copropriété à Paris. Litiges entre copropriétaires, responsabilité du syndic, recouvrement de charges, annulation d'AG.",
};

export default function Copropriete() {
  return (
    <>
      <PageHero 
        title="Droit de la Copropriété" 
        subtitle="Défense des copropriétaires, des syndicats et gestion des conflits en copropriété à Paris."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
          <FadeIn>
            <h2 className="text-3xl font-serif text-primary">Un droit technique et complexe</h2>
            <p>
              Le droit de la copropriété exige une technicité parfaite. Que vous soyez un syndicat des copropriétaires, un syndic bénévole ou un copropriétaire subissant un préjudice, notre cabinet vous apporte son expertise de pointe.
            </p>
            <h3 className="text-2xl font-serif text-primary mt-8">Nos domaines d'intervention</h3>
            <ul>
              <li><strong>Recouvrement de charges :</strong> Procédures rapides pour préserver la trésorerie de la copropriété.</li>
              <li><strong>Contestation d'Assemblées Générales :</strong> Demande d'annulation de résolutions abusives ou irrégulières.</li>
              <li><strong>Responsabilité du syndic :</strong> Carence, fautes de gestion ou non-exécution des travaux.</li>
              <li><strong>Travaux et sinistres :</strong> Dégâts des eaux provenant des parties communes, atteinte aux parties privatives, travaux non-autorisés.</li>
            </ul>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
