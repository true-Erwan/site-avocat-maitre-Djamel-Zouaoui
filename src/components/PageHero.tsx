import { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-primary pt-32 pb-24 px-4 border-b-4 border-accent relative text-center">
        <div className="max-w-4xl mx-auto align-middle">
          <FadeIn>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              {subtitle}
            </p>
          </FadeIn>
        </div>
    </section>
  );
}
