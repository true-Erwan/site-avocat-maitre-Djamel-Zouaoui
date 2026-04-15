import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale, Building, Gavel, FileText, Key, AlertTriangle, Shield } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  const expertises = [
    { title: "Enchères Immobilières", desc: "Représentation et portage d'enchères au Tribunal Judiciaire de Paris.", icon: <Gavel className="w-8 h-8 text-accent" />, href: "/enchere-immobiliere-paris" },
    { title: "Saisies Immobilières", desc: "Défense des propriétaires saisis, délais de grâce et audience d'orientation.", icon: <Shield className="w-8 h-8 text-accent" />, href: "/saisies-immobilieres-paris" },
    { title: "Copropriété", desc: "Litiges, AG, syndics et recouvrement de charges.", icon: <Building className="w-8 h-8 text-accent" />, href: "/droit-copropriete-paris" },
    { title: "Baux Commerciaux", desc: "Rédaction, renouvellement et procédures d'éviction.", icon: <FileText className="w-8 h-8 text-accent" />, href: "/baux-commerciaux-paris" },
    { title: "Litiges Locatifs", desc: "Expulsions, recouvrement de loyers impayés.", icon: <AlertTriangle className="w-8 h-8 text-accent" />, href: "/litige-locatif-expulsion-paris" },
    { title: "Transactions", desc: "Sécurisation de vos achats et ventes immobilières.", icon: <Key className="w-8 h-8 text-accent" />, href: "/transaction-immobiliere-paris" },
    { title: "Vices Cachés", desc: "Malfaçons et droit de la construction.", icon: <Scale className="w-8 h-8 text-accent" />, href: "/vice-cache-construction-paris" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Bureau d'avocat à Paris"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/80" /> {/* Dark Navy Overlay */}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Avocat en Droit <br />
              <span className="text-accent italic font-light">Immobilier à Paris</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
              Défense, conseil et représentation de haut niveau. 
              Maître Djamel Zouaoui vous accompagne dans vos litiges et projets immobiliers.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-accent text-primary font-semibold hover:bg-white transition-colors duration-300">
              Demander une consultation
            </Link>
            <Link href="#expertises" className="px-8 py-4 border border-white hover:bg-white/10 transition-colors duration-300">
              Découvrir nos expertises
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mb-8 text-center">
              Maître Djamel Zouaoui
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>
            
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p className="text-center font-semibold text-xl text-primary">
                Prestation de serment en 1996 • 30 ans d'expérience
                <br />
                Exercice au sein du Barreau de Paris
              </p>

              <div className="bg-gray-50/80 p-8 border-l-4 border-accent shadow-sm">
                <h3 className="font-serif text-2xl text-primary font-bold mb-4">Formation d'Excellence</h3>
                <p className="mb-4 font-medium">
                  Études au sein de la prestigieuse Université de Paris 2 - Assas avec mentions pour chacune des années. Titulaire de parcours exigeants :
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Maîtrise (Master)</strong> en droit des affaires et fiscalité avec mention</li>
                  <li><strong>Maîtrise (Master)</strong> en droit privé avec mention</li>
                  <li><strong>Certificat de sciences criminelles</strong> de l'Institut de criminologie et de droit pénal de Paris</li>
                  <li><strong>Certificat de sciences criminologiques</strong> de l'Institut de criminologie et de droit pénal</li>
                  <li><strong>Diplôme d'études supérieures spécialisées en droit immobilier</strong> avec mention avocat mandataire en transactions immobilières</li>
                </ul>
              </div>

              <div className="bg-white">
                <p className="mb-4">
                  Inscrit au Barreau de Paris, le Cabinet a forgé son expertise sur le droit de l'immobilier. 
                  Nous accompagnons une <strong>clientèle de particuliers et de professionnels</strong> (syndics de copropriétés, promoteurs, marchands de biens...).
                </p>
                <p>
                  Que vous soyez investisseur, propriétaire bailleur, copropriétaire ou chef d'entreprise engagé dans un bail commercial, 
                  le cabinet déploie des stratégies juridiques sur mesure pour protéger votre patrimoine et défendre vos intérêts avec pugnacité devant les juridictions parisiennes et nationales.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Expertises Grid */}
      <section id="expertises" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm font-bold tracking-widest text-accent uppercase">Domaines d'intervention</span>
              <h2 className="font-serif text-4xl text-primary font-bold mt-4">Nos Expertises Immobilières</h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-start hover:-translate-y-1">
                    <div className="mb-6 p-4 bg-primary/5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                    <span className="text-accent font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                      En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <Scale className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-serif text-4xl mb-6">Besoin d'un Avocat sur Paris ?</h2>
            <p className="text-gray-300 mb-10 text-lg">
              Une procédure en vue ? Un contrat à auditer ? N'attendez pas qu'il soit trop tard pour sécuriser votre position.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-primary font-bold hover:bg-accent transition-colors duration-300 text-lg">
              Contactez le Cabinet
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
