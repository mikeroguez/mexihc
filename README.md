# MexIHC Versión 2024.0.0.2

## Sitio web para el MexIHC 2024

Sitio [web de difusión de MexIHC 2024](https://www.mexihc.org/2024/) organizado por la [Asociación Mexicana de Interacción Humano-Computadora)](https://www.amexihc.org/).

### Technology used

* Vue.js ^3.2.37: [Vue](https://vuejs.org/) (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces.

### What is this repository for?

* Llevar el control del desarrollo del sitio MexIHC 2024
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)
* [Flujo de trabajo de Gitflow](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)
* [A successful Git branching model (original)](https://nvie.com/posts/a-successful-git-branching-model/)

Changelog format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Pasos para levantar el sitio

Clonamos el proyecto e instalamos las dependencias

``` bash
git clone git@github.com:Human-Computer-Interaction-Lab-IHCLab/mexihc.git mexihc

cd mexihc/application
npm install
```

Para desarrollar:

``` bash
npm run dev
```

Para Producción:

``` bash
npm run build
cp ../documentation/.htaccess dist/.htaccess
cp ../CHANGELOG.md dist/CHANGELOG.md
```

Sincronizar la carpeta `mexihc/application/dist` en VSCode con la [extensión SFTP](https://github.com/liximomo/vscode-sftp). Para su configuración revisar el archivo `mexihc/.vscode/sftp.json`.
