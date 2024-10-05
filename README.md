# Projet Monorepo

Ce projet est un monorepo contenant un frontend construit avec Next.js et un backend construit avec Strapi.

## Processus de Déploiement

1. **Configuration des Environnements** :

   - Assurez-vous que les fichiers `.env` dans les dossiers `frontend` et `backend` sont correctement configurés.

2. **Construction et Exécution des Conteneurs Docker** :

   - Exécutez la commande suivante à la racine du projet :
     ```bash
     docker-compose up --build
     ```

3. **Accès aux Applications** :
   - Frontend : [http://localhost:3000](http://localhost:3000)
   - Backend : [http://localhost:1337](http://localhost:1337)

## Ajout de Contenu

Pour ajouter du contenu, vous pouvez utiliser l'interface d'administration de Strapi accessible à l'adresse [http://localhost:1337/admin](http://localhost:1337/admin). Créez des collections et gérez le contenu selon vos besoins.
