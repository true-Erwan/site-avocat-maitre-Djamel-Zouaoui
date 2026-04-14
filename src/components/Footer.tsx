import Link from "next/link";
import { MapPin, Phone, Mail, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 py-12 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-accent" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-white uppercase">
                Maître Djamel Zouaoui
              </span>
            </div>
          </div>
          <p className="text-sm border-l-2 border-accent pl-4">
            Avocat au Barreau de Paris<br />
            Spécialisé en Droit Immobilier
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wider">Expertises</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/enchere-immobiliere-paris" className="hover:text-accent transition-colors">Enchères Immobilières</Link></li>
            <li><Link href="/saisies-immobilieres-paris" className="hover:text-accent transition-colors">Saisies Immobilières</Link></li>
            <li><Link href="/droit-copropriete-paris" className="hover:text-accent transition-colors">Droit de la Copropriété</Link></li>
            <li><Link href="/baux-commerciaux-paris" className="hover:text-accent transition-colors">Baux Commerciaux</Link></li>
            <li><Link href="/litige-locatif-expulsion-paris" className="hover:text-accent transition-colors">Litiges Locatifs & Expulsions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-sans text-lg font-bold text-white uppercase tracking-wider">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="text-accent h-5 w-5 flex-shrink-0" />
              <span>61 boulevard de Sébastopol<br />75001 Paris</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent h-5 w-5 flex-shrink-0" />
              <span>06 60 82 05 06</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-accent h-5 w-5 flex-shrink-0" />
              <span>dja.zouaoui@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-xs text-center">
        <p>&copy; {new Date().getFullYear()} Maitre Djamel Zouaoui - Avocat au Barreau de Paris - Tous droits réservés.</p>
      </div>
    </footer>
  );
}
