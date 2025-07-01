# Plateforme de promotion musicale

Ce projet propose une base pour une application permettant de lancer des campagnes publicitaires sur **Meta**, **YouTube** et **TikTok** afin de promouvoir le travail d'artistes musiciens. L'objectif est de fournir un outil simple, pratique et intuitif.

Les variables d'environnement nécessaires pour la connexion à Supabase sont indiquées ci-dessous :

```
VITE_SUPABASE_URL=https://fbjnejkmprnuhqjyagjt.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Installation

1. Installez les dépendances Node.js :
   ```bash
   npm install
   ```
2. Créez un fichier `.env` à la racine du projet contenant les clés Supabase ci-dessus.
3. Lancez le serveur :
   ```bash
   npm start
   ```

## Fonctionnement

L'API Express expose deux routes principales :

- `GET /campaigns` : retourne la liste des campagnes enregistrées dans Supabase.
- `POST /campaigns` : enregistre une nouvelle campagne et appelle la fonction correspondant à la plateforme choisie (`meta`, `youtube` ou `tiktok`).

Les fonctions d'envoi vers les plateformes (`createMetaAdCampaign`, `createYouTubeAdCampaign`, `createTikTokAdCampaign`) sont à implémenter avec les appels aux API publicitaires officielles.

Ce dépôt constitue un point de départ pour bâtir une interface plus complète (par exemple avec React et Vite) permettant de gérer facilement les campagnes des artistes.
