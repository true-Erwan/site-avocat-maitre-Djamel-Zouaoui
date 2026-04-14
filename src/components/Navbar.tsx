"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Accueil", href: "/" },
    { name: "Enchères Immobilières", href: "/enchere-immobiliere-paris" },
    { name: "Saisies Immobilières", href: "/saisies-immobilieres-paris" },
    { name: "Copropriété", href: "/droit-copropriete-paris" },
    { name: "Baux Commerciaux", href: "/baux-commerciaux-paris" },
    { name: "Litiges Locatifs", href: "/litige-locatif-expulsion-paris" },
    { name: "Transactions", href: "/transaction-immobiliere-paris" },
    { name: "Vices Cachés", href: "/vice-cache-construction-paris" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Scale className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wider uppercase text-white">
                  Maître Djamel Zouaoui
                </span>
                <span className="text-xs text-accent tracking-widest uppercase">
                  Avocat au Barreau de Paris
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-1 lg:space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-accent bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex xl:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-primary border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === link.href
                    ? "text-accent bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
