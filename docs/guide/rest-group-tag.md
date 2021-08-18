# Grupos ➜ Etiquetas

## Consideraciones
- Los grupos fueron simplificados y ahora son llamados etiquetas
- No hay método para crear etiqueta vacia, ahora al contacto existente se le asigna una etiqueta
- No hay método para editar una etiqueta
- Se prescindieron de las siguientes propiedades:
  - short_name
  - description
  - members
  

## Listando las etiquetas
****


::: warning ATENCIÓN
La respuesta ahora trae unicamente las propiedades name y count, si se esperan otros campos podría haber incovenientes cada vez que se listen las etiquetas.
:::

### Ejemplo de llamada

#### Llamada en Mensajería Corporativa

> GET /groups

#### Respuesta en Mensajería Corporativa

``` json
[
  {
      "short_name":"sales", 
      "name": "Sales", 
      "description": "Sales group",
      "members": {"total":5, "pending":1, "confirmed":4}
  }, ...
]
```


#### Llamada en Enterprise Communicator

> GET /tags

::: tip 
Opcional se puede enviar un parámetro search para personalizar la búsqueda. 

> GET /tags?search=Sport
:::

#### Respuesta en Enterprise Communicator

``` json
[ 
   { "name": "Sports", "count": 2 },
   { "name": "vip", "count": 5 },
]
```






## Agregar etiqueta a contacto
****

Este recurso se utiliza para agregar una etiqueta a un contacto, la etiqueta no debe contener espacios ni caractéres especiales.

### Ejemplo de llamada

#### Llamada en Mensajería Corporativa

> POST /groups/:short_name/contacts/:msisdn


#### Respuesta en Mensajería Corporativa

Se devolverá un código que indicará si la adición del contacto fue exitosa o si ocurrió un error al ejecutar la operación. Por favor consultar la tabla de códigos de respuesta de la plataforma.


#### Llamada en Enterprise Communicator

> POST /contacts/50235148164/tag/newTag

#### Respuesta en Enterprise Communicator

Se devolverá un JSON conteniendo el objeto de tipo `Contact`

``` json
{
   "msisdn": "50235148164",
   "phone_number": "35148164",
   "country_code": "502",
   "first_name": "Josefino",
   "last_name": "Gomez",
   "full_name": "Josefino Gomez",
   "status": "SUSCRIBED",
   "added_from": "API",
   "tags": [ "Work", "Sports", "newTag" ],
   "profile_uid": "60eb787f96f7540689656be4",
   "monitoring": false
}
```










## Listando los contactos que pertenecen a una etiqueta
****

Este recurso se utiliza para obtener la lista de contactos pertenecientes a un grupo detallado por el valor `:TAG_NAME`

### Ejemplo de llamada


#### Llamada en Mensajería Corporativa

> GET /groups/sales/contacts

#### Respuesta en Mensajería Corporativa

``` json
[
 { 
   "msisdn": "50235148163",
   "phone_number": "35148163",
   "country_code": "502",
   "first_name": "Rony",
   "last_name": "Velasquez",
   "full_name": "Rony Velasquez",
   "status": "SUSCRIBED",
   "added_from": "WEB_FORM",
   "groups": ["vip", "someTag"],
   "profile_uid": "6058c1f18bf1280651396444",
   "monitoring": false
 },
 ...
]
```

#### Llamada en Enterprise Communicator

> GET /tags/vip/contacts

::: tip
Adicional puedes agregar parámetros para personalizar la salida
> GET /tags/vip/contacts?limit=1&start=0
:::

#### Respuesta en Enterprise Communicator 

``` json{11}
[
  { 
    "msisdn": "50235148163",
    "phone_number": "35148163",
    "country_code": "502",
    "first_name": "Rony",
    "last_name": "Velasquez",
    "full_name": "Rony Velasquez",
    "status": "SUSCRIBED",
    "added_from": "WEB_FORM",
    "tags": ["vip", "someTag"],
    "profile_uid": "6058c1f18bf1280651396444",
    "monitoring": false
  }, 
  ...
]
```




## Obteniendo las etiquetas a los que pertenece un Contacto
****

Este recurso se utiliza para identificar las etiquetas a los que el contacto específico pertenece.

### Ejemplo de llamada

#### Llamada en Mensajería Corporativa

> GET /contacts/50212345678/groups

#### Respuesta en Mensajería Corporativa

``` json
[
  {
    "short_name": "sales", 
    "name": "Sales", 
    "description": "Sales group",
    "members": { "total": 5, "pending": 1, "confirmed": 4 }
  },
  ...
]
```


#### Llamada en Enterprise Communicator

> GET /contacts/50235148164/tags

#### Respuesta en Enterprise Communicator

``` json
[ 
   { "name": "Work", "count": 1 }, 
   { "name": "Sports", "count": 4 },
   ...
] 
```




## Eliminando Etiquetas
****

Este recurso se utiliza para eliminar una etiqueta existente detallado por el valor `:TAG_NAME`

### Ejemplo de llamada


#### Llamada en Mensajería Corporativa

> DELETE /groups/vip

#### Respuesta en Mensajería Corporativa
Se devolverá un código que indicará si la eliminación fue exitosa o si ocurrió un error al ejecutar la operación. Por favor consultar la tabla de códigos de respuesta de la plataforma.


#### Llamada en Enterprise Communicator

> DELETE /tags/vip

#### Respuesta en Enterprise Communicator

Se devolverá un código que indicará si la eliminación fue exitosa o si ocurrió un error al ejecutar la operación. Por favor consultar la tabla de códigos de respuesta de la plataforma.