## Définition & Standards UNS : Une **Définition UNS** est un accord sémantique sur la manière dont les opérations sont décrites. Alors que les **Standards UNS** formels sont essentiels pour la conformité technique des protocoles et l'interopérabilité profonde, un **Manifeste** progresse plus rapidement. Il fournit l'alignement culturel et philosophique immédiat nécessaire pour que la communauté agisse dès maintenant, tandis que les processus de normalisation formels suivent derrière pour solidifier les bases techniques.

---

## Les quatre principes du Unified Namespace

Inspirés par l'esprit de l'Agile, nous valorisons :

### 1. Une Architecture Pilotée par les Événements (Event-Driven)
**Plutôt que des intégrations « spaghetti », fragiles et fortement couplées**

Les systèmes publient les faits au moment où ils se produisent.
Les consommateurs s'abonnent à ce dont ils ont besoin.
Plus de dépendances point à point fragiles.

* **Piloté par l'Edge** : Tous les appareils et systèmes utilisent des événements suivis et traités localement et globalement, l'approche la plus utilisée et éprouvée à ce jour étant l'utilisation d'un broker MQTT 5.0.
* **Résilience (Mode Déconnecté)** : En mode déconnecté (hors ligne), le système doit continuer de fonctionner. Une fois de retour en ligne, il s'auto-resynchronise en envoyant les données manquantes (Stockage & Transfert).

---

### 2. Le Rapport par Exception (RBE)
**Plutôt que des flux de données massifs et insignifiants**

Seuls les changements significatifs comptent.
Le signal plutôt que le bruit.
Le contexte plutôt que le volume.

* **Anti-Polling** : Les architectures traditionnelles renvoient toutes les données périodiquement, même les données « Nulles » ou « vides ». Cela sature le réseau à grande échelle et crée des déchets dans les lacs de données. L'UNS élimine ce gaspillage.

---

### 3. Une Conception Légère & Évolutive
**Plutôt que des piles lourdes, monolithiques et non évolutives**

L'architecture doit évoluer avec l'entreprise.
Si elle ne peut pas s'adapter rapidement et passer à l'échelle horizontalement, elle s'effondrera sous la complexité.

* **Pub/Sub Léger** : MQTT n'est pas obligatoire mais est presque un « Must Have » au-dessus du Niveau 2. (OPC UA est la norme pour L1/L2).
* **Pas d'API REST pour le Cœur** : Les API REST sont utilisées pour parler *à* l'UNS, mais ne sont pas la pièce centrale. Le cœur est basé sur les événements.

---

### 4. Des Standards Ouverts & Interopérables
**Plutôt que l'enfermement propriétaire fermé**

L'interopérabilité est la souveraineté.
Les protocoles ouverts permettent la résilience, l'innovation et la liberté de choix.

* **Architecture Ouverte** : Les systèmes doivent « bien jouer » avec les autres acteurs et partager les données en utilisant des outils standards.
* **Éprouvé à l'Échelle** : Ce n'est pas pour des Preuves de Concept (PoC) qui ne fonctionnent que localement. Il est prouvé qu'il fonctionne à grande échelle (plus de 1000 sites dans le monde en véritable production).
