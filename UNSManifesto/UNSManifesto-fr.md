## Pourquoi un Manifeste du Unified Namespace ?

En 2001, le **Manifeste Agile** a remodelé le développement logiciel dans le monde entier.
Ce n'était pas un outil.
Ce n'était pas un produit.
Ce n'était pas une norme.

C'était un **ensemble de principes**.

Aujourd'hui, l'industrie, la fabrication, l'énergie, la logistique et les infrastructures intelligentes ont besoin de la même clarté.

Le **Unified Namespace (UNS)** n'est pas un produit.
Ce n'est pas un broker.
Ce n'est pas une plateforme.

C'est **principe d'architecture / une philosophie de conception pour les systèmes d'information industriels** qui dépasse les limites de l'IT et l'OT, car s'étend à l'organisation toute entière étendue (divers fournisseurs, institutions publiques, clients B2B/B2C, etc.) pour délivrer la donnée comme haute valeur ajoutée.

Comme l'agilité, il est :
* Difficile d'en expliquer la théorie, tellement elle est vaste
* Évident une fois expérimenté (principe du #LearnByDoing de Maria Montessori)
* Simple dans son principe
* Puissant dans la pratique
* Facile de mal d'interpréter 
* Difficile à maîtriser, et nécessite plusieurs années d'expérience pratique sur le terrain (pas de théorie)

On n'« installe » pas un Unified Namespace.
On **conçoit une Stratégie Digitale, et on grandit avec** au fil des années.

---
<div id="Resx_Principles"></div>
### Définition & Standards UNS

Une **Définition UNS** est un accord sémantique sur la manière dont les opérations sont décrites. Alors que les **Standards UNS** formels sont essentiels pour la conformité technique des protocoles et l'interopérabilité profonde, un **Manifeste** progresse plus rapidement. Il fournit l'alignement culturel et philosophique immédiat nécessaire pour que la communauté agisse dès maintenant, tandis que les processus de normalisation formels suivent derrière pour solidifier les bases techniques.

---

## Les quatre principes du Unified Namespace

Inspirés par l'esprit de l'Agile, nous valorisons :

### 1️⃣ Une Architecture Pilotée par les Événements (Event-Driven)
**Plutôt que des intégrations « spaghetti », fragiles et fortement couplées**

Les systèmes publient les faits au moment où ils se produisent.
Les consommateurs s'abonnent à ce dont ils ont besoin.
Plus de dépendances point à point fragiles.

* **Piloté par l'Edge** : Tous les appareils et systèmes utilisent des événements suivis et traités localement et globalement, l'approche la plus utilisée et éprouvée à ce jour étant l'utilisation d'un broker MQTT 5.0.
* **Résilience (Mode Déconnecté)** : En mode déconnecté (hors ligne), le système doit continuer de fonctionner. Une fois de retour en ligne, il s'auto-resynchronise en envoyant les données manquantes (Stockage & Transfert).

---

### 2️⃣ Le Rapport par Exception (RBE)
**Plutôt que des flux de données massifs et insignifiants**

Seuls les changements significatifs comptent.
Le signal plutôt que le bruit.
Le contexte plutôt que le volume.

* **Anti-Polling** : Les architectures traditionnelles renvoient toutes les données périodiquement, même les données « Nulles » ou « vides ». Cela sature le réseau à grande échelle et crée des déchets dans les lacs de données. L'UNS élimine ce gaspillage.

---

### 3️⃣ Une Conception Légère & Évolutive
**Plutôt que des piles lourdes, monolithiques et non évolutives**

L'architecture doit évoluer avec l'entreprise.
Si elle ne peut pas s'adapter rapidement et passer à l'échelle horizontalement, elle s'effondrera sous la complexité.

* **Pub/Sub Léger** : MQTT n'est pas obligatoire mais est presque un « Must Have » au-dessus du Niveau 2. (OPC UA est la norme pour L1/L2).
* **Pas d'API REST pour le Cœur** : Les API REST sont utilisées pour parler *à* l'UNS, mais ne sont pas la pièce centrale. Le cœur est basé sur les événements.

---

### 4️⃣ Des Standards Ouverts & Interopérables
**Plutôt que l'enfermement propriétaire fermé**

L'interopérabilité est la souveraineté.
Les protocoles ouverts permettent la résilience, l'innovation et la liberté de choix.

* **Architecture Ouverte** : Les systèmes doivent « bien jouer » avec les autres acteurs et partager les données en utilisant des outils standards.
* **Éprouvé à l'Échelle** : Ce n'est pas pour des Preuves de Concept (PoC) qui ne fonctionnent que localement. Il est prouvé qu'il fonctionne à grande échelle (plus de 1000 sites dans le monde en véritable production).

---

# Erreurs courantes et ce que l'UNS n'est PAS

* ❌ Pas seulement un broker MQTT
* ❌ Pas une pile technologique
* ❌ Pas un lac de données
* ❌ Pas un tableau de bord
* ❌ Pas une plateforme IIoT
* ❌ Pas une solution vendeur
* ❌ Pas ...

C'est la **cohérence architecturale** qui connecte les systèmes et les humains.


# Les Conséquences de Bien Faire les Choses

Lorsqu'il est correctement mis en œuvre, un Unified Namespace crée :

### 🌍 Une Source Unique de Vérité Globale (SSoT)
Une réalité opérationnelle partagée et en temps réel à travers l'IT et l'OT.
* **Définition Temps Réel** : Il représente la *dernière valeur connue* en temps quasi réel.
* **Pas de Duplication** : Il fournit des données *sans duplication* et *sans les stocker* (pas de base de données dans le cœur de l'UNS ; les historiens sont séparés).
* **HMI Automatique** : De nouveaux KPI et écrans apparaissent automatiquement sans coder de nouveaux HMI.

### ⚡ Création Exponentielle de Cas d'Usage
Une fois les données structurées et contextualisées, de nouveaux cas d'usage émergent rapidement — maintenance prédictive, optimisation énergétique, analytique qualité, applications IA.

### 🔄 Flexibilité Extrême
Les systèmes évoluent sans réingénierie de toute l'architecture.

### 💰 ROI Plus Rapide
Les projets deviennent incrémentaux, et non monolithiques.
La valeur est délivrée en continu.

### 🧩 Agnosticisme des Outils
Vous choisissez les outils en fonction des besoins, du budget et des contraintes — pas parce que votre architecture vous y oblige.

---

# Pourquoi l'Adoption Échoue

Comme pour l'Agile, ou l'IA beaucoup prétendront être conformes et experts.

Mais :

* Ajouter un outil, un broker ne crée pas un Unified Namespace.
* Diffuser toutes les données ne rend pas le système piloté par les événements.
* Publier le chaos ne crée pas de structure.

L'UNS est :
* Un état d'esprit
* Une discipline
* Un engagement architectural à long terme, adossé à des outils respectant les principes de l'UNS.

Il nécessite une gouvernance.
Il nécessite des conventions de nommage.
Il nécessite une modélisation sémantique.
Il nécessite un alignement culturel entre IT et OT.

Il faut des années pour le maîtriser, car c'est un cadre.

---

# Manifestez-vous pour signer le Manifeste du Unified Namespace
Nous invitons :

* Les leaders industriels
* Les intégrateurs systèmes
* Les éditeurs de logiciels
* Les fabricants de matériel
* Les architectes
* Les institutions publiques
* Les éducateurs

À s'aligner autour de principes partagés.
À éviter la complexité inutile.
À concevoir des systèmes qui auront encore du sens dans 20 ans.

---

*Version 2.0 | Ouvert à la contribution et à l'évolution de la communauté*
