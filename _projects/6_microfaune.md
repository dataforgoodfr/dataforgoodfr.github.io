---
layout: project  
title: Microfaune  
description: Détection d'oiseaux à base de deep learning  
season: 6
repository: https://github.com/hadrienj/microfaune  
website: 
image: 6_microfaune.png
---

## Etudier la biodiversité urbaine

<p align="center">
    <img align="center" title="L’enregistreur audio Swift" src="https://dataforgood.fr/img/6_microfaune_1.png" alt="Figure 1" />
</p>

Le but du projet est d’améliorer l’évaluation de la biodiversité urbaine avec des algorithmes de deep learning. Il s’agit d’un travail sur la détection de chants d’oiseaux à partir d’enregistrements audio, réalisés à la Cité Universitaire de Paris par l’association [Wazo](https://wazo.fr/). Les apports de ce travail sont :
1. Une plateforme d’annotation de chants d’oiseaux (présence ou absence)
2. Un modèle permettant la détection de chants d’oiseaux
3. Une base de données labélisée open-source

Il s’agit d’une première étape permettant de détecter les moments où des chants d’oiseaux sont présents sur les enregistrements. La suite sera axée sur l’identification des espèces qui chantent (environ une cinquantaine d’espèces à la Cité Universitaire).

### 1. Plateforme d’annotation

Nous avons constaté qu’une tâche qui paraît simple, comme l’annotation de la présence de chant d’oiseau, pose certaines difficultés comme :

Le regroupement des sons d’oiseaux proche dans le temps.
Le rapport signal sur bruit parfois faible pouvant donner des avis contrastés entre les personnes qui font l’annotation.

Pour cela, la plateforme d’annotation que nous avons construite sous forme de Web App permet de réaliser une review des annotations par plusieurs personnes. Cela permet d’assurer la qualité des labels de la base de données.

<p align="center">
    <img align="center" title="Interface d’annotation" src="https://dataforgood.fr/img/6_microfaune_2.png" alt="Figure 2" />
</p>

La plateforme d’annotation permet aussi d’afficher les prédictions du modèle en plus du spectrogramme du son. Cela permet une évaluation qualitative des modèles (et donc la compréhension des erreurs permettant une itération sur les modèles ou la comparaison des modèles). 

### 2. Pré-traitement et Modèle

Les pistes audio de la base de données sont tout d’abord converties en spectrogrammes (représentation temps/fréquence) avant d’être données en entrée du modèle.

De manière à augmenter les données, des extraits des enregistrements Cité Universitaire sans oiseaux ont été ajoutés à des extraits des bases de données externes avec présence d’oiseaux. L’évaluation du gain de performance liée à l’augmentation est en cours d’évaluation.

Le modèle que nous avons créé est inspiré de Morfi & Stowell (2018) et contient des couches convolutionnelles et récurrentes.

<p align="center">
    <img align="center" title="Architecture du modèle utilisée" src="https://dataforgood.fr/img/6_microfaune_3.png" alt="Figure 3" />
</p>

Le modèle permet d’entraîner à partir de données globales (extraits de 10s avec le label présence/absence de chants d’oiseaux), puis de faire des prédictions locales : pour chaque échantillon temporel, est-ce qu’un oiseau chante. Ces prédictions locales sont visualisées sur notre plateforme d’annotation, encadrées en bleu.


### 3. Base de données

La base de données est labélisée grâce à la plateforme d’annotation et permet d’obtenir des labels temporels indiquant le début et la fin des chants d’oiseaux. Cela est une amélioration par rapport aux bases de données existantes qui comportent des labels à l’échelle de l’extrait sonore (10 secondes).
De manière à assurer la qualité de la base de données, un système de review est utilisé sur la plateforme d’annotation. 
Les données qui n’ont pas encore été labellisées le seront par notre équipe et également par le biais de crowd-sourcing.

## Prochaines étapes

- Finalisation de l’annotation de la base de données et release de la v1.
- Identification de l’espèce.


<p align="center">
    <img align="center" title="Exemples d’espèces présentes à la Cité Universitaire" src="https://dataforgood.fr/img/6_microfaune_4.png" alt="Figure 4" />
</p>

### Références

Morfi, Veronica, and Dan Stowell. "Deep learning for audio event detection and tagging on low-resource datasets." Applied Sciences 8.8 (2018): 1397.
