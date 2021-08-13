# Llamada fallida


En caso de presentarse algún error inesperado al momento de hacer la llamada al API, la página brindará un código HTTP diferente a "200 OK”. Además de esto, con el fin fe proveer más detalles del error presentado, en el cuerpo de la respuesta se presentará un JSON, indicando el código específico de error y una descripción textual del mismo.
## No hay ningún cambio en la respuesta que brinda este recurso

```json
{ 
    "code": "40001", 
    "error": "MSISDN invalid o vacio" 
}
```
