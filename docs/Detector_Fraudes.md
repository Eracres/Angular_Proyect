# Detector de Fraude

## 1- Preparar los Datos JSON:

Coloca el archivo JSON con la información oficial de la Agencia Tributaria en la carpeta src/assets/json.
Asegúrate de que el formato del JSON sea adecuado para su procesamiento. Debería ser un arreglo de objetos, cada objeto representando una fila de datos.

## 2 - Crear Modelos:

En la carpeta src/app/models, crea un modelo TypeScript (contribuyente.model.ts) que represente la estructura de los datos:

```
export interface Contribuyente {
  nombre: string;
  apellido: string;
  promotor: string;
  entidadFinanciera: string;
  cantidadTotal: number;
  aportacionesMensuales: number;
}
```
