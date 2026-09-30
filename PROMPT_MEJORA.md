# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/app/core/services/auth.service.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- `src/app/core/interceptors/auth.interceptor.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- `src/app/core/guards/auth.guard.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.
- `src/config/security.config.ts` — El topic pide autenticacion/seguridad: este archivo es el ejercicio.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Archivos que la arquitectura del reto declara y no estan

Creálos con implementacion real, en la capa que les corresponde:

- `src/app/app.config.ts`
- `src/app/shared/services/product.service.ts`

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `package.json` — `typescript@5.8.0`: typescript declara la version 5.8.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Angular, Master

### Brecha de conocimiento
Aplica el framework de buenas prácticas de arquitectura en Cloud Computing. Comprende y domina los principios arquitectónicos que garantizan escalabilidad, mantenibilidad y seguridad en soluciones cloud.

### Misión / candidato
Candidato con experiencia en Frontend Angular

### Reto
- Tema: Framework de buenas prácticas de arquitectura
- Seniority: master-l1
- Tipo: theoretical
- Título: Aplicación de buenas prácticas de arquitectura en Cloud Computing
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Exploración del sistema y sus restricciones — objetivo: Identificar las restricciones y ambigüedades del sistema de comercio electrónico en AWS. — entregable (NO resolver): Documento que detalla las restricciones y ambigüedades del sistema.
- Fase 2: Evaluación de una decisión arquitectónica controversial — objetivo: Evaluar una decisión arquitectónica controversial y sus trade-offs. — entregable (NO resolver): Registro detallado de la evaluación de la decisión arquitectónica controversial.
- Fase 3: Comunicación de las decisiones arquitectónicas a diferentes audiencias — objetivo: Comunicar las decisiones arquitectónicas a audiencias técnicas y de negocio. — entregable (NO resolver): Presentación y informe que comunican las decisiones arquitectónicas a audiencias técnicas y de negocio.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "ecommerce-frontend",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "vitest",
    "lint": "ng lint"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~20.0.0",
    "@angular/cdk": "~20.0.0",
    "@angular/common": "~20.0.0",
    "@angular/compiler": "~20.0.0",
    "@angular/core": "~20.0.0",
    "@angular/forms": "~20.0.0",
    "@angular/material": "~20.0.0",
    "@angular/platform-browser": "~20.0.0",
    "@angular/platform-browser-dynamic": "~20.0.0",
    "@angular/router": "~20.0.0",
    "@angular/common/http": "~20.0.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.0.0",
    "@angular/cli": "~20.0.0",
    "@angular/compiler-cli": "~20.0.0",
    "@types/node": "^18.16.0",
    "typescript": "~5.8.0",
    "vitest": "^1.4.0",
    "@vitest/coverage-v8": "^1.4.0",
    "@angular-eslint/builder": "~17.3.0",
    "@angular-eslint/eslint-plugin": "~17.3.0",
    "@angular-eslint/eslint-plugin-template": "~17.3.0",
    "@angular-eslint/template-parser": "~17.3.0",
    "eslint": "^8.56.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsdoc": "^48.2.0",
    "eslint-plugin-prefer-arrow": "^1.2.3",
    "jasmine-core": "~5.1.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0"
  }
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "ecommerce-frontend": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "standalone": true,
          "style": "scss",
          "skipTests": false
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/ecommerce-frontend",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all",
              "optimization": true,
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "ecommerce-frontend:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "ecommerce-frontend:build:production"
            },
            "development": {
              "browserTarget": "ecommerce-frontend:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "ecommerce-frontend:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "src/**/*.ts",
              "src/**/*.html"
            ]
          }
        }
      }
    }
  },
  "cli": {
    "analytics": false
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": false,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom",
      "dom.iterable"
    ],
    "paths": {
      "@app/*": ["src/app/*"],
      "@shared/*": ["src/app/shared/*"],
      "@features/*": ["src/app/features/*"]
    }
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// === ARCHIVO: src/app/core/services/auth.service.ts ===
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  expiresIn: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly EXPIRES_IN_KEY = 'auth_expires_in';
  private readonly API_URL = '/api/auth';

  isAuthenticated = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthStatus();
  }

  login(credentials: LoginCredentials): Observable<AuthResponse> {
    this.isLoading.set(true);
    this.error.set(null);

    return this.http.post<AuthResponse>(`${this.API_URL}/login`, credentials).pipe(
      tap(response => {
        this.handleAuthSuccess(response);
      })
    );
  }

  logout(): void {
    // Implementar lógica de logout
  }

  getToken(): string | null {
    // Implementar recuperación del token
    return null;
  }

  private handleAuthSuccess(response: AuthResponse): void {
    // Implementar manejo de respuesta exitosa
  }

  private checkAuthStatus(): void {
    // Implementar verificación de estado de autenticación
  }

  private clearAuthData(): void {
    // Implementar limpieza de datos de autenticación
  }
}

