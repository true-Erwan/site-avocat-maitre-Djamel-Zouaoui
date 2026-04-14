import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Vice Caché Immobilier Paris | Maître Djamel Zouaoui",
  description: "Défense en cas de vices cachés immobiliers, de malfaçons, droit de la construction. Actions en résolution ou diminution du prix.",
};

export default function VicesCaches() {
  return (
    <>
      <PageHero 
        title="Vices Cachés & Droit de la Construction" 
        subtitle="Protégez-vous contre les malfaçons, les désordres structurels ou les vices dissimulés par le vendeur."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
          <FadeIn>
            <h2 className="text-3xl font-serif text-primary">Que faire en cas de vice caché découvert après l'achat ?</h2>
            <p>
              Vous venez d'acquérir un bien à Paris ou en Île-de-France et vous découvrez de graves problèmes (humidité, charpente détériorée, nuisances inattendues). L'action en garantie des vices cachés peut être mise en œuvre.
            </p>
            <h3 className="text-2xl font-serif text-primary mt-8">Nos actions</h3>
            <ul>
              <li><strong>Expertise Judiciaire :</strong> Demande en référé pour faire nommer un expert reconnu et figer l'étendue des dommages.</li>
              <li><strong>Résolution de la Vente :</strong> Vous demandez l'annulation totale de la vente (restitution du bien contre le prix).</li>
              <li><strong>Action Estimatoire :</strong> Vous gardez le bien mais demandez une indemnisation correspondant au coût des réparations.</li>
            </ul>
            <h3 className="text-2xl font-serif text-primary mt-8">Droit de la construction</h3>
            <p>
              Le cabinet vous représente face aux promoteurs et constructeurs dans le cadre de <strong>la responsabilité décennale</strong> et <strong>biennale</strong>, ou pour des abandons de chantiers.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
