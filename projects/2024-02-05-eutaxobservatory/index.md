---
slug: eutaxobservatory
title: "EU Tax Observatory - Country by country tax reporting"
header_image_url: img/projects/eutaxobservatory.png
tags: [Saison 12, Lutte contre l'optimisation fiscale]
description: "Compilation de données sur la localisation des profits de multinationales afin de mieux appréhender l’évasion fiscale et l’optimisation fiscale agressive"
keywords:
  - Data For Good
sdgs: [sdg10,sdg16]
website: 
---

# Projet EU Tax Observatory

## Description courte
Création d'une base de données publique et d'outils d'analyse pour suivre la transparence fiscale des multinationales en Europe.

## Description longue
L'EU Tax Observatory développe une infrastructure technique complète pour collecter, traiter et rendre accessibles les données financières pays par pays des multinationales. Le projet vise à centraliser et analyser les rapports de transparence fiscale publiés par les grandes entreprises, notamment suite à la directive européenne de 2021, afin de permettre un meilleur suivi de leurs pratiques fiscales.

## Description du livrable
Une plateforme web intégrée comprenant trois composantes : un système automatisé de collecte de rapports PDF via l'API Google, une interface interactive pour le traitement et l'extraction des données des tableaux, et un outil de visualisation permettant au grand public d'explorer et d'analyser facilement les données financières des multinationales par pays.

## Contexte et importance du projet 
L'évasion fiscale des multinationales est devenue un enjeu majeur pour les finances publiques. Les études montrent que près de 10% des recettes mondiales de l'impôt sur les sociétés sont perdues en raison de pratiques d'optimisation fiscale, représentant des pertes considérables pour les États - jusqu'à 13 milliards d'euros pour la France en 2019. Cette situation s'est aggravée avec la mondialisation et la financiarisation de l'économie depuis les années 1970.

Le manque de transparence sur les activités financières des multinationales constitue un obstacle majeur à la lutte contre l'évasion fiscale. Bien que certaines entreprises comme Total, Shell ou Unilever publient volontairement des rapports détaillés pays par pays, et qu'une directive européenne de 2021 rende cette publication obligatoire, ces données restent dispersées dans des PDF et difficiles d'accès.

Dans ce contexte, il est crucial de créer un référentiel central et des outils d'analyse pour permettre aux chercheurs, ONG, journalistes et décideurs publics de suivre efficacement les pratiques fiscales des multinationales et d'alimenter un débat démocratique informé sur ces questions.

## Réalisations pendant la saison
L'équipe a développé une solution complète structurée autour de trois axes principaux :

1. Collecte automatisée : Développement d'un code Python utilisant l'API Google pour rechercher et télécharger automatiquement les rapports PDF des multinationales contenant les données financières pays par pays.

2. Extraction des données : Création d'une interface interactive facilitant le traitement et l'extraction des données des tableaux contenus dans les PDF, réduisant significativement le travail manuel précédemment nécessaire.

3. Visualisation : Développement d'une interface web permettant au public d'explorer les données via des graphiques interactifs, notamment :
   - Suivi de l'évolution de la base de données et du nombre d'entreprises publiant leurs données
   - Calcul et affichage d'un score de transparence pour chaque entreprise
   - Analyse des profils financiers des multinationales
   - Visualisation des disparités entre profits et emplois par pays
   - Identification de l'utilisation des paradis fiscaux

## Résultats et impact
Le projet a abouti à la création d'une plateforme complète permettant de :

- Centraliser et rendre accessibles les données financières pays par pays de plus de 100 multinationales
- Automatiser la collecte et le traitement des rapports, auparavant effectués manuellement
- Fournir des outils d'analyse permettant d'identifier rapidement des indices d'évasion fiscale (par exemple, la concentration de profits dans des pays avec peu d'employés)
- Mesurer et suivre le niveau de transparence des entreprises via un index dédié
- Permettre aux différentes parties prenantes (ONG comme Oxfam, journalistes, chercheurs, décideurs politiques) d'accéder facilement aux données et de produire leurs propres analyses

La plateforme joue un rôle crucial dans le suivi de l'application de la directive européenne de 2021 sur la transparence fiscale, notamment en permettant d'identifier les entreprises qui ne respectent pas leurs obligations de publication ou utilisent la clause d'exemption de 5 ans.

À terme, cet outil contribuera à une meilleure compréhension des pratiques fiscales des multinationales et à l'amélioration des politiques publiques en la matière, avec pour objectif final une distribution plus équitable des recettes fiscales nécessaires au financement des services publics essentiels.