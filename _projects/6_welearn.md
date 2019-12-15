---
layout: project  
title: WeLearn  
description: Améliorer la classification des ressources pédagogiques en ligne via une approche supervisée.  
season: 6
repository: https://github.com/CyberCRI/iLearn-d4g-xmtc  
website: https://projects.cri-paris.org/projects/Jq2tzEMD/summary  
image: 6_welearn.png
---

Porté par le CRI (Centre de Recherches Interdisciplinaires), le projet ​WeLearn​ constitue la première brique d’un large écosystème numérique de l’apprendre. L’un des objectifs du projet consiste à construire une carte des ressources en ligne qualifiées par une approche hybride d’intelligence artificielle et d’intelligence collective. Pour ce faire, les contenus textes des ressources sont récupérés puis analysés afin de les rapprocher d’une bibliothèque de concepts de connaissance construite à partir de Wikipédia. Dans ce cadre, nous avons proposé aux membres de la communauté Data for Good de participer à l’un des axes de développement du projet en améliorant le ​pipeline​ existant d’extraction automatique des concepts de connaissance.
Jusqu’à présent, cette phase d’extraction s’effectuait à l’aide de deux méthodes non supervisées complémentaires :
1. La première méthode se basait sur un ​document embedding​ construit à partir des corpus de Wikipédia. Malheureusement, plus le format du texte de la ressource s’éloignait de la distribution du corpus de Wikipédia, moins les concepts proposés étaient pertinents.
2. La seconde se basait sur l’extraction de mots-clés via l’algorithme SGRank. Cette approche statistique s’avérait plus robuste que la première, mais le rapprochement des mots-clés avec les concepts de connaissance restait assez peu précis.
L’une des pistes de recherche que nous souhaitions donc explorer consistait à reprendre la question d’extraction des concepts de connaissance sous la forme d’un problème d’apprentissage supervisé, plus précisément de classification multi-label extrême (​Extreme Multi-Label Text Classification​).

Il s’agissait donc de construire un modèle qui prendrait en entrée le texte d’une ressource en ligne et donnerait en sortie les catégories de Wikipédia auxquelles celle-ci serait le plus susceptible d’appartenir, parmi une liste de plusieurs centaines de milliers.