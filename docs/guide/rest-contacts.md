# Contactos

## Obteniendo una lista de contactos
****
Este recurso se utiliza para obtener la lista de contactos existentes. La consulta puede ser filtrada por nombres o estados. Si se desea buscar contactos por grupos por favor consulta la sección

> GET /contacts


### Ejemplo de llamada

#### Llamada en v3

> GET /contacts

#### Respuesta en v3

``` json
[
    {
        "msisdn": "50212345678",
        "first_name": "Jose",
        "last_name": "Gomez",
        "status": "SUSCRIBED"
    }
]
```

#### Llamada en v4

> GET /contacts

#### Respuesta en v4

``` json
[
    {
        "msisdn":"50212345678",
        "first_name":"Jose",
        "last_name":"Gomez",
        "status": "SUBSCRIBED"
    }
]
```


## Obteniendo La Información de un contacto específico
****

> GET /contacts/:msisdn

Este recurso se utiliza para poder obtener un contacto ingresando como parámetro de entrada el valor de número telefónico: MSISDN. 


::: danger
El número de teléfono deberá de incluir el código internacional de país.
:::


### Ejemplo de llamada


#### Llamada en v3

> GET /contacts/50212345678

#### Respuesta en v3

``` json
{
    "msisdn": "50212345678",
    "first_name": "Jose",
    "last_name": "Gomez",
    "status": "CONFIRMED"
}
```

#### Llamada en v4

> GET /contacts/50212345678

#### Respuesta en v4

``` json
{
   "msisdn": "50235148164",
   "phone_number": "35148164",
   "country_code": "502",
   "first_name": "Jose",
   "last_name": "Xuya",
   "full_name": "Jose Xuya",
   "status": "SUSCRIBED",
   "added_from": "API",
   "tags": [],
   "profile_uid": "60eb4ec901347f06638b8b6a",
   "monitoring": false
}
```



## Creando Un Nuevo Contacto
****

> POST /contacts/:msisdn

Este recurso se utiliza para crear un nuevo contacto.

### Ejemplo de llamada

#### Llamada en v3

> POST /contacts/50212345678

``` json
{ "msisdn": "50212345678", "first_name": "Jose", "last_name":"Gomez"}
```

#### Respuesta en v3

Se devolverá un código que indicará si la creación fue exitosa o bien si ocurrió un error al efectuar la operación. Por favor consultar la [Tabla de códigos](https://notificame.claro.com.gt/api/docs/index.php/codigos-de-retorno/) de respuesta de la plataforma.

#### Llamada en v4

> POST /contacts/50235148164

``` json
{
   "country_code": "502",
   "first_name": "Jose",
   "last_name": "Gomez",
   "msisdn": "50235148164"
}
```
#### Respuesta en v4

``` json
{
   "msisdn": "50235148164",
   "phone_number": "35148164",
   "country_code": "502",
   "first_name": "Jose",
   "last_name": "Gomez",
   "full_name": "Jose Gomez",
   "status": "SUSCRIBED",
   "added_from": "API",
   "tags": [],
   "profile_uid": "60eb4ec901347f06638b8b6a",
   "monitoring": false 
}
```


## Actualizando Un Contacto
****

> PUT /contacts/:msisdn

Este recurso se utiliza para actualizar un contacto.

### Ejemplo de llamada

#### Llamada en v3

> PUT /contacts/50212345678

``` json
{ "first_name": "Jose", "last_name": "Gomez" }
```

#### Respuesta en v3

Se devolverá un código que indicará si la actualización fue exitosa o bien si ocurrió un error al efectuar la operación. Por favor consultar la [Tabla de códigos](https://notificame.claro.com.gt/api/docs/index.php/codigos-de-retorno/) de respuesta de la plataforma.

#### Llamada en v4

> PUT /contacts/50235148164

``` json
{
   "first_name": "Jose",
   "last_name": "Gomez",
}
```
#### Respuesta en v4

``` json
{
   "msisdn": "50235148164",
   "phone_number": "35148164",
   "country_code": "502",
   "first_name": "Jose",
   "last_name": "Xuya",
   "full_name": "Jose Xuya",
   "status": "SUSCRIBED",
   "added_from": "API",
   "tags": [],
   "profile_uid": "60eb4ec901347f06638b8b6a",
   "monitoring": false 
}
```

## Eliminando Un Contacto Existente
****

> DELETE /contacts/:msisdn

Este recurso se utiliza para eliminar un contacto existente.

### Ejemplo de llamada

#### Llamada en v3

> DELETE /contacts/50212345678

#### Respuesta en v3

Se devolverá un código que indicará si la eliminación fue exitosa o bien si ocurrió un error al efectuar la operación. Por favor consultar la [Tabla de códigos](https://notificame.claro.com.gt/api/docs/index.php/codigos-de-retorno/) de respuesta de la plataforma.

#### Llamada en v4

> DELETE /contacts/50212345678

#### Respuesta en v4

Se devolverá un código que indicará si la eliminación fue exitosa o bien si ocurrió un error al ejecutar la operación. Por favor consultar la [Tabla de códigos](https://docs.reach.tools/manual/tabla-codigos-de-respuesta/#page-content) de respuesta de la plataforma.

