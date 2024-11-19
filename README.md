# Projet Monorepo

Ce projet est un monorepo contenant un frontend construit avec Next.js et un backend construit avec Strapi.

## Processus de Déploiement

1. **Configuration des Environnements** :

   - Assurez-vous que les fichiers `.env` dans le dossier `frontend` et correctement configuré.

2. **Construction et Exécution des Conteneurs Docker** :

   - Exécutez la commande suivante à la racine du projet pour construire l'image:

     ```bash
      docker build -f docker/frontend/Dockerfile -t d4g/website .
     ```

   - Exécutez la commande suivante pour lancer le container:

   ```bash
    docker run --env-file frontend/.env -p 3000:3000 d4g/website
   ```

3. **Accès aux Applications** :
   - Frontend : [http://localhost:3000](http://localhost:3000)
   - Backend : [https://strapi.services.dataforgood.fr](https://strapi.services.dataforgood.fr)

## Ajout de Contenu

Pour ajouter du contenu, vous pouvez utiliser l'interface d'administration de Strapi accessible à l'adresse [https://strapi.services.dataforgood.fr/admin](https://strapi.services.dataforgood.fr/admin). Créez des collections et gérez le contenu selon vos besoins.
