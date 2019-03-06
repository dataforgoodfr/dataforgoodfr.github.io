---
layout: project
title: Liris
description: Consulter les recettes et les dépense de l'État
season: 5
repository: https://
website: https://budget.parlement-ouvert.fr/
image: 5_liris.png
---

Plateforme web de visualisation des dépenses et recettes de l'État

---

## Le but

Le projet Liris est soutenu par le [Bureau Ouvert](https://parlement-ouvert.fr) et vise à rendre plus transparente l'information relative aux finances publiques. Le but est double : il s'agit de récolter et nettoyer l'information sous-jacente et de construire un outil de visualisation pour ces données. Une importance toute particulière a été donnée au fait de pouvoir comparer ces informations dans le temps.

## Qu'avons-nous produit ?

### Les deux visualisations des montants

Lors de ce projet, nous avons principalement produit deux applications.

[La première](https://budget.parlement-ouvert.fr) permet de visualiser les recettes de l'État ainsi que le Projet de Loi de Finances tel qu'il est présenté aux parlementaires sous forme de partition. Il est possible de naviguer dans les différentes dépenses et de visualiser clairement à quoi sont employées les dépenses de l'État, à une année donnée et entre différentes années.

[La seconde](https://budget-ouvert.github.io/simpleRainbowViz/) permet la visualisation du Projet de Loi de Finances 2019 et sa comparaison explicite avec le PLF 2018, où l'on voit clairement quels crédits ont été augmentés ou baissés.

### Un algorithme de comparaison entre deux années consécutives du budget

Une partie importante du travail concerne l'implémentation d'un [algorithme](https://github.com/budget-ouvert/nlp-engine) de comparaison de deux graphes. Cet algorithme permet de suivre les postes de dépense dans le temps et ainsi d'être capable de suivre les variation d'une dépense / recette sur plusieurs années.
