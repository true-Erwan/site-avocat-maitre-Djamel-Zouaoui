import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Avocat Saisie Immobilière Paris | Défense et Recours | Maître Zouaoui",
  description: "Avocat expert en procédure de saisie immobilière à Paris. Accompagnement devant le Juge de l'Exécution du Tribunal Judiciaire pour créanciers et débiteurs.",
};

export default function SaisieImmobiliere() {
  return (
    <>
      <PageHero 
        title="Avocat Saisie Immobilière à Paris" 
        subtitle="Défense de vos intérêts patrimoniaux et assistance devant le Juge de l'Exécution."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-none">
              <h2 className="text-3xl font-serif text-primary mb-6">Comprendre la procédure de saisie immobilière à Paris</h2>
              <p>
                La procédure de saisie immobilière est une mesure d'exécution forcée particulièrement lourde et complexe. Qu'elle soit initiée par une banque, un syndicat de copropriété ou un créancier institutionnel, elle obéit à des délais stricts devant le <strong>Tribunal Judiciaire de Paris</strong>.
              </p>
              <p>
                L'intervention d'un <strong>avocat inscrit au Barreau de Paris</strong> est non seulement indispensable juridiquement (la représentation est obligatoire), mais c'est également votre meilleur atout pour protéger votre patrimoine ou, à l'inverse, recouvrer efficacement votre créance.
              </p>

              <div className="my-12 grid md:grid-cols-2 gap-8 not-prose">
                <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-accent shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">Pour le débiteur saisi</h3>
                  <ul className="space-y-3 text-gray-600">
                     <li className="flex items-start"><span className="text-accent font-bold mr-3 mt-1">✓</span> Analyse des vices de procédure du commandement</li>
                     <li className="flex items-start"><span className="text-accent font-bold mr-3 mt-1">✓</span> Demande de délais de grâce pour apurer la dette</li>
                     <li className="flex items-start"><span className="text-accent font-bold mr-3 mt-1">✓</span> Demande d'autorisation de vente amiable du bien</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-primary shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">Pour le créancier poursuivant</h3>
                  <ul className="space-y-3 text-gray-600">
                     <li className="flex items-start"><span className="text-accent font-bold mr-3 mt-1">✓</span> Rédaction et délivrance du commandement de payer</li>
                     <li className="flex items-start"><span className="text-accent font-bold mr-3 mt-1">✓</span> Assignation et représentation à l'audience d'orientation</li>
                     <li className="flex items-start"><span className="text-accent font-bold mr-3 mt-1">✓</span> Conduite de la procédure jusqu'à l'adjudication finale</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-primary mt-12 mb-4">Les 3 étapes clés au Tribunal Judiciaire</h3>
              
              <h4 className="text-lg font-bold text-slate-800">1. Le Commandement de Payer valant Saisie</h4>
              <p>
                C'est le point de départ de la procédure. Cet acte, signifié par un commissaire de justice, vous laisse un délai de deux mois pour régler la cause de la saisie. Passé ce délai, le commandement d'indisponibilité est publié au Service de la Publicité Foncière de Paris, signifiant que votre immeuble ne peut plus être vendu sans l'accord de la justice.
              </p>

              <h4 className="text-lg font-bold text-slate-800">2. L'Audience d'Orientation (Juge de l'Exécution)</h4>
              <p>
                C'est l'audience charnière qui se déroule au <strong>Tribunal Judiciaire (Parvis du Tribunal de Paris)</strong>. Lors de cette audience, nous pouvons faire valoir vos contestations sur le montant de la dette, soulever l'éventuelle nullité ou la prescription, ou encore solliciter <strong>l'autorisation de vendre votre bien à l'amiable</strong> (solution souvent plus protectrice de vos intérêts financiers).
              </p>

              <h4 className="text-lg font-bold text-slate-800">3. La Vente par Adjudication (Vente forcée)</h4>
              <p>
                Si aucune issue amiable ou de règlement de la dette n'est envisageable, le bien est vendu au plus offrant lors d'une audience d'adjudication publique tenue à la barre du Tribunal. Vous pouvez consulter notre page dédiée aux <Link href="/enchere-immobiliere-paris" className="text-accent font-semibold hover:underline">enchères immobilières</Link> pour en savoir plus sur cette étape spécifique.
              </p>


            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
