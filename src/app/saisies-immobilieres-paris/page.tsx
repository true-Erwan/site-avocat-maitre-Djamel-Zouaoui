import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";


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
              <h2 className="text-3xl font-serif text-primary mb-6">Guide Juridique : Comprendre la Procédure de Saisie Immobilière</h2>
              <p>
                La saisie immobilière constitue l’une des procédures d’exécution les plus lourdes et les plus importantes du droit français. Elle permet à un créancier, face à un débiteur défaillant, de faire procéder à la vente forcée des biens de ce dernier afin de recouvrer sa créance.
              </p>
              <p>
                Strictement encadrée par le Code des procédures civiles d’exécution, la saisie immobilière obéit à des règles particulièrement rigoureuses. Ces normes encadrant les saisies immobilières garantissent à la fois l'efficacité du recouvrement pour le créancier poursuivant et la protection des droits du débiteur saisi. En raison de sa complexité, la procédure de saisie immobilière implique l’intervention obligatoire d’un avocat inscrit au barreau du tribunal judiciaire compétent.
              </p>
              <p className="font-medium text-slate-800 text-xl border-l-4 border-accent pl-4 my-8">
                Notre cabinet d'avocats en droit des affaires et droit immobilier vous éclaire sur les mécanismes de la saisie immobilière.
              </p>

              <h3 className="text-2xl font-serif text-primary mt-12 mb-4">Le cadre spécifique de la saisie immobilière</h3>
              <p>La procédure de saisie immobilière présente plusieurs particularités qui la distinguent des autres voies d'exécution :</p>
              <ul>
                <li><strong>Contrôle judiciaire :</strong> La saisie immobilière se déroule sous le contrôle direct et permanent du juge de l’exécution du tribunal judiciaire.</li>
                <li><strong>Biens concernés :</strong> Les biens visés par la saisie immobilière peuvent être des maisons, des appartements, ou des droits réels tels que l'usufruit ou la nue-propriété.</li>
                <li><strong>Vente publique :</strong> L'aboutissement de la saisie immobilière est la vente publique à l’audience, portée exclusivement par des avocats.</li>
              </ul>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-xl shadow-sm not-prose">
                <p className="m-0 text-red-900 leading-relaxed">
                  <strong className="text-red-700">Attention :</strong> Dans le cadre d'une saisie immobilière, toute irrégularité procédurale peut entraîner des conséquences dramatiques. Une erreur peut mener à la nullité pure et simple de la procédure de saisie immobilière pour le créancier, ralentissant considérablement le recouvrement de sa créance.
                </p>
              </div>

              <div className="my-12 not-prose">
                <h3 className="text-2xl font-serif text-primary mb-8">Les situations menant aux saisies immobilières</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-accent">
                    <div className="text-accent mb-4"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                    <h4 className="text-lg font-bold text-primary mb-3">La saisie classique</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Il s'agit de la vente forcée à l’initiative d’un créancier (souvent un établissement bancaire) suite à des impayés.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-accent">
                    <div className="text-accent mb-4"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
                    <h4 className="text-lg font-bold text-primary mb-3">La liquidation judiciaire</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Ce cadre implique la réalisation des actifs par le biais de saisies immobilières lorsqu'une entreprise est en difficulté financière irrémédiable.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-accent">
                    <div className="text-accent mb-4"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
                    <h4 className="text-lg font-bold text-primary mb-3">La licitation</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Bien qu'il s'agisse de la vente d’un bien indivis (succession, divorce), la procédure emprunte souvent les voies de la saisie immobilière en cas de désaccord persistant.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-serif text-primary mt-12 mb-6">Les effets du jugement dans une saisie immobilière</h3>
              <p>
                Lorsque la procédure de saisie immobilière arrive à son terme, le juge rend un jugement d'adjudication. Ce document est central dans le dénouement des saisies immobilières :
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                 <div className="flex gap-5 items-start">
                   <div className="bg-primary/10 text-primary p-4 rounded-xl shrink-0"><svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                   <div>
                     <h4 className="font-bold text-primary text-xl mb-2">Titre d'expulsion</h4>
                     <p className="text-gray-600 leading-relaxed">Le jugement issu de la saisie immobilière vaut titre d’expulsion à l’encontre du propriétaire saisi et de tous les occupants de son chef.</p>
                   </div>
                 </div>
                 <div className="flex gap-5 items-start">
                   <div className="bg-accent/10 text-accent p-4 rounded-xl shrink-0"><svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                   <div>
                     <h4 className="font-bold text-primary text-xl mb-2">Rapidité d'exécution</h4>
                     <p className="text-gray-600 leading-relaxed">Cette particularité propre aux saisies immobilières permet une expulsion plus rapide du débiteur. Elle évite au nouvel acquéreur d'avoir à engager une nouvelle procédure judiciaire pour obtenir un jugement ordonnant l'expulsion.</p>
                   </div>
                 </div>
              </div>

              <div className="bg-primary text-white p-10 rounded-2xl my-12 not-prose shadow-lg bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-light to-primary relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif text-accent mb-6">L'importance de l'avocat en matière de saisies immobilières</h3>
                  <p className="mb-6 text-white/90 text-lg leading-relaxed">
                    Que vous soyez un créancier cherchant à initier une saisie immobilière pour récupérer des fonds, ou un débiteur faisant face à une menace de saisie immobilière, l'assistance d'un expert est vitale. La technicité des saisies immobilières exige une parfaite maîtrise juridique pour éviter les nullités ou pour faire valoir vos moyens de défense.
                  </p>
                  <p className="font-semibold text-xl text-white">
                    Notre cabinet d'avocats vous accompagne avec rigueur tout au long de votre procédure de saisie immobilière.
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
