import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Enchère Immobilière Paris | Maître Djamel Zouaoui",
  description: "Avocat au Barreau de Paris pour enchères immobilières et saisies immobilières. Représentation aux audiences des ventes par adjudication au Tribunal Judiciaire.",
};

export default function EnchereImmobiliere() {
  return (
    <>
      <PageHero 
        title="Avocat Enchère Immobilière à Paris" 
        subtitle="Représentation exclusive et sécurisation de vos enchères judiciaires."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-slate">
          <FadeIn>
            <h2 className="text-3xl font-serif text-primary">Pourquoi faire appel à un avocat pour les ventes aux enchères ?</h2>
            <p>
              Les ventes par adjudication au Tribunal Judiciaire de Paris sont soumises à un formalisme très strict. La représentation par un avocat inscrit au Barreau du Tribunal où se déroule la vente est **obligatoire**.
            </p>
            <p>
              Maître Djamel Zouaoui vous accompagne à chaque étape du processus :
            </p>
            <ul>
              <li><strong>Analyse du Cahier des Conditions de Vente (CCV) :</strong> Nous étudions méticuleusement les servitudes, les baux en cours, et les garanties financières.</li>
              <li><strong>Préparation de l'audience :</strong> Vérification de votre capacité financière, préparation des chèques de banque (caution).</li>
              <li><strong>Audience d'adjudication :</strong> Nous portons les enchères pour votre compte au Tribunal Judiciaire de Paris.</li>
            </ul>
            <h3 className="text-2xl font-serif text-primary mt-12">Déroulement d'une enchère judiciaire</h3>
            <p>
              Contrairement à une transaction classique, les enchères (saisies immobilières, licitations, liquidations) comportent un délai de surenchère de 10 jours. Notre cabinet gère l'ensemble de la procédure jusqu'à la consignation du prix et la publication du jugement valant titre de propriété.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
