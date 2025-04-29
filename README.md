# 🏞️ Chalets Aude

**Chalets Aude** est une application web responsive construite avec **React**, destinée à promouvoir des lieux touristiques de la région de l’Aude, tels que les châteaux, montagnes, abbayes, sources naturelles et sites en bord de mer.

L’interface est conçue pour offrir une navigation fluide, immersive et moderne. Chaque lieu est présenté avec un diaporama, une description détaillée, et des informations pratiques pour guider les visiteurs.

---

## 📌 Fonctionnalités principales

- 🔁 **Slideshow automatique** d’images pour chaque activité  
- 🧭 **Navigation par catégories** : Châteaux, Montagnes, Abbayes, Eaux, Mer  
- 🌐 **Intégration de carte interactive** via iframe  
- 📱 **Design responsive**, adapté aux écrans mobiles, tablettes et ordinateurs  
- 🛠️ **Composants réutilisables** pour faciliter la maintenance  
- ⚠️ **Page 404 personnalisée** en cas d’erreur de navigation  
- 📤 **Formulaire de contact** fonctionnel via [EmailJS](https://www.emailjs.com)

---

## ⚙️ Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/Occjtzn/ChaletAude.git
```

2. Accédez au dossier du projet :

```bash
cd ChaletAude
```

3. Installez les dépendances :

```bash
yarn install
```

4. Lancez le projet :

```bash
yarn start
```

> 🧪 Vous pouvez aussi exécuter les tests avec `yarn test`.

---

## 🧰 Technologies utilisées

- **React 18**
- **React Router DOM**
- **React Modal**
- **SASS** pour la gestion des styles
- **EmailJS** pour les messages de contact
- **FontAwesome** pour les icônes
- **Prettier + ESLint** pour un code propre et formaté

---

## 📂 Architecture du projet

```
ChaletAude/
├── public/                      # Fichiers statiques publics
├── src/
│   ├── assets/                  # Images et ressources
│   ├── datas/                   # Données locales en JSON
│   ├── first_components/        # Composants principaux (Header, Footer, etc.)
│   ├── secondary_components/    # Composants secondaires et utilitaires
│   ├── pages/                   # Pages de navigation
│   ├── styles/                  # Feuilles de style SCSS
│   ├── App.jsx                  # Composant racine React
│   └── index.js                 # Point d’entrée ReactDOM
├── package.json
└── README.md
```

---

## ✅ Scripts disponibles

| Commande         | Description                                   |
|------------------|-----------------------------------------------|
| `yarn start`     | Démarre l’application en mode développement   |
| `yarn build`     | Crée un build optimisé pour la production     |
| `yarn test`      | Lance les tests unitaires                     |
| `yarn eject`     | Éjecte la configuration de Create React App   |

---

## 👨‍💻 Auteur

Projet conçu et développé par [Occjtzn](https://github.com/Occjtzn), développeur front-end spécialisé dans la création d’interfaces web modernes, performantes et accessibles.