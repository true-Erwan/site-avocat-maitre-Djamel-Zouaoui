"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    
    // Config EmailJS
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Les clés EmailJS sont manquantes.");
      setStatus("error");
      return;
    }

    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: object.name,
        email: object.email,
        subject: object.subject,
        message: object.message,
      }
    };

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 p-8 text-center border border-accent">
        <h3 className="text-2xl font-serif text-accent mb-4">Message envoyé !</h3>
        <p className="text-gray-300">
          Nous avons bien reçu votre demande et vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nom & Prénom</label>
        <input type="text" id="name" name="name" required className="block w-full bg-white/10 border-transparent focus:border-accent focus:ring-0 text-white px-4 py-3" placeholder="Votre nom" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input type="email" id="email" name="email" required className="block w-full bg-white/10 border-transparent focus:border-accent focus:ring-0 text-white px-4 py-3" placeholder="vous@exemple.com" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Objet de votre demande</label>
        <select id="subject" name="subject" required className="block w-full bg-white/10 border-transparent focus:border-accent focus:ring-0 text-white px-4 py-3 [&>option]:text-primary">
          <option>Saisies immobilières</option>
          <option>Enchères immobilières</option>
          <option>Copropriété</option>
          <option>Baux</option>
          <option>Litiges locatifs & Expulsions</option>
          <option>Transactions immobilières</option>
          <option>Vices cachés</option>
          <option>Autre</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Votre message</label>
        <textarea id="message" name="message" required rows={4} className="block w-full bg-white/10 border-transparent focus:border-accent focus:ring-0 text-white px-4 py-3" placeholder="Décrivez brièvement votre situation..."></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full bg-accent text-primary font-bold py-4 hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-4 text-center">Une erreur s'est produite lors de l'envoi. Veuillez vérifier votre adresse email et réessayer.</p>
      )}
    </form>
  );
}
