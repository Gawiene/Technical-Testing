# Vue.js - Test Technique

Cette application doit afficher tous les pays du monde et permettre d'obtenir des informations détaillées pour chacun.

## Démarrer le projet

### Docker

* Exécuter la commande : `docker compose up -d`
* Accéder à http://localhost:8001/

### Alternative

* Exécuter : `npm install`
* Puis : `npm run dev`

## Choses à faire

* Afficher le nom et le drapeau de tous les pays du monde.
* En cliquant sur un pays, on affiche le détail d'un pays : le nom du pays, le drapeau, le nom des capitales, le nom des monnaies, le nombre d'habitants, la superficie et les langues parlées.

## Consignes

* Récupérer les pays grâce à l'API `https://restcountries.com/v3.1/all`.
* Implémentation libre.

## Aller plus loin

* Créer un champ permettant de filtrer les pays affichés selon leur nom.
* Créer un menu déroulant permettant de filtrer les pays affichés selon le continent (region).

