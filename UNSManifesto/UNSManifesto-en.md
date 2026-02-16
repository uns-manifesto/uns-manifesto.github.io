## Why a Unified Namespace Manifesto?

In 2001, the **Agile Manifesto** reshaped software development worldwide.
It was not a tool.
It was not a product.
It was not a standard.

It was a **set of principles**.

Today, industry, manufacturing, energy, logistics, and smart infrastructure need the same clarity.

The **Unified Namespace (UNS)** is not a product.
It is not a broker.
It is not a platform.

It is a **principle of architecture / design philosophy for industrial information systems** which goes beyond the boundaries of IT and OT, as it spans across the entire extended organization (various providers, public institutions, B2B/B2C customers, etc.) to deliver Data as high value-added.

Like agility, it is:

* Difficult to explain in theory, because it is vast
* Obvious once experienced (Maria Montessori's #LearnByDoing principle)
* Simple in principle
* Powerful in practice
* Easy to misunderstand
* Hard to master, and needs many years of hands-on fields experience (not theory)

You do not “install” a Unified Namespace.
You **design a Digital Strategy, and grow into it** over the years.

---
<div id="Resx_Principles"></div>
### UNS Definition & Standards

A **UNS Definition** is a semantic agreement on how operations are described. While formal **UNS Standards** are essential for technical protocol compliance and deep interoperability, a **Manifesto** moves faster. It provides the immediate cultural and philosophical alignment needed for the community to act now, while formal standardization processes follow behind to solidify the technical foundation.

---

## The Four Principles of Unified Namespace

Inspired by the spirit of Agile, we value:

### 1️⃣ Event-Driven Architecture
**Over tightly coupled, brittle, spaghetti integrations**

Systems publish facts as they happen.
Consumers subscribe to what they need.
No more fragile point-to-point dependencies.

* **Edge Driven**: All devices and systems use events tracked and processed locally and globally, as per today the most widely used and proven approach is to use an MQTT 5.0 broker.
* **Resilience (Disconnected Mode)**: In disconnected mode (offline), the system must still work. When back online, it auto-resynchronizes by sending missing data (Store & Forward).

---

### 2️⃣ Report by Exception (RBE)
**Over massive, meaningless data floods**

Only meaningful changes matter.
Signal over noise.
Context over volume.

* **Anti-Polling**: Traditional architectures return all data periodically, even "Null" or "empty" data. This jams the network at scale and creates junk in data lakes. UNS eliminates this waste.

---

### 3️⃣ Lightweight & Scalable Design
**Over heavy, monolithic, non-scalable stacks**

Architecture must evolve with the business.
If it cannot scale horizontally and adapt quickly, it will collapse under complexity.

* **Lightweight Pub/Sub**: MQTT is not compulsory but is nearly a "Must Have" above Level 2. (OPC UA is the standard for L1/L2).
* **No REST API for Core**: REST APIs are used to talk *to* the UNS, but are not the center piece. The core is event-based.

---

### 4️⃣ Open & Interoperable Standards
**Over closed, proprietary lock-in**

Interoperability is sovereignty.
Open protocols enable resilience, innovation, and freedom of choice.

* **Open Architecture**: Systems must "play nice" with other actors and share data using standard tools.
* **Proven at Scale**: This is not for Proofs of Concept (PoC) that only work locally. It is proven to work at scale (1000+ sites worldwide in true production).

#  The Consequences of Doing It Right

When correctly implemented, a Unified Namespace creates:

### A Global Single Source of Truth (SSoT)
A shared, real-time operational reality across IT & OT.
* **Real-Time Definition**: It represents the *last known value* in near real-time.
* **No Duplication**: It provides data *without duplication* and *without storing it* (no database in the UNS core; historians are separate).
* **Automatic HMI**: New KPIs and screens appear automatically without coding new HMIs.

### Exponential Use Case Creation
Once data is structured and contextualized, new use cases emerge rapidly — predictive maintenance, energy optimization, quality analytics, AI applications.

### Extreme Flexibility
Systems evolve without re-engineering the entire architecture.

### Faster ROI
Projects become incremental, not monolithic.
Value is delivered continuously.

### Tool Agnosticism
You choose tools based on need, budget, and constraints — not because your architecture forces you.

---

---

*Version 2.0 | Open for community contribution and evolution*

*Version 2.0 | Open for community contribution and evolution*