// === ARCHIVO: src/app/core/interceptors/auth.interceptor.ts ===
import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private authService = inject(AuthService);
  private router = inject(Router);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}

// === ARCHIVO: src/app/core/guards/auth.guard.ts ===
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated.asObservable().pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      } else {
        router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
    })
  );
};


// === ARCHIVO: src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { GlobalErrorHandler } from './app/core/handlers/global-error.handler';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

const applicationConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
};

bootstrapApplication(AppComponent, applicationConfig)
  .catch(err => console.error('Error al iniciar la aplicación:', err));

// === ARCHIVO: src/index.html ===
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Plataforma de comercio electrónico con arquitectura cloud escalable">
  <title>Cloud E-Commerce Platform</title>
  <base href="/">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
  <noscript>
    <div style="padding: 40px; text-align: center; font-family: sans-serif;">
      <h1>JavaScript Requerido</h1>
      <p>Por favor, habilite JavaScript en su navegador para utilizar esta aplicación.</p>
    </div>
  </noscript>
</body>
</html>

// === ARCHIVO: src/app/shared/models/product.model.ts ===
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: ProductCategory;
  subcategory?: string;
  sku: string;
  stock: number;
  stockStatus: StockStatus;
  rating: ProductRating;
  tags: string[];
  attributes: ProductAttribute[];
  pricing: ProductPricing;
  availability: ProductAvailability;
  metadata: ProductMetadata;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  level: number;
}

export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock' | 'preorder';

export interface ProductRating {
  average: number;
  count: number;
  reviews: number;
  distribution: RatingDistribution;
}

