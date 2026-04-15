import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";
import { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

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
                      <a href="https://maps.google.com/?q=61+Boulevard+de+Sébastopol,+75001+Paris,+France" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors block">
                        61 boulevard de Sébastopol<br />
                        75001 Paris, France
                      </a>
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

            {/* Contact Form */}
            <FadeIn delay={0.4} className="bg-primary p-10 text-white shadow-xl">
              <h2 className="text-3xl font-serif mb-8">Demande de consultation</h2>
              <ContactForm />
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  );
}
