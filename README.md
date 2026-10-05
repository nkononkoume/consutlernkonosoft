# Nkonosoft — site vitrine

Site web statique conçu pour être hébergé gratuitement sur GitHub Pages.

## Structure
- `index.html` : page principale
- `styles.css` : design responsive et animations
- `script.js` : menu mobile, animations, filtres et barre de progression
- `assets/logo.svg` : logo Nkonosoft
- `blog/` : pages individuelles des articles et styles associés
- `en/` : versions anglaises de l'accueil et des articles
- `site-preferences.js` et `site-preferences.css` : sélecteurs de langue et de thème
- `documents/cours/` : cours à télécharger
- `documents/epreuves/` : épreuves
- `documents/exercices/` : exercices

## Mise en ligne sur GitHub
1. Créer un dépôt GitHub, par exemple `nkonosoft`.
2. Importer tous les fichiers et dossiers du projet.
3. Aller dans **Settings → Pages**.
4. Dans **Build and deployment**, choisir **Deploy from a branch**.
5. Choisir `main` et `/ (root)`, puis enregistrer.
6. GitHub fournira l'adresse publique du site.

## Personnalisation rapide
- Modifier les coordonnées dans `index.html`.
- Remplacer les liens WhatsApp et e-mail.
- Ajouter les PDF dans les dossiers `documents`.
- Pour chaque nouveau PDF, ajouter une carte dans la section Ressources.
- Pour ajouter un article, créer sa page dans `blog/`, reprendre les styles de `blog/blog.css` et ajouter une carte dans la section Blog de `index.html`.
- Les pages sont disponibles en français et en anglais ; créer la page équivalente dans `en/` et renseigner les URL dans le sélecteur de langue.
- Le thème clair ou sombre se règle avec le bouton de la barre de navigation ; le choix est mémorisé dans le navigateur.
