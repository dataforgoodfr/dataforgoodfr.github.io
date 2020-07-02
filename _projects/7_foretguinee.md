---
layout: project
title: Détecter les forêts dégradées
description: Détecter les forêts dégradées de Guinée et du Congo par imagerie satellite haute résolution et deep learning.
season: 7
repository: https://github.com/dataforgoodfr/batch7_forets_guinee
image: guinee.jpeg
---

## Les forêts dégradées
<br>
La dégradation des forêts est un phénomène mal connu, c'est pourtant un énorme potentiel de séquestration de carbone qui est perdu et très sous-estimé. Les forêts dégradées captent 35% à 80% de carbone en moins de leur stock initial, ce qui représente un biais dans les bilans carbone.  Une prise en compte de cette perte en séquestration est indispensable et urgente pour solidifier le marché de crédits de carbone*, qui s'est montré sans effet de réduction sur la hausse régulière des émissions mondiales de CO2. 
Les causes sont multiples. Construction de routes, coupe sélective pour les bois nobles ou rares, déchets toxiques de projets miniers... vont fragmenter, assécher, rendre vulnérables les forêts résiduelles. 
En résumé, la dégradation forestière est une réalité écologique. Les forêts dégradées sont aujourd'hui considérées comme une catégorie de forêt à part entière. Contrairement à la déforestation, la dégradation des forêts est mal, voire pas du tout, évaluée. Mais qu'il s'agisse de déforestation ou de dégradation, il faut autant maintenir la quantité que la qualité des forêts.
</br>

## Pourquoi sont-elles si peu évaluées ?
</BR>
Dans les projets d'occupation du sol, seule l'analyse d'un photo-interprète peut prendre compte à la fois de la physionomie et de la structure de la forêt, mais aussi du contexte dans lequel elle se trouve pour pouvoir trancher. C'est un procédé robuste mais extrêmement chronophage, et la délimitation des zones dégradées est totalement manuelle.
*Une réponse collaborative et open-source
Pour répondre à ce manque, nous proposons une solution de deep learning en imagerie satellitaire pour détecter les forêts dégradées en utilisant uniquement des outils open-sources (QGis, python) et des images satellites libres d'accès (Sentinel-2 de l'ESA). 
A partir des images satellites Sentinel-2, ce sont +40 000 km2 qui ont été labellisés manuellement par photo-interprétation pour entraîner nos algorithmes. 
Notre équipe de bénévoles a construit des algorithmes pays-spécifiques pour coller au mieux à la réalité biologique des forêts (équatoriales au Congo et à l'inverse, saisonnières en Guinée avec des saisons sèches et des saisons de mousson) et au processus de dégradation (forêts secondaires monospécifiques au Congo, forêts en stress hydrique en Guinée). L'objectif a été de mettre en place des systèmes de suivi des forêts dégradées, avec un pas de temps court pour anticiper les zones de pressions sur les forêts.
Nous avons souhaité concrétiser la solution par une plateforme web pour que les utilisateurs puissent localiser et visualiser les forêts dégradées de leur territoire en Guinée et en République du Congo. Le but est de mettre l'outil en ligne pour que son usage puisse être étendu et testé sur d'autres pays par la suite. 
Notre solution permet d'évaluer l'état des forêts sans expertise satellitaire : c'est un gain en autonomie pour les utilisateurs qui peuvent se passer d'experts et un gain de temps (5 minutes de calcul sur la plateforme vs. 5 jours de délimitation manuelle par un expert d'une zone de 2000 km2). </BR>

Notre vision est d'être capables de proposer la solution à d'autres pays, à horizon 2021. Un tel outil utilisable gratuitement par tous, permet d'avoir une idée plus précise de l'état des forêts. Il permet de justifier des financements dans des projets de préservation et à l'inverse, de limiter des nouveaux projets miniers ou d'agriculture si les forêts sont en moins bon état qu'on ne le pense. L'outil pourrait aussi permettre de suivre l'évolution de la forêt après avoir mené des actions en faveur de la reforestation et en cela, il peut être un indicateur de performance des projets.
