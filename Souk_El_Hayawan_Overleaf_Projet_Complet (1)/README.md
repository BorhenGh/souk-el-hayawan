# Souk El Hayawan — Rapport PFE LaTeX / Overleaf

Projet de rapport universitaire **éditable**, en français, avec diagrammes TikZ vectoriels et wireframes gris façon Balsamiq.

## Installation dans Overleaf
1. Compresser/importer le ZIP fourni dans Overleaf : **New Project → Upload Project**.
2. Dans Overleaf, ouvrir **Menu → Compiler → XeLaTeX**.
3. Définir `main.tex` comme fichier principal (si nécessaire).
4. Compiler deux fois pour mettre à jour le sommaire, la liste des figures et les références.

> Lien Overleaf partagé dans la conversation : je ne peux pas modifier directement le projet distant à partir de cette session. Le ZIP peut être importé dans un nouveau projet ou ses fichiers peuvent être ajoutés au projet existant.

## Organisation
```
main.tex
styles/rapport.sty
chapters/00-couverture.tex
chapters/00-avant-propos.tex
chapters/01-introduction.tex
chapters/02-existant.tex
chapters/03-solution.tex
chapters/04-backlog.tex
chapters/05-roadmap.tex
chapters/06-sprint00.tex
chapters/07-sprint01.tex
chapters/08-perspectives.tex
chapters/09-annexes.tex
figures/*.tex
```

## À adapter
- Sur la couverture : établissement, auteur, encadrant, année universitaire.
- Ajouter chaque sprint dans `chapters/` et ses schémas TikZ dans `figures/`.
- Les hypothèses de reproduction/saillie restent **à confirmer**.
- Le rapport décrit un projet **en cours de conception** ; ne pas déclarer la mise en œuvre terminée avant tests.
- Les exemples S00/S01 représentent une proposition de modèle, **pas une preuve de code réalisé**.

## Compilation locale
```
xelatex -interaction=nonstopmode main.tex
xelatex -interaction=nonstopmode main.tex
```
