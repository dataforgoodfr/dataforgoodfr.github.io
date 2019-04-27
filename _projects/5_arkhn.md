---
layout: project
title: Arkhn
description: Standardiser les données de santé en open-source
season: 5
repository: https://github.com/arkhn
image: 5_arkhn.jpg
---

Standardiser les données de santé en open-source

---

## À quels problème répond Arkhn ?

Les logiciels présents dans les établissements de santé produisent une donnée qui est stockée sous un format qui leur est propre. Il est très difficile pour d'autres acteurs - et pour les hôpitaux eux-mêmes - de tirer parti de ces données sans passer par les éditeurs de logiciels, qui par ailleurs ne produisent pas non plus une donnée standardisée. Finalement, les hôpitaux multiplient les connexions entre ces bases de données dont l'information n'est pas standard, ce qui multiplie les problèmes.

Par ailleurs, tout problème de Machine Learning commence par la collecte et le nettoyage de données destinées à l'entraînement des modèles statistiques. L'hétérogénéité des données de santée rend cette phase très complexe, voire inaccessible.

## Que permet de faire le projet Arkhn ?

Nous construisons une plateforme numérique permettant aux hôpitaux de tirer le meilleur parti de leurs données. À travers celle-ci, les données peuvent être utilisées par de nouveaux acteurs, au bénéfice des patients.

<p align="center">
    <img align="center" src="https://arkhn.org/img/integrateur.png" alt="Image of Arkhn's stack structure" />
</p>

Les données peuvent tout d’abord être employées par de nouvelles applications, déployables directement à l’hôpital. Il devient par exemple facile de développer des applications mobiles spécifiques à une pathologie ou un service, et ainsi d’améliorer grandement le parcours patient.

Par ailleurs, l’hôpital peut maintenant facilement construire des outils de monitoring qui utilisent l’ensemble des informations collectées. Notre plateforme permet surtout une communication simplifiée et sécurisée entre les équipes médicales. Le suivi des patients entre services, mais également entre établissements est rendu possible tout en laissant le patient maître de ses données.

Arkhn permet aux hôpitaux un premier pas vers leur mise aux normes. L'arrivée du RGPD rend obsolètes de nombreuses solutions actuelles, incapables de réaliser des opérations comme la suppression ou le portage de données personnelles. Notre intégration permet d'unifier toutes les bases de données et d'effectuer facilement ces opérations.

Enfin, cette solution décentralisée laisse aux établissements une liberté totale sur les utilisations faites des données collectées et parachève notre vision de la santé de demain

## Qu'avons nous développé ?

### `Pyrog` - une plateforme collaborative de cartographie des logiciels de santé

Cette plateforme web est [accessible en ligne](https://pyrog.arkhn.org) et permet de répertorier des informations destinées à standardiser les logiciels déployés dans les hôpitaux. Elle permet de traduire dans le standard [FHIR](https://www.hl7.org/fhir/) les schémas de bases de données de chaque logiciel présent sur le marché. Nous avons notamment commencé la cartographie des principaux logiciels présents sur le territoire français.

Repo Github : [https://github.com/arkhn/pyrog](https://github.com/arkhn/pyrog)

### `Fhir-pipe` - un module d'intégration de données déployable à l'hôpital

Ce module reçoit ses instructions de la plateforme précédente. Déployé à l'hôpital, il copie les bases de données (Oracle) des logiciels présents sur place dans une nouvelle base (Postgres) dans une syntaxe standard (FHIR).

Repo Github : [https://github.com/arkhn/fhir-pipe](https://github.com/arkhn/fhir-pipe)

## Poursuites du projet

### Un dashboard pour les établissements de santé

Afin de donner une idée claire de ce qu'il est possible de faire avec des données standardisées, nous développons un dashboard destiné aux décisionnaires des hôpitaux.

Repo Github : [https://github.com/arkhn/dashboard](https://github.com/arkhn/dashboard)
