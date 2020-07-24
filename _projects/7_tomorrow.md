---
layout: project
title: Tomorrow - Impact des plats
description: Estimer l'impact carbone d'un plat à partir d'une simple photo.
season: 7
repository:
website: https://www.tmrow.com/
image: 7_tomorrow.jpg
---

## Tomorrow

Tomorrow est une startup franco-danoise qui crée des solutions tech pour accompagner les organisations et les citoyens à prendre conscience de leur empreinte carbone et la réduire.

Parmi les projets créés par Tomorrow, on retrouve l’electricityMap, l’appli North et bientôt Bloom, la solution SaaS pour aider les entreprises à calculer leur empreinte carbone, à la réduire et à la communiquer.

Les projets de Tomorrow sont en grande partie open-source : https://github.com/tmrowco

<br>

## Le projet

Le projet consiste à estimer l'impact carbone d'un plat à partir d'une photo prise par un utilisateur.

Afin d'accompagner le plus facilement les personnes, le projet a pour but de simplifier au maximum les manipulations pour l'utilisateur en ne lui faisant uploader qu'une photo de son plat et en retournant la liste des ingrédients ainsi que leurs impacts carbones.

Il comporte deux phases principales :
- Retrouver une recette (et surtout les ingrédients) à partir de la photo uploadée.
- Identifier l'impact carbone des différents ingrédients.

L'ensemble du projet a été encapsulé dans une API afin de démontrer la possibilité d'embarquer ce type d'analyse dans une application. Une application web a été réalisée dans le cadre du projet Data for Good mais laisse place à la possibilité de faire une application mobile pour une intégration dans l'application existante North développée par Tomorrow.


## Les données

Les données sur l'impact carbone

Les impacts carbones des différents ingrédients et produits de la vie courante sont mis à disposition par l'Agence de la transition écologique Ademe((https://www.ademe.fr/)) à travers les bases de données AGRIBALYSE® et seront disponible au grand publiques au mois d'octobre (https://ecolab.ademe.fr/agribalyse).

Les recettes et photos

Développé par le MIT, le projet 1+ recipes (http://pic2recipe.csail.mit.edu/) contient l'ensemble des données et modèles pré-entrainés pour réussir à associer à une image donnée une recette (et inversement si nécessaire).

Un autre projet inspiré de ce dernier a également été développé par les équipes de recherche de Facebook. Voici le lien (https://github.com/facebookresearch/inversecooking) du repo GitHub de leur projet.
