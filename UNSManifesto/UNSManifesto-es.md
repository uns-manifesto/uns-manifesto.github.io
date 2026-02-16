# #UNSManifesto

## El Manifiesto del Unified Namespace

### Un marco para una industria escalable, abierta e impulsada por eventos

---

## La Filosofía Central

Un Unified Namespace (UNS) es un ecosistema de datos vivo, estructurado e impulsado por eventos que crea una comprensión de las operaciones en tiempo (casi) real, compartida y contextualizada.

Es un marco de trabajo — no una herramienta.

Las herramientas pueden habilitarlo. Pero las herramientas por sí solas nunca lo crearán. Está centrado en el ser humano y necesita gobernanza.

---

## ¿Por qué un Manifiesto del Unified Namespace?

En 2001, el **Manifiesto Ágil** reformuló el desarrollo de software en todo el mundo.
No era una herramienta.
No era un producto.
No era un estándar.

Era un **conjunto de principios**.

Hoy en día, la industria, la manufactura, la energía, la logística y la infraestructura inteligente necesitan la misma claridad.

El **Unified Namespace (UNS)** no es un producto.
No es un broker.
No es una plataforma.

Es una **filosofía de diseño para sistemas de información industrial** que va más allá de los límites de IT y OT, ya que se extiende a toda la organización extendida (varios proveedores, instituciones públicas, clientes B2B/B2C, etc.) para entregar Datos como alto valor añadido.

Como la agilidad, es:

* Difícil de explicar en teoría
* Obvio una vez experimentado (principio #LearnByDoing de Maria Montessori)
* Simple en principio
* Poderoso en la práctica
* Fácil de malinterpretar
* Difícil de dominar, necesita muchos años de experiencia práctica en el campo (no teoría)

No se “instala” un Unified Namespace.
Se **diseña una Estrategia Digital, y se crece en ella** a lo largo de los años.

---

## Los Cuatro Principios del Unified Namespace

Inspirados en el espíritu de Agile, valoramos:

### 1️⃣ Arquitectura Impulsada por Eventos (Event-Driven)

**Sobre integraciones fuertemente acopladas, frágiles y tipo espagueti**

Los sistemas publican hechos a medida que suceden.
Los consumidores se suscriben a lo que necesitan.
No más dependencias frágiles punto a punto.

* **Impulsado por el Borde (Edge Defined)**: Todos los dispositivos y sistemas utilizan eventos rastreados y procesados local y globalmente, siendo a día de hoy el enfoque más utilizado y probado el uso de un broker MQTT 5.0.
* **Resiliencia (Modo Desconectado)**: En modo desconectado (offline), el sistema debe seguir funcionando. Al volver a estar online, se auto-resincroniza enviando los datos faltantes (Store & Forward).

---

### 2️⃣ Reporte por Excepción (RBE)

**Sobre inundaciones de datos masivos y sin sentido**

Solo importan los cambios significativos.
Señal sobre ruido.
Contexto sobre volumen.

* **Anti-Polling**: Las arquitecturas tradicionales devuelven todos los datos periódicamente, incluso datos "Nulos" o "vacíos". Esto satura la red a escala y crea basura en los lagos de datos. El UNS elimina este desperdicio.

---

### 3️⃣ Diseño Ligero y Escalable

**Sobre pilas pesadas, monolíticas y no escalables**

La arquitectura debe evolucionar con el negocio.
Si no puede escalar horizontalmente y adaptarse rápidamente, colapsará bajo la complejidad.

* **Pub/Sub Ligero**: MQTT no es obligatorio pero es casi un "Must Have" por encima del Nivel 2. (OPC UA es el estándar para L1/L2).
* **Sin API REST para el Núcleo**: Las APIs REST se utilizan para hablar *con* el UNS, pero no son la pieza central. El núcleo se basa en eventos.

---

### 4️⃣ Estándares Abiertos e Interoperables

**Sobre el bloqueo propietario cerrado**

La interoperabilidad es soberanía.
Los protocolos abiertos permiten resiliencia, innovación y libertad de elección.

* **Arquitectura Abierta**: Los sistemas deben "jugar limpio" con otros actores y compartir datos utilizando herramientas estándar.
* **Probado a Escala**: Esto no es para Pruebas de Concepto (PoC) que solo funcionan localmente. Está probado que funciona a escala (más de 1000 sitios en todo el mundo en producción real).

---

![Representación UNS](/images/UNSRepresentation.png)

# Errores comunes y lo que el UNS NO es

* ❌ No es solo un broker MQTT
* ❌ No es una pila tecnológica
* ❌ No es un lago de datos
* ❌ No es un tablero (dashboard)
* ❌ No es una plataforma IIoT
* ❌ No es una solución de un vendedor
* ❌ No es ...

Es la **coherencia arquitectónica** que conecta sistemas y humanos.


# Las Consecuencias de Hacerlo Bien

Cuando se implementa correctamente, un Unified Namespace crea:

### Una Fuente Única de Verdad Global (SSoT)
Una realidad operativa compartida y en tiempo real a través de IT y OT.
* **Definición de Tiempo Real**: Representa el *último valor conocido* en tiempo casi real.
* **Sin Duplicación**: Proporciona datos *sin duplicación* y *sin almacenarlos* (sin base de datos en el núcleo del UNS; los historiadores están separados).
* **HMI Automático**: Nuevos KPIs y pantallas aparecen automáticamente sin codificar nuevos HMIs.

### Creación Exponencial de Casos de Uso
Una vez que los datos están estructurados y contextualizados, emergen rápidamente nuevos casos de uso — mantenimiento predictivo, optimización energética, analítica de calidad, aplicaciones de IA.

### Flexibilidad Extrema
Los sistemas evolucionan sin reingeniería de toda la arquitectura.

### ROI Más Rápido
Los proyectos se vuelven incrementales, no monolíticos.
El valor se entrega continuamente.

### Agnosticismo de Herramientas
Eliges herramientas basadas en necesidad, presupuesto y restricciones — no porque tu arquitectura te obligue.

---

# Por qué Falla la Adopción

Como Agile, o la IA, muchos afirmarán cumplimiento y experiencia.

Pero:

* Agregar una herramienta, un broker, no crea un Unified Namespace.
* Transmitir todos los datos no lo hace impulsado por eventos.
* Publicar caos no crea estructura.

El UNS es:
* Una mentalidad
* Una disciplina
* Un compromiso arquitectónico a largo plazo, respaldado por herramientas que respetan los principios del UNS.

Requiere gobernanza.
Requiere convenciones de nomenclatura.
Requiere modelado semántico.
Requiere alineación cultural entre IT y OT.

Toma años dominarlo — porque es un marco de trabajo.

---

# Firma el Manifiesto del Unified Namespace
Invitamos a:

* Líderes industriales
* Integradores de sistemas
* Vendedores de software
* Arquitectos
* Instituciones públicas
* Educadores

A alinearse en torno a principios compartidos.
A evitar la complejidad innecesaria.
A diseñar sistemas que seguirán teniendo sentido en 20 años.

---

*Versión 2.0 | Abierto a la contribución y evolución de la comunidad*
