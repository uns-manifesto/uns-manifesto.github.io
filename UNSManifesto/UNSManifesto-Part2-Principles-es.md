## Los cinco principios del Unified Namespace

Inspirados en el espíritu de Agile, valoramos:

### 1. Arquitectura impulsada por eventos (Event-Driven)

**Sobre integraciones fuertemente acopladas, frágiles y tipo espagueti**

Los sistemas publican hechos a medida que suceden.
Los consumidores se suscriben a lo que necesitan.
No más dependencias frágiles punto a punto.

* **Impulsado por el Borde (Edge Defined)**: Todos los dispositivos y sistemas utilizan eventos rastreados y procesados local y globalmente, siendo a día de hoy el enfoque más utilizado y probado el uso de un broker MQTT 5.0.
* **Resiliencia (Modo Desconectado)**: En modo desconectado (offline), el sistema debe seguir funcionando. Al volver a estar online, se auto-resincroniza enviando los datos faltantes (Store & Forward).

---

### 2. Reporte por Excepción (RBE)

**Sobre inundaciones de datos masivos y sin sentido**

Solo importan los cambios significativos.
Señal sobre ruido.
Contexto sobre volumen.

* **Anti-Polling**: Las arquitecturas tradicionales devuelven todos los datos periódicamente, incluso datos "Nulos" o "vacíos". Esto satura la red a escala y crea basura en los lagos de datos. El UNS elimina este desperdicio.

---

### 3. Diseño Ligero y Escalable

**Sobre pilas pesadas, monolíticas y no escalables**

La arquitectura debe evolucionar con el negocio.
Si no puede escalar horizontalmente y adaptarse rápidamente, colapsará bajo la complejidad.

* **Pub/Sub Ligero**: MQTT no es obligatorio pero es casi un "Must Have" por encima del Nivel 2. (OPC UA es el estándar para L1/L2).
* **Sin API REST para el Núcleo**: Las APIs REST se utilizan para hablar *con* el UNS, pero no son la pieza central. El núcleo se basa en eventos.

---

### 4. Estándares Abiertos e Interoperables

**Sobre el bloqueo propietario cerrado**

La interoperabilidad es soberanía.
Los protocolos abiertos permiten resiliencia, innovación y libertad de elección.

* **Arquitectura Abierta**: Los sistemas deben "jugar limpio" con otros actores y compartir datos utilizando herramientas estándar.
* **Probado a Escala**: Esto no es para Pruebas de Concepto (PoC) que solo funcionan localmente. Está probado que funciona a escala (más de 1000 sitios en todo el mundo en producción real).

---

### 5. Taxonomía Semántica y Contextualizada
**Sobre estructuras rígidas, planas o no estandarizadas**

Los datos solo son valiosos cuando están contextualizados. Organizamos la información en una taxonomía semántica, ágil y estructurada.

* **Modelado Estandarizado**: Siguiendo las recomendaciones de ISA/IEC para el modelado de fábricas (Empresa > Sitio > Área > Línea > Celda > Equipo > Punto de medición), asegurando un lenguaje común en toda la organización.
* **Taxonomía Ágil**: La estructura no es inamovible; es ágil y puede evolucionar para incluir nuevos activos, procesos y metadatos sin romper las integraciones existentes.
* **Idealmente autodescriptivo**: Toda la información debe ser autocontenida, es decir, debe contener toda la información necesaria para entender de qué se trata sin necesidad de consultar documentación o a una persona externa.