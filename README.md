# Site Web Cabinet d'Avocat - Maître Djamel Zouaoui

Site institutionnel et professionnel présentant les expertises du Cabinet de Maître Djamel Zouaoui, Avocat au Barreau de Paris. Développé avec Next.js, React et TailwindCSS.

## Fonctionnalités

- Présentation dynamique des expertises juridiques (Immobilier, Copropriété, Enchères, Baux commerciaux, etc.).
- Interface élégante et fluide développée en React/Next.js.
- Formulaire de demande de consultation **fonctionnel** géré par le service tiers **EmailJS**.

## Prérequis et Installation

1. Assurez-vous d'avoir Node.js installé.
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
   L'application sera accessible sur [http://localhost:3000](http://localhost:3000).

## Configuration du formulaire d'e-mails (EmailJS)

Le formulaire de la page "Contact" utilise **EmailJS** pour relayer les emails de manière sécurisée vers l'adresse du cabinet, sans pour autant exposer de mot de passe dans le code source.

Pour que l'envoi fonctionne, vous devez créer un fichier nommé `.env` à la racine du projet (s'il n'existe pas déjà) afin d'y renseigner vos clés d'API.

Contenu attendu du fichier `.env` :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key

# Ancienne clé Web3Forms (conservée au cas où)
NEXT_PUBLIC_WEB3FORMS_KEY=votre_cle_web3forms
```

**Notes sur EmailJS :**
- L'identifiant du service est lié au compte Gmail configuré (ex: `service_pos2qga`).
- Le Template ID est lié au modèle de message créé.
- La limite d'envoi gratuite est de 200 e-mails par mois.

## Mise en ligne (Déploiement)

Pour une mise en production, la solution la plus simple est d'utiliser [Vercel](https://vercel.com).
**Important** : Sur la plateforme sur laquelle vous déploierez le site, pensez bien à ajouter manuellement les 3 variables d'environnement (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, etc.) dans les paramètres du serveur, car le fichier `.env` n'est généralement pas mis en ligne par sécurité.
