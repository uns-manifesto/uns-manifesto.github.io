## The Four Principles of Unified Namespace

Inspired by the spirit of Agile, we value:

### 1. Event-Driven Architecture
**Over tightly coupled, brittle, spaghetti integrations**

Systems publish facts as they happen.
Consumers subscribe to what they need.
No more fragile point-to-point dependencies.

* **Edge Driven**: All devices and systems use events tracked and processed locally and globally, as per today the most widely used and proven approach is to use an MQTT 5.0 broker.
* **Resilience (Disconnected Mode)**: In disconnected mode (offline), the system must still work. When back online, it auto-resynchronizes by sending missing data (Store & Forward).

---

### 2. Report by Exception (RBE)
**Over massive, meaningless data floods**

Only meaningful changes matter.
Signal over noise.
Context over volume.

* **Anti-Polling**: Traditional architectures return all data periodically, even "Null" or "empty" data. This jams the network at scale and creates junk in data lakes. UNS eliminates this waste.

---

### 3. Lightweight & Scalable Design
**Over heavy, monolithic, non-scalable stacks**

Architecture must evolve with the business.
If it cannot scale horizontally and adapt quickly, it will collapse under complexity.

* **Lightweight Pub/Sub**: MQTT is not compulsory but is nearly a "Must Have" above Level 2. (OPC UA is the standard for L1/L2).
* **No REST API for Core**: REST APIs are used to talk *to* the UNS, but are not the center piece. The core is event-based.

---

### 4. Open & Interoperable Standards
**Over closed, proprietary lock-in**

Interoperability is sovereignty.
Open protocols enable resilience, innovation, and freedom of choice.

* **Open Architecture**: Systems must "play nice" with other actors and share data using standard tools.
* **Proven at Scale**: This is not for Proofs of Concept (PoC) that only work locally. It is proven to work at scale (1000+ sites worldwide in true production).
