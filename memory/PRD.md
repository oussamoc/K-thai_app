# PRD — K-THAI · Site Vitrine

## Problème initial (statement original)
« Là, tu vas me faire un site web. Je t'ai donné le menu. Tu vas me faire un site web comme je t'avais dit la dernière fois. » — avec le flyer menu du restaurant K-THAI (l'Asie dans l'assiette), 94 avenue Roul, 33400 Talence.

## Choix utilisateur
- Site vitrine élégant, commandes par téléphone uniquement (pas de panier/paiement)
- Style laissé au designer → direction noir & or luxe thaï (fidèle au flyer)
- Menu repris tel quel depuis le flyer
- Section contact avec Google Maps + numéro cliquable 05 57 93 91 46

## Architecture
- Frontend React (CRA + craco), Tailwind, framer-motion, lenis (smooth scroll), lucide-react
- Aucun backend nécessaire (site 100% vitrine)
- Fichiers clés : src/App.js, src/data/menu.js (données menu centralisées), src/components/{Navbar,Hero,Marquee,Manifesto,MenuSection,Infos,Contact,Footer,Reveal}.jsx

## Personas
- Client local de Talence qui veut voir la carte et appeler pour commander
- Client mobile qui veut appeler en un geste (barre d'appel sticky)

## Implémenté (09/2026 — v6, correctifs client)
- Hero : badges « Cuisine maison / Produits frais » supprimés, nouveau texte de présentation, vraie photo Pad Thaï maison avec mention « Plat signature — Pad Thaï » au-dessus, badges flottants supprimés
- Concept : titre « Une cuisine traditionnelle et faite maison. », légende photo nems → « Des nems fraîchement roulés »
- La Carte : nouveau sous-titre avec livraison gratuite dès 25 € ; Formule corrigée = 1 entrée + 1 plat + 1 boisson ou 1 dessert (19 €), encadrés retirés
- Plats reclassés : Pad Thaï, Plat Végétarien, Crevettes Aigre-Douce, Bo Bun, Nouilles Chinoises, Bœuf Loc Lac, Bœuf Citronnelle, Poulet Croustillant, Poulet Saté, Poulet Noix de Cajou
- Tags des cartes (Incontournable, Gourmand…) transformés en texte simple sans encadré ; tags « Boisson » supprimés ; « Eaux Minérales » au pluriel
- Infos : nouveaux textes Sur place / À emporter / Livraison ; encadré « Livraison gratuite dès 25 € » supprimé (doublon)
- Contact : encadré « Commandes par téléphone » supprimé, reste adresse + horaires + Google Maps

## Implémenté (09/2026 — v5)
- Photos desserts ajoutées : Salade de Fruits, Ananas Frais — la carte est maintenant 100% illustrée avec les photos du restaurant

## Implémenté (09/2026 — v4)
- Photos entrées ajoutées (ordre client) : Nems Légumes, Nems Poulet, Thaï Wings — Nems Légumes aussi illustrés dans l'onglet Végétarien
- Reste sans photo : desserts uniquement (salade de fruits, ananas frais)

## Implémenté (09/2026 — v3)
- Nouvel onglet « Végétarien » regroupant : Plat Végétarien, Nems Légumes + versions végétariennes du Bo Bun, Pad Thaï et Nouilles Chinoises (validé par le client comme bonne idée)
- Photos finales ajoutées : Poulet Croustillant et Poulet Saté — les 10 plats ont désormais leur photo maison
- Reste sans photo : entrées (nems, wings) et desserts

## Implémenté (09/2026 — suite)
- Formule « La Formule » à 19,00 € : 1 plat au choix + 1 boisson fraîche OU 1 dessert — carte dorée en tête de La Carte avec bouton d'appel
- 3 nouvelles photos maison : Pad Thaï, Poulet Noix de Cajou, Nouilles Chinoises (WebP optimisées)
- Reste sans photo : Poulet Croustillant, Poulet Saté, entrées, desserts

## Implémenté (09/2026)
- Vraies photos du restaurant intégrées : Bœuf Loc Lac, Bœuf Citronnelle, Crevettes Aigre-Douce, Bo Bun, Plat Végétarien (optimisées WebP, /public/images/dishes/)
- Ordre des plats selon la liste du client : Poulet Croustillant, Poulet Saté, Bœuf Loc Lac, Poulet Noix de Cajou, Bœuf Citronnelle, Crevettes Aigre-Douce, Nouilles Chinoises, Bo Bun, Plat Végétarien, Pad Thaï
- Pad Thaï : mention « au choix bœuf, crevettes, poulet ou végétarien » ajoutée
- Cartes du menu avec photo quand disponible (zoom au survol, fondu doré)

## Implémenté (07/2026)
- Hero cinétique : révélation masquée ligne par ligne, image Pad Thaï en arche avec parallaxe, badges animés
- Marquee éditorial lent (plats en contour doré)
- Section Concept en chapitres numérotés 01/02/03 (produits frais, wok maison, authenticité)
- La Carte : onglets animés Entrées / Plats / Desserts & Boissons, prix et tags du flyer, bandeau appel
- Infos Pratiques : Sur place / À emporter / Livraison gratuite dès 25€, horaires, carte livraison
- Contact : carte Google Maps stylisée sombre, carte téléphone cliquable (tel:0557939146), adresse + horaires
- Footer avec mention du flyer + bouton retour en haut, barre d'appel sticky mobile
- Navigation glassmorphism + menu mobile animé, grain overlay, scroll Lenis

## Vérifié
- Chargement hero, révélation titre, images (pad thaï, nems, wings) OK
- Onglets du menu (Entrées/Plats) OK, carte Google Maps chargée OK
- Rendu mobile 390px + barre d'appel sticky OK
- Aucune erreur console bloquante

## Backlog priorisé
- P1 : Photos réelles des plats du restaurant (remplacer les photos d'illustration)
- P1 : Logo K-THAI original (bol/baguette du flyer) en remplacement du wordmark texte
- P2 : QR code Google Maps comme sur le flyer
- P2 : Page mentions légales
- P2 : Formulaire de commande par email (sans paiement) si demandé

## Prochaines tâches
- Recueillir les vraies photos du restaurant
- Ajouter avis clients / note Google si fournie