export interface RatingDistribution {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

export interface ProductAttribute {
  name: string;
  value: string;
  displayName: string;
}

export interface ProductPricing {
  basePrice: number;
  salePrice?: number;
  discountPercentage?: number;
  discountAmount?: number;
  currency: string;
  taxIncluded: boolean;
  taxRate?: number;
}

export interface ProductAvailability {
  available: boolean;
  availableDate?: Date;
  preorderDate?: Date;
  shippingEstimate?: ShippingEstimate;
}

export interface ShippingEstimate {
  minDays: number;
  maxDays: number;
  freeShipping: boolean;
  expressShipping: boolean;
}

export interface ProductMetadata {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  version: number;
}

export interface ProductFilters {
  category?: string;
  subcategory?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  rating?: number;
  tags?: string[];
  search?: string;
  sortBy?: ProductSortBy;
  sortOrder?: SortOrder;
  page?: number;
  limit?: number;
}

export type ProductSortBy = 'price' | 'name' | 'rating' | 'createdAt' | 'popularity';
export type SortOrder = 'asc' | 'desc';

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ProductCreateRequest {
  name: string;
  description: string;
  price: number;
  categoryId: string;
  sku: string;
  stock: number;
  imageUrl: string;
  tags?: string[];
  attributes?: ProductAttribute[];
}

export interface ProductUpdateRequest {
  name?: string;
  description?: string;
  price?: number;
  categoryId?: string;
  stock?: number;
  imageUrl?: string;
  tags?: string[];
  attributes?: ProductAttribute[];
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: string;
  path?: string;
}

export const PRODUCT_VALIDATION = {
  NAME_MIN_LENGTH: 3,
  NAME_MAX_LENGTH: 200,
  DESCRIPTION_MIN_LENGTH: 10,
  DESCRIPTION_MAX_LENGTH: 5000,
  PRICE_MIN: 0.01,
  PRICE_MAX: 999999.99,
  STOCK_MIN: 0,
  SKU_PATTERN: /^[A-Z0-9-]{3,50}$/i,
} as const;

export function validateProduct(product: Partial<Product>): string[] {
  const errors: string[] = [];

  if (!product.name || product.name.length < PRODUCT_VALIDATION.NAME_MIN_LENGTH) {
    errors.push(`El nombre debe tener al menos ${PRODUCT_VALIDATION.NAME_MIN_LENGTH} caracteres`);
  }

  if (product.name && product.name.length > PRODUCT_VALIDATION.NAME_MAX_LENGTH) {
    errors.push(`El nombre no puede exceder ${PRODUCT_VALIDATION.NAME_MAX_LENGTH} caracteres`);
  }

  if (!product.description || product.description.length < PRODUCT_VALIDATION.DESCRIPTION_MIN_LENGTH) {
    errors.push(`La descripción debe tener al menos ${PRODUCT_VALIDATION.DESCRIPTION_MIN_LENGTH} caracteres`);
  }

  if (product.description && product.description.length > PRODUCT_VALIDATION.DESCRIPTION_MAX_LENGTH) {
    errors.push(`La descripción no puede exceder ${PRODUCT_VALIDATION.DESCRIPTION_MAX_LENGTH} caracteres`);
  }

  if (product.price === undefined || product.price < PRODUCT_VALIDATION.PRICE_MIN) {
    errors.push(`El precio debe ser mayor a ${PRODUCT_VALIDATION.PRICE_MIN}`);
  }

  if (product.price && product.price > PRODUCT_VALIDATION.PRICE_MAX) {
    errors.push(`El precio no puede exceder ${PRODUCT_VALIDATION.PRICE_MAX}`);
  }

  if (product.stock !== undefined && product.stock < PRODUCT_VALIDATION.STOCK_MIN) {
    errors.push(`El stock no puede ser negativo`);
  }

  if (product.sku && !PRODUCT_VALIDATION.SKU_PATTERN.test(product.sku)) {
    errors.push('El SKU debe contener solo letras, números y guiones (3-50 caracteres)');
  }

  return errors;
}

export function mapStockStatus(stock: number): StockStatus {
  if (stock <= 0) return 'out_of_stock';
  if (stock <= 5) return 'low_stock';
  return 'in_stock';
}

export function calculateDiscountPercentage(basePrice: number, salePrice: number): number {
  if (basePrice <= 0 || salePrice >= basePrice) return 0;
  return Math.round(((basePrice - salePrice) / basePrice) * 100);
}


// === ARCHIVO: src/app/features/ecommerce/product-list/product-list.component.ts ===
import { Component, OnInit, OnDestroy, signal, computed, effect, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { Subject, takeUntil, debounceTime } from 'rxjs';
import { Product } from '@app/shared/models/product.model';
import { ProductService } from '@app/shared/services/product.service';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatChipsModule,
    ProductCardComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit, OnDestroy {
  private readonly productService = inject(ProductService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroy$ = new Subject<void>();
  private readonly searchTerm$ = new Subject<string>();

  readonly products = signal<Product[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly error = signal<string | null>(null);
  readonly searchTerm = signal<string>('');
  readonly selectedCategory = signal<string>('all');
  readonly sortBy = signal<'name' | 'price' | 'rating'>('name');
  readonly viewMode = signal<'grid' | 'list'>('grid');

  readonly filteredProducts = computed(() => {
    let result = this.products();
    const term = this.searchTerm().toLowerCase();
    const category = this.selectedCategory();

    if (term) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description?.toLowerCase().includes(term)
      );
    }

    if (category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    const sort = this.sortBy();
    return [...result].sort((a, b) => {
      switch (sort) {
        case 'price':
          return (a.price || 0) - (b.price || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return (a.name || '').localeCompare(b.name || '');
      }
    });
  });

  readonly categories = computed(() => {
    const cats = new Set(this.products().map(p => p.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  });

  readonly productCount = computed(() => this.filteredProducts().length);

  constructor() {
    effect(() => {
      const count = this.productCount();
      console.log(`[ProductList] Mostrando ${count} productos`);
    });
  }

  ngOnInit(): void {
    this.loadProducts();
    this.setupSearchDebounce();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadProducts(): void {
    this.isLoading.set(true);
    this.error.set(null);

    this.productService.getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products) => {
          this.products.set(products);
          this.isLoading.set(false);
        },
        error: (err) => {
          this.error.set('Error al cargar los productos. Por favor, intente de nuevo.');
          this.isLoading.set(false);
          this.showErrorNotification('Error al cargar productos');
        }
      });
  }

  private setupSearchDebounce(): void {
    this.searchTerm$.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(term => {
      this.searchTerm.set(term);
    });
  }

  onSearch(term: string): void {
    this.searchTerm$.next(term);
  }

  onCategoryChange(category: string): void {
    this.selectedCategory.set(category);
  }

  onSortChange(sort: 'name' | 'price' | 'rating'): void {
    this.sortBy.set(sort);
  }

  onViewModeChange(mode: 'grid' | 'list'): void {
    this.viewMode.set(mode);
  }

  onProductClick(product: Product): void {
    console.log(`[ProductList] Producto seleccionado: ${product.id}`);
  }

  onAddToCart(product: Product): void {
    this.showSuccessNotification(`${product.name} añadido al carrito`);
  }

  onRefresh(): void {
    this.loadProducts();
  }

  private showErrorNotification(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }

  private showSuccessNotification(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}

// === ARCHIVO: src/app/features/ecommerce/product-list/product-list.component.html ===
<section class="product-list-container" role="region" aria-label="Catálogo de productos">
  <header class="list-header">
    <h1 class="list-title">Catálogo de Productos</h1>
    <p class="product-count" aria-live="polite">
      Mostrando {{ productCount() }} productos
    </p>
  </header>

  <div class="filters-bar" role="search" aria-label="Filtros de productos">
    <mat-form-field class="search-field" appearance="outline">
      <mat-label>Buscar productos</mat-label>
      <input 
        matInput 
        type="text"
        placeholder="Nombre o descripción..."
        (input)="onSearch($any($event.target).value)"
        aria-label="Buscar productos por nombre o descripción">
      <mat-icon matPrefix>search</mat-icon>
    </mat-form-field>

    <div class="filter-group">
      <label id="category-label">Categoría:</label>
      <mat-chip-listbox 
        aria-labelledby="category-label"
        (change)="onCategoryChange($event.value)">
        @for (category of categories(); track category) {
          <mat-chip-option 
            [value]="category"
            [selected]="selectedCategory() === category">
            {{ category === 'all' ? 'Todas' : category }}
          </mat-chip-option>
        }
      </mat-chip-listbox>
    </div>

    <div class="sort-controls">
      <label for="sort-select">Ordenar por:</label>
      <select 
        id="sort-select"
        class="sort-select"
        [value]="sortBy()"
        (change)="onSortChange($any($event.target).value)">
        <option value="name">Nombre</option>
        <option value="price">Precio</option>
        <option value="rating">Valoración</option>
      </select>
    </div>

    <div class="view-toggle" role="group" aria-label="Modo de vista">
      <button 
        mat-icon-button
        [class.active]="viewMode() === 'grid'"
        (click)="onViewModeChange('grid')"
        aria-label="Vista de cuadrícula"
        aria-pressed="{{ viewMode() === 'grid' }}">
        <mat-icon>grid_view</mat-icon>
      </button>
      <button 
        mat-icon-button
        [class.active]="viewMode() === 'list'"
        (click)="onViewModeChange('list')"
        aria-label="Vista de lista"
        aria-pressed="{{ viewMode() === 'list' }}">
        <mat-icon>view_list</mat-icon>
      </button>
    </div>
  </div>

  @if (isLoading()) {
    <div class="loading-state" role="status" aria-live="polite">
      <mat-spinner diameter="48"></mat-spinner>
      <p>Cargando productos...</p>
    </div>
  } @else if (error()) {
    <div class="error-state" role="alert">
      <mat-icon class="error-icon">error_outline</mat-icon>
      <p class="error-message">{{ error() }}</p>
      <button mat-raised-button color="primary" (click)="onRefresh()">
        <mat-icon>refresh</mat-icon>
        Reintentar
      </button>
    </div>
  } @else if (filteredProducts().length === 0) {
    <div class="empty-state" role="status">
      <mat-icon class="empty-icon">inventory_2</mat-icon>
      <p>No se encontraron productos que coincidan con los filtros.</p>
      <button mat-button color="primary" (click)="onCategoryChange('all'); onSearch('')">
        Limpiar filtros
      </button>
    </div>
  } @else {
    <main 
      class="products-grid"
      [class.list-view]="viewMode() === 'list'"
      role="list"
      aria-label="Lista de productos">
      @for (product of filteredProducts(); track trackByProductId($index, product)) {
        <article class="product-item" role="listitem">
          <app-product-card
            [product]="product"
            (productClick)="onProductClick($event)"
            (addToCart)="onAddToCart($event)">
          </app-product-card>
        </article>
      }
    </main>
  }

  <footer class="list-footer" role="contentinfo">
    <button 
      mat-mini-fab 
      color="accent"
      (click)="onRefresh()"
      aria-label="Actualizar lista de productos"
      class="refresh-button">
      <mat-icon>refresh</mat-icon>
    </button>
  </footer>
</section>

// === ARCHIVO: src/app/features/ecommerce/product-list/product-list.component.scss ===
$primary-color: #3f51b5;
$accent-color: #ff4081;
$warn-color: #f44336;
$success-color: #4caf50;
$background-light: #fafafa;
$background-card: #ffffff;
$text-primary: rgba(0, 0, 0, 0.87);
$text-secondary: rgba(0, 0, 0, 0.54);
$border-color: rgba(0, 0, 0, 0.12);
$spacing-unit: 8px;
$spacing-sm: $spacing-unit;
$spacing-md: $spacing-unit * 2;
$spacing-lg: $spacing-unit * 3;
$spacing-xl: $spacing-unit * 4;
$border-radius: 8px;
$card-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
$card-shadow-hover: 0 4px 8px rgba(0, 0, 0, 0.15);
$transition-duration: 0.3s;
$grid-min-width: 280px;
$grid-gap: $spacing-lg;

.product-list-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $background-light;
  padding: $spacing-lg;
  box-sizing: border-box;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-lg;
  flex-wrap: wrap;
  gap: $spacing-md;

  .list-title {
    font-size: 2rem;
    font-weight: 500;
    color: $text-primary;
    margin: 0;
    letter-spacing: 0.25px;
  }

  .product-count {
    font-size: 1rem;
    color: $text-secondary;
    margin: 0;
  }
}

.filters-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $spacing-md;
  padding: $spacing-md;
  background-color: $background-card;
  border-radius: $border-radius;
  box-shadow: $card-shadow;
  margin-bottom: $spacing-lg;

  .search-field {
    flex: 1;
    min-width: 250px;
    max-width: 400px;
  }

  .filter-group {
    display: flex;
    align-items: center;
    gap: $spacing-sm;

    label {
      font-size: 0.875rem;
      color: $text-secondary;
      font-weight: 500;
    }
  }

  .sort-controls {
    display: flex;
    align-items: center;
    gap: $spacing-sm;

    label {
      font-size: 0.875rem;
      color: $text-secondary;
      font-weight: 500;
    }

    .sort-select {
      padding: $spacing-sm $spacing-md;
      border: 1px solid $border-color;
      border-radius: 4px;
      background-color: $background-card;
      font-size: 0.875rem;
      color: $text-primary;
      cursor: pointer;
      transition: border-color $transition-duration ease;

      &:hover,
      &:focus {
        border-color: $primary-color;
        outline: none;
      }
    }
  }

  .view-toggle {
    display: flex;
    gap: $spacing-sm;

    button {
      transition: background-color $transition-duration ease;

      &.active {
        background-color: rgba($primary-color, 0.12);
        color: $primary-color;
      }
    }
  }
}

.loading-state,
.error-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: $spacing-xl * 2;
  text-align: center;
  min-height: 400px;
  gap: $spacing-md;

  p {
    font-size: 1.125rem;
    color: $text-secondary;
    margin: 0;
    max-width: 400px;
  }
}

.loading-state {
  mat-spinner {
    color: $primary-color;
  }
}

.error-state {
  .error-icon {
    font-size: 64px;
    width: 64px;
    height: 64px;
    color: $warn-color;
  }

  .error-message {
    color: $warn-color;
    font-weight: 500;
  }

  button {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }
}

.empty-state {
  .empty-icon {
    font-size: 64px;
    width: 64px;
    height: 64px;
    color: $text-secondary;
  }

  button {
    margin-top: $spacing-sm;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($grid-min-width, 1fr));
  gap: $grid-gap;
  padding: $spacing-sm 0;

  &.list-view {
    grid-template-columns: 1fr;
    max-width: 800px;
    margin: 0 auto;

    .product-item {
      app-product-card {
        ::ng-deep .product-card {
          flex-direction: row;

          .product-image {
            width: 150px;
            height: 150px;
            flex-shrink: 0;
          }

          .product-info {
            flex: 1;
          }
        }
      }
    }
  }
}

.product-item {
  animation: fadeInUp 0.4s ease-out forwards;
  opacity: 0;

  @for $i from 1 through 20 {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * 0.05}s;
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.list-footer {
  display: flex;
  justify-content: center;
  padding: $spacing-lg 0;
  margin-top: auto;

  .refresh-button {
    box-shadow: $card-shadow;
    transition: transform $transition-duration ease, box-shadow $transition-duration ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: $card-shadow-hover;
    }

    &:active {
      transform: scale(0.95);
    }
  }
}

:host ::ng-deep {
  .error-snackbar {
    background-color: $warn-color;
    color: white;
  }

  .success-snackbar {
    background-color: $success-color;
    color: white;
  }
}

@media (max-width: 768px) {
  .product-list-container {
    padding: $spacing-md;
  }

  .list-header {
    flex-direction: column;
    align-items: flex-start;

    .list-title {
      font-size: 1.5rem;
    }
  }

  .filters-bar {
    flex-direction: column;
    align-items: stretch;

    .search-field {
      max-width: none;
    }

    .filter-group,
    .sort-controls,
    .view-toggle {
      width: 100%;
      justify-content: center;
    }
  }

  .products-grid {
    grid-template-columns: 1fr;

    &.list-view .product-item app-product-card ::ng-deep .product-card {
      flex-direction: column;

      .product-image {
        width: 100%;
        height: 200px;
      }
    }
  }
}

@media (min-width: 1200px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}


// === ARCHIVO: src/config/security.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export interface SecurityConfig {
  cors: {
    allowedOrigins: string[];
    allowedMethods: string[];
    allowedHeaders: string[];
    exposedHeaders: string[];
    credentials: boolean;
    maxAge: number;
  };
  csp: {
    defaultSrc: string[];
    scriptSrc: string[];
    styleSrc: string[];
    imgSrc: string[];
    connectSrc: string[];
    fontSrc: string[];
    objectSrc: string[];
    mediaSrc: string[];
    frameSrc: string[];
  };
  headers: {
    xFrameOptions: 'DENY' | 'SAMEORIGIN' | string;
    xContentTypeOptions: 'nosniff';
    xXssProtection: string;
    strictTransportSecurity: string;
    contentSecurityPolicy: string;
  };
  rateLimit: {
    maxRequests: number;
    windowMs: number;
  };
}

export const SECURITY_CONFIG: SecurityConfig = {
  cors: {
    allowedOrigins: ['http://localhost:4200', 'https://*.cloudfront.net'],
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    exposedHeaders: ['X-Total-Count', 'X-Page-Number', 'X-Page-Size'],
    credentials: true,
    maxAge: 3600
  },
  csp: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'data:', 'https:'],
    connectSrc: ["'self'", 'https://*.amazonaws.com'],
    fontSrc: ["'self'"],
    objectSrc: ["'none'"],
    mediaSrc: ["'self'"],
    frameSrc: ["'none'"]
  },
  headers: {
    xFrameOptions: 'DENY',
    xContentTypeOptions: 'nosniff',
    xXssProtection: '1; mode=block',
    strictTransportSecurity: 'max-age=31536000; includeSubDomains',
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
  },
  rateLimit: {
    maxRequests: 100,
    windowMs: 60000
  }
};

