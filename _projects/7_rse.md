---
layout: project
title: RSE Explorer
description: Un outil de veille de l'innovation environnementale et sociale, basé sur l'exploitation des rapports RSE de grandes entreprises françaises.
season: 7
repository: github.com/dataforgoodfr/batch7_rse
website: http://rse-explorer.cleverapps.io/
image: 7_rse.png
---

# *RSE Explorer*
Un prototype développé par *[Data 4 Good](https://dataforgood.fr/)* au cours d'un projet porté par le *[Ministère pour la Transition Ecologique et Solidaire](https://www.ecologique-solidaire.gouv.fr/)*.

​
​
## Présentation de *RSE Explorer*
### Contexte
L’outil essentiel pour les entreprises et pour tous ceux qui veulent en savoir plus sur leurs politiques de Responsabilité Sociétale d'Entreprise (RSE) est le "rapport RSE", ou plus précisément, en France, la Déclaration de performance extra-financière (DPEF), qui doit être publiée chaque année par les plus grandes entreprises. Elle doit décrire notamment la stratégie sociale et environnementale de l’entreprise et les progrès réalisés. En plus de son rôle d'outil de pilotage stratégique, la DPEF intéresse de nombreuses parties prenantes : consommateurs éclairés, associations, salariés et personnes en recherche d’emploi mais surtout en quête de sens, investisseurs, agences de notation extra-financière...

​
Surtout, les DPEFs font une synthèse sans égale des engagements, actions et méthodes qui peuvent être pratiquées par une entreprise sur les sujets sociaux et environnementaux. De ce point de vue, les DPEFs sont une **mine de connaissances et d'innovations environnementales et sociales**, qui méritent d'être diffusées aux autres entreprises et parties prenantes.

​
Problème : les DPEF sont difficilement accessibles, éparpillées sur les sites de chaque entreprise, et les informations qui y sont contenues sont peu comparables car pour l’instant, aucun format-type n’est imposé. Elle sont de plus longues (jusqu'à plusieurs centaines de pages) et denses, ce qui rend leur consultation rébarbative. Elles fournissent donc une richesse sous-exploitée.

​
### Objectifs et fonctionnalités
L'outil *RSE Explorer* a pour vocation de :
- **Rendre l’information contenue dans les DPEFs plus accessible, et en valoriser ainsi la richesse**
- **Permettre leur interrogation par un utilisateur sans compétences techniques particulières**

​
​
Le développement de la première version de *RSE Explorer* a comporté trois aspects :
- Rassembler et constituer en base de données les PDFs de près de 150 DPEFs
- Extraire l'essentiel du texte des DPEFS et à partir de ce texte, créer un modèle de traitement du langage naturel
- Sous la forme d'une application web, permettre l'accès aux données et l'usage du modèle dans un outil de veille technologique : RSE Explorer

​
*RSE Explorer* permet d'effectuer une recherche thématique à travers le texte tiré des DPEFs, et d'identifier les extraits qui correspondent le mieux à la requête et qui présentant la plus grande richesse textuelle. Le moteur de recherche peut être paramétré pour restreindre la recherche à certains secteurs d'activités (p.ex. "Automobile" et "Industrie" mais pas "Energie"), à une entreprise en particulier, ainsi qu'à certaines années de publication des DPEFs. L'outil permet également de rechercher et télécharger les DPEFs de la base de données, classées par secteur d'activité et par année.

​
Ainsi,  un chercheur intéressé par la connaissance environnementale en matière de pêche maritime dans l'industrie de la grande distribution pourra effectuer sur ce domaine les requêtes "pêche maritime pollution" ou "pêche maritime biodiversité" pour connaître l'état des connaissances, innovations et bonnes pratiques dans ce domaine en terme de RSE. Si il veut creuser le contexte d'un extrait en particulier, il pourra télécharger la DPEF et se rendre à la page de l'extrait (qui lui est indiquée).

​
### Détails d'implémentation (pour les plus curieux)
Le traitement des données, la modélisation et l'application web sont développés en python. La base de données des extraits des DPEFs est une base PostgreSQL hébergée sur AWS.
​
**Parsing**: le parsing des PDFs se fait par des scripts ad hoc utilisant le package pdfminer (python).

**Modélisation textuelle**: un scorer [Okapi BM25](https://fr.wikipedia.org/wiki/Okapi_BM25) est entraîné sur le corpus de texte des DPEFs pour attribuer un score aux tokens extraits. Des vecteurs sémantiques (embeddings) sont obtenus pour chaque token grâce au modèle entraîné [fr_core_news_md](https://spacy.io/models/fr#fr_core_news_md) proposé par Spacy. Les vecteurs des tokens de chaque extrait sont combinées en un vecteur représentant le sens de chaque extrait, par une moyenne pondérée faisant usage des scores du modèle Okapi BM25.

**Moteur de recherche**: la recherche thématique rank les extraits en [combinant](https://github.com/dataforgoodfr/batch7_rse/pull/47) une mesure de richesse sémantique (= somme des scores BM25 des tokens de chaque l'extrait) et une mesure de pertinence vis-à-vis de la requête (= similarité cosine entre le vecteur de la requête et le vecteur de l'extrait)

**Application**: Django (python) est utilisé pour développer l'application web. HTML+CSS sont utilisés pour l'interface graphique. Clever Cloud est utilisé pour déployer le site.
