import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avocat Enchères Immobilières Paris | Maître Djamel Zouaoui",
  description: "Avocat au Barreau de Paris pour enchères immobilières et saisies immobilières. Représentation aux audiences des ventes par adjudication au Tribunal Judiciaire.",
};

export default function EnchereImmobiliere() {
  return (
    <>
      <PageHero 
        title="Avocat Enchères Immobilières à Paris" 
        subtitle="Représentation exclusive et sécurisation de vos enchères judiciaires."
      />
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <div className="prose prose-lg prose-slate max-w-none">
              <h2 className="text-3xl font-serif text-primary mb-6">Acheter aux Enchères Immobilières Judiciaires : Mode d'Emploi</h2>
              <p>
                L'acquisition de biens à la barre du tribunal par le biais des enchères immobilières suscite un intérêt croissant. Qu'il s'agisse d'investissements locatifs ou de l'achat d'une résidence principale, les enchères immobilières permettent d'acquérir des maisons, des appartements ou des droits réels suite à une procédure judiciaire.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl shadow-sm not-prose">
                <p className="m-0 text-amber-900 leading-relaxed font-medium">
                  Cependant, acheter lors de ces enchères immobilières ne s'improvise pas. Il n’est prévu <strong className="text-amber-800">aucune condition suspensive de crédit</strong>, ni aucun <strong className="text-amber-800">délai de rétractation</strong>. L’adjudicataire ne peut donc jamais invoquer un refus de prêt bancaire pour se désister de son achat aux enchères immobilières.
                </p>
              </div>

              <p className="font-medium text-slate-800 text-xl border-l-4 border-accent pl-4 my-8">
                Notre cabinet d'avocats spécialisé en droit immobilier vous accompagne pour sécuriser votre projet d'investissement aux enchères immobilières.
              </p>

              <h3 className="text-2xl font-serif text-primary mt-12 mb-6">Avant les enchères immobilières : préparation et information</h3>
              <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                 <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                   <div className="text-primary mb-3"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
                   <h4 className="font-bold text-primary text-lg mb-2">Le Cahier des Conditions de Vente (CCV)</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">Les annonces sont diffusées en ligne et dans les journaux d’annonces légales. La consultation du CCV est l'étape fondatrice : ce document contient la description du bien, les diagnostics, la situation locative et les charges. Il est consultable au greffe ou auprès de l’avocat poursuivant.</p>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                   <div className="text-primary mb-3"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></div>
                   <h4 className="font-bold text-primary text-lg mb-2">La visite du bien</h4>
                   <p className="text-gray-600 text-sm leading-relaxed">Préalablement aux enchères immobilières, une seule et unique visite est organisée sur place. Elle se déroule sur un créneau limité, en présence d’un commissaire de justice.</p>
                 </div>
              </div>

              <h3 className="text-2xl font-serif text-primary mt-12 mb-6">Participer aux enchères immobilières : conditions et garanties</h3>
              <p>
                Le recours à un avocat inscrit au Barreau du tribunal judiciaire compétent est strictement obligatoire pour pouvoir porter des enchères immobilières.
              </p>
              
              <h4 className="text-xl font-bold text-slate-800 mt-8 mb-4">Les garanties financières</h4>
              <p>
                Pour participer sereinement aux enchères immobilières, deux garanties doivent être confiées à votre avocat avant l'audience :
              </p>
              <ul className="not-prose space-y-4 my-6">
                <li className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="bg-accent/10 text-accent p-2 rounded-full shrink-0 mt-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                  <div>
                    <strong className="block text-slate-800">Chèque de 10 % de la mise à prix</strong>
                    <span className="text-gray-600 text-sm">(minimum 3 000 €), à l’ordre du BÂTONNIER SÉQUESTRE.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <div className="bg-accent/10 text-accent p-2 rounded-full shrink-0 mt-1"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                  <div>
                    <strong className="block text-slate-800">Chèque pour provisionner les frais taxés</strong>
                    <span className="text-gray-600 text-sm">(majorés de 10 % de votre enchère maximale), à l’ordre de la CARPA.</span>
                  </div>
                </li>
              </ul>
              <p>
                Vous devrez également signer un <strong>mandat écrit</strong> fixant formellement à votre avocat votre plafond maximal pour ces enchères.
              </p>

              <h3 className="text-2xl font-serif text-primary mt-12 mb-6">Le déroulement de l’audience et la surenchère</h3>
              <p>
                L’audience d’adjudication des enchères immobilières est publique. Chaque enchère portée par un avocat relance un chronomètre de 90 secondes. Le dernier enchérisseur devient l'adjudicataire.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-lg not-prose">
                <div className="flex gap-3 items-center text-blue-900 font-medium">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span><strong>À noter :</strong> À Paris, ces audiences d'enchères immobilières se tiennent le jeudi à 14h00 au tribunal judiciaire.</span>
                </div>
              </div>

              <p>
                Attention, remporter les enchères le jour J ne suffit pas toujours. L’adjudicataire ne devient définitivement propriétaire qu’à l’expiration d'un <strong>délai de 10 jours</strong>. Durant cette période, toute personne peut former une surenchère d’au moins 10 % du prix. Si cela se produit, de nouvelles enchères immobilières sont organisées.
              </p>

              <h3 className="text-2xl font-serif text-primary mt-12 mb-6">Coûts, paiement et points de vigilance</h3>
              
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Le paiement du prix</h4>
                  <p className="text-sm">
                    L’adjudicataire dispose de 2 mois pour régler le prix sans pénalité. Entre 2 et 4 mois, des intérêts au taux légal s'appliquent. Passé 4 mois, une majoration de 5 % s'ajoute. À défaut de paiement, le bien retourne aux enchères (procédure de réitération) et l'acheteur défaillant perd ses garanties.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">Les coûts annexes</h4>
                  <p className="text-sm">
                    Outre le prix final, l’acquéreur doit régler des frais spécifiques (remplaçant les frais de notaire) : frais préalables (environ 10 000 €), droits de mutation (environ 5,85 %), frais de publication, émoluments et honoraires d'avocat.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm my-8 not-prose">
                <h4 className="text-red-800 font-bold text-lg mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Les risques à anticiper
                </h4>
                <ul className="text-red-900 text-sm space-y-2 list-disc list-inside">
                  <li>Les enchères requièrent une <strong>solvabilité immédiate</strong>.</li>
                  <li>Vous achetez le bien en l'état, <strong>sans recours possible pour vices cachés</strong>.</li>
                  <li>La loi Carrez ne s'appliquant pas, aucune réclamation n'est possible en cas d'erreur de superficie.</li>
                </ul>
              </div>

              <div className="bg-primary text-white p-10 rounded-2xl my-12 not-prose shadow-lg bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light to-primary relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif text-accent mb-6">Conclusion</h3>
                  <p className="mb-6 text-white/90 text-lg leading-relaxed">
                    Les enchères immobilières offrent de très belles opportunités, mais exigent une stratégie financière et juridique sans faille. En tant qu'avocats experts, nous analysons pour vous le cahier des conditions de vente et portons vos enchères pour garantir le succès de votre investissement.
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