export function provideSecurityConfig() {
  return [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([]),
    provideHttpClient(),
    provideAnimations()
  ];
}

// Stub: el estudiante implementará la lógica de seguridad
// según las fases del reto
// === ARCHIVO: src/assets/data/products-sample.json ===
{
  "products": [
    {
      "id": "prod-001",
      "sku": "LAPTOP-ULT-15",
      "name": "Laptop UltraSlim 15 Pro",
      "description": "Laptop de alta gama con procesador Intel Core i7, 16GB RAM, SSD 512GB, pantalla 15.6\" 4K",
      "category": "electronics",
      "subcategory": "laptops",
      "brand": "TechPro",
      "price": 1299.99,
      "currency": "USD",
      "stock": 45,
      "availability": "in_stock",
      "images": [
        "https://s3.amazonaws.com/ecommerce-products/laptop-1.jpg",
        "https://s3.amazonaws.com/ecommerce-products/laptop-2.jpg"
      ],
      "attributes": {
        "processor": "Intel Core i7-12700H",
        "ram": "16GB DDR5",
        "storage": "512GB NVMe SSD",
        "display": "15.6\" 4K OLED",
        "weight": "1.8kg",
        "battery": "72Wh"
      },
      "tags": ["laptop", "professional", "4k", "oled"],
      "rating": 4.7,
      "reviewCount": 234,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-06-20T14:45:00Z"
    },
    {
      "id": "prod-002",
      "sku": "PHONE-FLG-01",
      "name": "SmartPhone Galaxy X9",
      "description": "Flagship phone con pantalla AMOLED 6.8\", cámara 200MP, batería 5000mAh",
      "category": "electronics",
      "subcategory": "smartphones",
      "brand": "Samsung",
      "price": 999.00,
      "currency": "USD",
      "stock": 120,
      "availability": "in_stock",
      "images": [
        "https://s3.amazonaws.com/ecommerce-products/phone-1.jpg"
      ],
      "attributes": {
        "processor": "Snapdragon 8 Gen 3",
        "ram": "12GB",
        "storage": "256GB",
        "display": "6.8\" AMOLED 120Hz",
        "camera": "200MP + 50MP + 10MP",
        "battery": "5000mAh"
      },
      "tags": ["smartphone", "flagship", "android", "camera"],
      "rating": 4.9,
      "reviewCount": 567,
      "createdAt": "2024-02-10T09:00:00Z",
      "updatedAt": "2024-07-01T11:20:00Z"
    },
    {
      "id": "prod-003",
      "sku": "HEADSET-PRO-01",
      "name": "Auriculares Wireless Pro ANC",
      "description": "Auriculares con cancelación activa de ruido, 30h de batería, audio Hi-Res",
      "category": "electronics",
      "subcategory": "audio",
      "brand": "AudioTech",
      "price": 349.99,
      "currency": "USD",
      "stock": 200,
      "availability": "in_stock",
      "images": [
        "https://s3.amazonaws.com/ecommerce-products/headset-1.jpg",
        "https://s3.amazonaws.com/ecommerce-products/headset-2.jpg"
      ],
      "attributes": {
        "type": "over-ear",
        "connectivity": "Bluetooth 5.3",
        "battery": "30 hours",
        "anc": true,
        "driverSize": "40mm",
        "weight": "250g"
      },
      "tags": ["audio", "wireless", "anc", "bluetooth"],
      "rating": 4.6,
      "reviewCount": 189,
      "createdAt": "2024-03-05T14:20:00Z",
      "updatedAt": "2024-06-15T08:30:00Z"
    },
    {
      "id": "prod-004",
      "sku": "WATCH-SMT-01",
      "name": "SmartWatch Sport Series 8",
      "description": "Reloj inteligente con GPS, monitor de ritmo cardíaco, resistencia al agua 50m",
      "category": "electronics",
      "subcategory": "wearables",
      "brand": "Apple",
      "price": 429.00,
      "currency": "USD",
      "stock": 85,
      "availability": "in_stock",
      "images": [
        "https://s3.amazonaws.com/ecommerce-products/watch-1.jpg"
      ],
      "attributes": {
        "caseSize": "45mm",
        "display": "AMOLED",
        "battery": "18 hours",
        "waterResistance": "50m",
        "gps": true,
        "heartRateMonitor": true
      },
      "tags": ["wearable", "smartwatch", "fitness", "gps"],
      "rating": 4.8,
      "reviewCount": 412,
      "createdAt": "2024-01-20T11:00:00Z",
      "updatedAt": "2024-07-10T16:00:00Z"
    },
    {
      "id": "prod-005",
      "sku": "TABLET-PRO-01",
      "name": "Tablet Pro 12.9\"",
      "description": "Tablet profesional con pantalla Mini-LED, compatible con Apple Pencil, M2 chip",
      "category": "electronics",
      "subcategory": "tablets",
      "brand": "Apple",
      "price": 1099.00,
      "currency": "USD",
      "stock": 60,
      "availability": "in_stock",
      "images": [
        "https://s3.amazonaws.com/ecommerce-products/tablet-1.jpg",
        "https://s3.amazonaws.com/ecommerce-products/tablet-2.jpg"
      ],
      "attributes": {
        "display": "12.9\" Mini-LED",
        "processor": "Apple M2",
        "storage": "256GB",
        "ram": "8GB",
        "camera": "12MP wide",
        "connectivity": "Wi-Fi 6E"
      },
      "tags": ["tablet", "professional", "creative"],
      "rating": 4.7,
      "reviewCount": 156,
      "createdAt": "2024-04-01T08:00:00Z",
      "updatedAt": "2024-06-28T12:15:00Z"
    },
    {
      "id": "prod-006",
      "sku": "DESK-ERG-01",
      "name": "Escritorio Ergonómico Ajustable",
      "description": "Escritorio standing desk con motor dual, altura ajustable 70-120cm, superficie MDF",
      "category": "furniture",
      "subcategory": "desks",
      "brand": "ErgoDesk",
      "price": 599.00,
      "currency": "USD",
      "stock": 25,
      "availability": "in_stock",
      "images": [
        "https://s3.amazonaws.com/ecommerce-products/desk-1.jpg"
      ],
      "attributes": {
        "material": "MDF + Steel",
        "dimensions": "160x80cm",
        "heightRange": "70-120cm",
        "motor": "Dual motor",
        "weightCapacity": "150kg"
      },
      "tags": ["furniture", "ergonomic", "standing-desk"],
      "rating": 4.5,
      "reviewCount": 78,
      "createdAt": "2024-02-28T10:30:00Z",
      "updatedAt": "2024-05-20T09:45:00Z"
    },
    {
      "id": "prod-007",
      "sku": "CHAIR-ERG-01",
      "name": "Silla Ergonómica Premium",
      "description": "Silla de oficina ergonómica con soporte lumbar, reposacabezas, mesh transpirable",
      "category": "furniture",
      "subcategory": "chairs",
      "brand": "ErgoDesk",
      "price": 449.00,
      "currency": "USD",
      "stock": 40,
      "availability": "in_stock",
      "images": [
        "https://s3.amazonaws.com/ecommerce-products/chair-1.jpg"
      ],
      "attributes": {
        "material": "Mesh + Aluminum",
        "armrests": "4D adjustable",
        "lumbarSupport": "Adjustable",
        "headrest": true,
        "maxWeight": "150kg",
        "recline": "135 degrees"
      },
      "tags": ["furniture", "ergonomic", "office-chair"],
      "rating": 4.6,
      "reviewCount": 145,
      "createdAt": "2024-03-10T13:00:00Z",
      "updatedAt": "2024-06-05T10:30:00Z"
    },
    {
      "id": "prod-008",
      "sku": "MONITOR-ULT-01",
      "name": "Monitor UltraWide 34\" Curvo",
      "description": "Monitor curvo ultrawide 34\" UWQHD, 144Hz, IPS, HDR400, USB-C",
      "category": "electronics",
      "subcategory": "monitors",
      "brand": "LG",
      "price": 699.00,
      "currency": "USD",
      "stock": 55,
      "availability": "in_stock",
      "images": [
        "https://s3.amazonaws.com/ecommerce-products/monitor-1.jpg"
      ],
      "attributes": {
        "size": "34\"",
        "resolution": "3440x1440",
        "panel": "IPS",
        "refreshRate": "144Hz",
        "hdr": "HDR400",
        "connectivity": "USB-C, HDMI, DisplayPort"
      },
      "tags": ["monitor", "ultrawide", "gaming", "curved"],
      "rating": 4.8,
      "reviewCount": 267,
      "createdAt": "2024-01-05T09:15:00Z",
      "updatedAt": "2024-07-08T14:20:00Z"
    }
  ],
  "metadata": {
    "totalProducts": 8,
    "categories": ["electronics", "furniture"],
    "lastUpdated": "2024-07-10T16:00:00Z",
    "version": "1.0.0"
  }
}
// === ARCHIVO: README.md ===
# Ecommerce Frontend - Angular 20

