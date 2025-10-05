# Neiva Sostenible

## Prototipo de Crecimiento Urbano Sostenible con Datos NASA

Este prototipo demuestra cómo los datos de observación de la Tierra de la NASA pueden guiar estrategias de crecimiento urbano sostenible en Neiva, Colombia, equilibrando el bienestar humano con la preservación ambiental.

## Características Principales

- **Visualización Geoespacial**: Mapas interactivos con datos de temperatura superficial, índice de vegetación y calidad del aire.
- **Análisis de Problemas Urbanos**: Identificación de islas de calor, pérdida de vegetación y contaminación atmosférica.
- **Propuestas de Intervención**: Soluciones basadas en evidencia para abordar los desafíos urbanos identificados.
- **Métricas de Impacto**: Indicadores cuantificables para medir el éxito de las intervenciones propuestas.
- **Plan de Implementación**: Estrategia detallada con actores clave y participación ciudadana.

## Fuentes de Datos NASA

- **Landsat 8/9 (Collection 2, Level-2)**: Imágenes multiespectrales para NDVI y temperatura superficial (LST) de alta resolución.
- **MODIS (MOD11A2, MYD11A2)**: Temperatura superficial 8-días a escala regional para series temporales.
- **Sentinel-5P TROPOMI**: Columnas troposféricas de NO2 como proxy de contaminación; PM2.5 puede integrarse desde modelos reanálisis (p. ej., CAMS) o derivados estadísticos.

## Recopilación de Datos para Neiva

- Coordenadas de referencia: centro de Neiva ≈ `lat 2.936`, `lon -75.289`.
- Opciones de obtención:
  - Google Earth Engine: scripts para extraer NDVI (Landsat) y LST (MODIS) filtrando por `geometry` alrededor de Neiva.
  - LP DAAC/USGS EarthExplorer: descarga por área AOI y fechas; requiere cuenta Earthdata.
  - Copernicus Open Access Hub: descarga de Sentinel-5P NO2 y otros productos atmosféricos.
- Pasos sugeridos:
  1) Definir el AOI (polígono de Neiva) y rango de fechas.
  2) Extraer métricas agregadas por barrios/comunas (promedios, percentiles) y exportar a GeoJSON.
  3) Integrar los resultados en `/src/data` manteniendo las claves `temperature`, `ndvi`, `pm25` por año.

Notas: Este prototipo usa datos demostrativos. Para operación real, automatice la ingesta con GEE o pipelines que exporten GeoJSON actualizado periódicamente.

## Áreas Temáticas

1. **Espacios Verdes e Islas de Calor Urbanas**: Análisis de temperatura superficial y cobertura vegetal.
2. **Calidad del Aire**: Monitoreo de contaminantes atmosféricos y su relación con la salud pública.
3. **Uso del Suelo Sostenible**: Análisis de expansión urbana y pérdida de ecosistemas.

## Instalación y Uso

1. Clonar este repositorio
2. Instalar dependencias: `npm install`
3. Iniciar la aplicación: `npm start`
4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Tecnologías Utilizadas

- React.js para la interfaz de usuario
- Leaflet para visualización de mapas
- Chart.js para gráficos y visualización de datos
- Material-UI para componentes de interfaz

## Estructura del Proyecto

- `/src`: Código fuente de la aplicación
  - `/components`: Componentes reutilizables
  - `/pages`: Páginas principales de la aplicación
  - `/data`: Datos simulados para el prototipo

## Próximos Pasos

- Integración con APIs de datos en tiempo real de la NASA
- Implementación de análisis predictivo para escenarios futuros
- Desarrollo de herramientas de participación ciudadana
- Expansión a otras ciudades con desafíos similares

---

Este proyecto fue desarrollado como prototipo para demostrar el potencial de los datos de observación terrestre en la planificación urbana sostenible.