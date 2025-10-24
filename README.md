# cv_maker_monorepo

## But de ce projet

Ce projet consiste en la conception d'une application web de creation de CV, d'ou le nom `CV_MAKER`.
L'idée a surgit suite à la recherche d'un projet de conception d'interfaces pour le cours de _Interfaces et multimedia_ donnée au niveau 3 du parcours Génie Logiciel de l'IUT de Ngaoundéré.

## Vue principale

<!-- image -->

## Technologies et packages utilisées

Ce projet est un monorepo utilisant `pnpm` comme gestionnaire de paquets. Les outils utilisés dans le projet sont les réparties en fonctions des différentes applications du projet:

1. **Frontend**

- _React + Vite + Typescript_
- _TailwindCSS_
- _Zustand_
- _@tanstack/react-query_
- _react-router-dom_
- _react-hook-form_
- _ky_

2. **Backend**

- _Express + MySQL_
- _TypeORM_
- _dotenv_
- _mysql2_
- _jsonwebtoken_
- _bycript_
- _cors_

Vous pouvez jeter un coup d'oeil aux fichiers `package.json` de chaque application pour voir le reste des packets et dependances.

## Environnement de developpement

L'application a été initialisé sur un système d'exploitation `Zorin OS (Ubuntu)` et l'editeur de code utilise est `Visual Studio Code`.