Proyecto frontend de comercio electrónico construido con Angular 20, implementando arquitectura de capas con patrones reactivos usando Signals y best practices de arquitectura cloud.

## Requisitos del Sistema

- Node.js 20.x LTS
- npm 10.x
- Angular CLI 20.x

## Instalación

```bash
npm install
```

## Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo en http://localhost:4200 |
| `npm run build` | Compila el proyecto para producción |
| `npm run watch` | Compila en modo desarrollo conwatch |
| `npm test` | Ejecuta los tests unitarios con Vitest |
| `npm run lint` | Ejecuta el linter ESLint |

## Estructura del Proyecto

```
src/
├── app/
│   ├── core/                    # Servicios globales, guards, interceptors
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── models/
│   │   └── services/
│   ├── features/                # Componentes de negocio (contenedores)
│   │   └── ecommerce/
│   │       ├── product-list/
│   │       └── product-detail/
│   ├── shared/                  # Componentes presentacionales reutilizables
│   │   ├── components/
│   │   ├── models/
│   │   └── services/
│   └── app.config.ts           # Configuración global de providers
├── assets/                      # Recursos estáticos
│   ├── data/
│   │   └── products-sample.json
│   └── images/
├── config/
│   └── security.config.ts      # Políticas de seguridad (CORS, CSP, headers)
└── styles.scss                  # Estilos globales
```

