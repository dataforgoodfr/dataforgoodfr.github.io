---
slug: codecarbon
title: "CodeCarbon"
header_image_url: img/projects/codecarbon.png
tags: [Saison 9,Actif,Numérique Responsable,Empreinte Carbone,sdg13]
description: "Développement collaboratif d'un outil open-source permettant de mesurer l'empreinte carbone d'un code Python"
keywords:
    - Data For Good
sdgs: [sdg13]
github: https://github.com/mlco2/codecarbon
website: https://codecarbon.io
slack: 
---

## La problématique

65 mails envoyés ✉ consomment autant d'énergie qu'une voiture qui roule pendant un kilomètre🚗. Une box internet équivaut à un réfrigérateur ❄ en fonction pendant un an. Une requête sur google demande autant d'électricité qu'une ampoule 65w allumée pendant 17 secondes... 
Le numérique émet 4% des gaz à effet de serre mondiaux, soit autant que l'avion, heureusement pour beaucoup plus d'utilisateurs. Cependant cela représente tout de même 21 % des émissions que notre Terre peut naturellement absorber !
De plus, son usage est en croissance de 9% par an.

Sans compter les impacts environnementaux liés à la pollution lors de l'extraction, la fabrication et la fin de vie. Il y a également des impacts sociaux comme les (40 000 enfants)[https://www.amnesty.org/fr/latest/news/2016/01/child-labour-behind-smart-phone-and-electric-car-batteries/] qui travaillent dans les seules mines de cobalt du Congo.

L'impact de nos activités numériques quotidiennes commence à être bien évalué mais qu'en est-il de l'impact de nos codes Python ?

A quoi cela sert-il de le savoir ?
- Se faire une idée de la réalité
- Améliorer ses pratiques en se basant sur des chiffres
- Remonter des chiffres au département RSE
- Participer aux débats qui visent le numérique en apportant des vrais chiffres

## Le projet CodeCarbon

C'est ce que cherche à estimer Code Carbon (https://codecarbon.io/ ) !

Code Carbon a été initié par https://en.wikipedia.org/wiki/Yoshua_Bengio , prix Turing pour ses travaux fondateurs du Deep Learning.
Code Carbon est un léger package python qui va estimer la consommation de votre(vos) machine(s) lorsque vous utilisez votre code et son impact en termes d'émission de dioxyde de carbone (CO2) en fonction de l'intensité carbone du réseau électrique utilisé.

L'objectif est de provoquer à la fois une prise de conscience, de susciter la discussion au sein des organisations et de promouvoir les bonnes pratiques.

C'est simple à installer:

`pip install codecarbon`

Et à utiliser:

```python
from codecarbon import track_emissions
@track_emissions
def votre_fonction_a_mesurer()
    # votre code compliqué
```
Dans le cadre de Data For Good, l'équipe a ajouté une API et un tableau de bord pour centraliser les émissions et avoir une vision agrégée des émissions.

## Références
- Vidéo de présentation de la dernière saison: https://www.youtube.com/watch?v=EHWBRLf1yik
- Vidéo générale en anglais : https://vimeo.com/486015008 


## L'équipe

- Victor Schmidt
- Amine Saboni
- Benoît Courty
- Camille Keisser
- Marion Coutarel
- Sara Oumina
- Alexis Bogroff
- Jérémy Lecourt
- Mathilde Léval

##### Contributions passées

- Kamal Goyal (BCG GAMMA)
- Aditiya Joshi (BCG GAMMA)
- Tristan Mallet (BCG GAMMA)
- Boris Feld (Comet.ml)
- Niko Laskaris (Comet.ml)
- Douglas Bank (Comet.ml)
- Sasha Luccioni (Mila)
- Sorelle Friedler (Haverford College)
- Jonathan Wilson (Haverford College)
- Ziyao Wang (Haverford College)


##### Rejoindre le projet
Il suffit de [rejoindre la communauté Data For Good](/join) et de se présenter sur le canal Slack **#9_codecarbon**

