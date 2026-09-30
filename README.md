# Aplicación de buenas prácticas de arquitectura en Cloud Computing

El candidato, con experiencia en Frontend Angular, debe comprender y aplicar los principios arquitectónicos que garantizan escalabilidad, mantenibilidad y seguridad en soluciones cloud. El sistema a analizar es un servicio de comercio electrónico que opera en AWS, con componentes como un frontend Angular, un backend RESTful, y un servicio de almacenamiento en S3. El servicio debe manejar hasta 10 000 solicitudes por segundo con un tiempo de respuesta promedio de 200ms. Se espera que el candidato identifique y discuta las decisiones arquitectónicas clave y sus implicaciones.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Framework de buenas prácticas de arquitectura |
| **Nivel** | master-l1 |
| **Tipo** | theoretical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Exploración del sistema y sus restricciones

**Objetivo:** Identificar las restricciones y ambigüedades del sistema de comercio electrónico en AWS.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Analiza el sistema de comercio electrónico y sus componentes.
- Identifica las restricciones operativas y las ambigüedades presentes.
- Documenta ejemplos de restricciones relevantes y triviales.

**Entregable:** Documento que detalla las restricciones y ambigüedades del sistema.

<details>
<summary>Pistas de conocimiento</summary>

- Considera las restricciones de escalabilidad, mantenibilidad y seguridad.
- Piensa en cómo las decisiones arquitectónicas impactan estas restricciones.

</details>

### Fase 2: Evaluación de una decisión arquitectónica controversial

**Objetivo:** Evaluar una decisión arquitectónica controversial y sus trade-offs.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Selecciona una decisión arquitectónica controversial en el sistema de comercio electrónico.
- Evalúa los trade-offs de esta decisión y discute sus pros y contras.
- Documenta tu evaluación en un registro detallado.

**Entregable:** Registro detallado de la evaluación de la decisión arquitectónica controversial.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los trade-offs entre escalabilidad, mantenibilidad y seguridad.
- Piensa en cómo la decisión impacta el rendimiento y la confiabilidad del sistema.

</details>

### Fase 3: Comunicación de las decisiones arquitectónicas a diferentes audiencias

**Objetivo:** Comunicar las decisiones arquitectónicas a audiencias técnicas y de negocio.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Prepara una presentación que comunique las decisiones arquitectónicas a una audiencia técnica.
- Prepara un informe que comunique las decisiones arquitectónicas a una audiencia de negocio.
- Asegura que ambas comunicaciones sean claras y efectivas.

**Entregable:** Presentación y informe que comunican las decisiones arquitectónicas a audiencias técnicas y de negocio.

<details>
<summary>Pistas de conocimiento</summary>

- Considera las necesidades y preocupaciones de cada audiencia.
- Piensa en cómo comunicar de manera efectiva los beneficios y trade-offs de las decisiones arquitectónicas.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las buenas prácticas de arquitectura en Cloud Computing?
- **paraQueSirve**: ¿Para qué sirven las buenas prácticas de arquitectura en Cloud Computing?
- **comoSeUsa**: ¿Cómo se aplican las buenas prácticas de arquitectura en Cloud Computing?
- **erroresComunes**: ¿Cuáles son los errores comunes al aplicar las buenas prácticas de arquitectura en Cloud Computing?
- **queDecisionesImplica**: ¿Qué decisiones implica la aplicación de las buenas prácticas de arquitectura en Cloud Computing?

## Criterios de Evaluacion

- Identificación y documentación de restricciones y ambigüedades del sistema.
- Evaluación y documentación de una decisión arquitectónica controversial y sus trade-offs.
- Comunicación efectiva de las decisiones arquitectónicas a audiencias técnicas y de negocio.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