## Arquitectura

### Patrón de Capas

El proyecto sigue una arquitectura de capas estándar de Angular con separación estricta de responsabilidades:

1. **Core Layer**: Servicios globales, autenticación, guards, interceptors
2. **Features Layer**: Componentes contenedores que orquestan el flujo de negocio
3. **Shared Layer**: Componentes presentacionales puros y reutilizables

### Estado Reactivo con Signals

Angular Signals se utiliza para el manejo de estado reactivo en componentes, proporcionando:
- Detección de cambios optimizada
- Código más legible y mantenible
- Integración nativa con RxJS

### Integración Cloud

El frontend está diseñado para integrarse con servicios AWS:
- **CloudFront/CDN**: Distribución de assets estáticos
- **S3**: Almacenamiento de imágenes de productos
- **API Gateway + Lambda**: Backend serverless

## Configuración de Seguridad

El archivo `src/config/security.config.ts` centraliza las políticas de seguridad:

- **CORS**: Control de orígenes permitidos
- **CSP**: Content Security Policy
- **Headers**: Headers de protección (X-Frame-Options, HSTS, etc.)
- **Rate Limiting**: Protección contra ataques de fuerza bruta

## Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
API_URL=https://api.ecommerce.example.com
AWS_REGION=us-east-1
S3_BUCKET=ecommerce-products
ENABLE_ANALYTICS=true
```

## Testing

```bash
# Tests unitarios
npm test

# Coverage
npm run test -- --coverage
```

## Build para Producción

```bash
npm run build
```

Los archivos compilados se generan en `dist/ecommerce-frontend/`.

## Decisiones Arquitectónicas

### ¿Por qué Angular Signals?

Angular Signals proporciona un modelo de reactividad más predecible que RxJS para el estado de componentes. Reduce la complejidad de unsubscribe y mejora el rendimiento con detección de cambios granular.

### ¿Por qué standalone components?

Los standalone components eliminan la necesidad de NgModules, reduciendo boilerplate y facilitando lazy loading por rutas.

### ¿Por qué Angular Material?

Proporciona componentes UI accesibles y consistentes que siguen las guías de Material Design, acelerando el desarrollo de interfaces profesionales.

## Contribución

1. Crear branch desde `main`
2. Implementar cambios siguiendo las convenciones del proyecto
3. Ejecutar `npm run lint` y `npm test`
4. Crear Pull Request

## Licencia

MIT License - Voir fichier LICENSE pour plus de détails.

```
