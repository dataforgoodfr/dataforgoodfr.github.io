---
slug: genai-impacts
title: "GenAI Impact - Les impacts environnementaux de l'IA générative"
header_image_url: img/projects/genai-impacts.png
tags: [Saison 12, Climat, Energie]
description: "Mettre en lumière l’impacts des technologie de GenAI sur l’environnement, de mieux les comprendre, de les quantifier et de sensibiliser les utilisateurs."
keywords:
  - Data For Good
sdgs: [sdg13,sdg17]
website: 
---

# GenAI Impact

## Description courte
GenAI Impact développe des outils et méthodologies pour évaluer et réduire l'impact environnemental des intelligences artificielles génératives.

## Description longue
Issu des travaux du livre blanc de Data for Good sur l'IA générative (juillet 2023), GenAI Impact est un projet qui vise à combler le manque de transparence et de méthodologie dans l'évaluation de l'impact environnemental des modèles d'IA générative. Le projet a développé une librairie Python, EcoLogits, permettant aux développeurs et data scientists de mesurer l'impact environnemental des appels API aux grands modèles de langage (LLM).

## Description du livrable 
EcoLogits est une librairie Python qui s'intègre aux principaux fournisseurs de LLM (OpenAI, Anthropic, Mistral, etc.) pour estimer l'impact environnemental de chaque requête. La librairie calcule et décompose les impacts en termes de consommation d'énergie, émissions de CO2 et autres métriques environnementales, tant pour la phase d'utilisation que pour l'infrastructure en amont.

## Contexte et importance du projet
L'explosion de l'utilisation des IA génératives, notamment depuis le lancement de ChatGPT, soulève des questions cruciales sur leur impact environnemental. Contrairement aux idées reçues, les études préliminaires menées par Data for Good ont révélé que l'impact de l'utilisation de ces technologies peut être jusqu'à 20 fois supérieur à celui de leur phase d'entraînement sur une période comparable.

Trois obstacles majeurs empêchaient jusqu'ici une évaluation précise de cet impact :
1. Le manque de transparence des acteurs de l'IA générative concernant leurs architectures et leur consommation énergétique
2. L'immaturité des méthodologies de calcul d'impact, particulièrement dans le domaine de l'IA
3. La complexité technique du sujet, rendant difficile l'accès à ces informations pour les utilisateurs et développeurs

Dans ce contexte, GenAI Impact répond à un besoin urgent de développer des outils et méthodologies standardisés pour évaluer et, à terme, réduire l'empreinte environnementale de ces technologies en pleine expansion.

## Réalisations pendant la saison
Le projet s'est structuré autour de deux axes principaux :

1. Développement méthodologique :
- Établissement d'un état de l'art de la modélisation des impacts environnementaux du numérique et de l'IA générative
- Conception d'une méthodologie d'estimation des impacts basée sur les paramètres disponibles (nombre de tokens, architecture estimée, etc.)
- Validation de la méthodologie par comparaison avec des modèles open source aux caractéristiques connues

2. Développement technique :
- Création de la librairie Python EcoLogits
- Implémentation de l'intégration avec les principaux fournisseurs de LLM
- Développement des fonctionnalités de calcul et de décomposition des impacts
- Tests et validation de la solution sur différents cas d'usage

Le projet a mobilisé une vingtaine de bénévoles aux profils variés (data scientists, développeurs, experts en impact environnemental) sur une période de trois mois.

## Résultats et impact
Les principales réalisations du projet sont :

1. Publication de la librairie EcoLogits :
- Solution open source facilement intégrable dans les projets existants
- Capacité à mesurer l'impact environnemental en temps réel des requêtes aux LLM
- Décomposition détaillée des impacts (énergie, CO2, ressources)
- Support des principaux fournisseurs de LLM

2. Avancées méthodologiques :
- Développement d'une approche innovante d'estimation des impacts
- Documentation et vulgarisation de la méthodologie
- Contribution à l'état de l'art sur l'évaluation d'impact des IA

3. Perspectives et continuation :
- Création d'une association pour pérenniser le projet
- Planification de nouvelles fonctionnalités (support de la génération d'images)
- Publication académique en préparation
- Développement d'une communauté active autour du projet

L'impact du projet se mesure à plusieurs niveaux :
- Sensibilisation des développeurs et data scientists à l'impact environnemental de l'IA
- Fourniture d'outils concrets pour mesurer et potentiellement réduire cet impact
- Contribution à la transparence et à la responsabilité dans le développement de l'IA
- Création d'une dynamique collective autour des enjeux environnementaux de l'IA générative