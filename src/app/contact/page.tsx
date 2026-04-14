import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contactez votre Avocat Immobilier à Paris | Maître Djamel Zouaoui",
  description: "Contactez le cabinet de Maître Djamel Zouaoui, avocat au barreau de Paris (75017). Consultation juridique en droit immobilier, copropriété et enchères.",
};

export default function Contact() {
  return (
    <>
      <PageHero 
        title="Contactez le Cabinet" 
        subtitle="Prenez rendez-vous pour faire valoir vos droits."
      />
      
      <section className="py-24 bg-gray-50 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <FadeIn delay={0.2} className="bg-white p-10 border border-gray-100 shadow-xl">
              <h2 className="text-3xl font-serif text-primary mb-8">Coordonnées du Cabinet</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-8 h-8 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-primary">Adresse à Paris</h3>
                    <p className="text-gray-600 mt-2">
                      61 boulevard de Sébastopol<br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-8 h-8 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-primary">Téléphone</h3>
                    <p className="text-gray-600 mt-2">
                      06 60 82 05 06<br />
                      <span className="text-sm italic text-gray-500">(Ligne directe)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-8 h-8 text-accent mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl text-primary">Email</h3>
                    <p className="text-gray-600 mt-2">
                      dja.zouaoui@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form Placeholder */}
            <FadeIn delay={0.4} className="bg-primary p-10 text-white shadow-xl">
              <h2 className="text-3xl font-serif mb-8">Demande de consultation</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nom & Prénom</label>
                  <input type="text" id="name" className="mt-1 block w-full bg-white/10 border-transparent focus:border-accent focus:ring-0 text-white px-4 py-3" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full bg-white/10 border-transparent focus:border-accent focus:ring-0 text-white px-4 py-3" placeholder="vous@exemple.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Objet de votre demande</label>
                  <select id="subject" className="mt-1 block w-full bg-white/10 border-transparent focus:border-accent focus:ring-0 text-white px-4 py-3 [&>option]:text-primary">
                    <option>Enchères immobilières</option>
                    <option>Copropriété</option>
                    <option>Baux commerciaux</option>
                    <option>Litiges locatifs & Expulsions</option>
                    <option>Transaction immobilière</option>
                    <option>Vices cachés</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Votre message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full bg-white/10 border-transparent focus:border-accent focus:ring-0 text-white px-4 py-3" placeholder="Décrivez brièvement votre situation..."></textarea>
                </div>
                <button type="button" className="w-full bg-accent text-primary font-bold py-4 hover:bg-white transition-colors duration-300">
                  Envoyer ma demande
                </button>
              </form>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}
