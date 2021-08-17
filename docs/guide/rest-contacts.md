# Contactos

## Obteniendo una lista de contactos
****

::: warning ATENCIÓN
En la respuesta existen ahora los campos `tags` y `profile_uid`, estos no afectarán el funcionamiento si no se toman en cuenta.
:::

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
        "msisdn": "50235200846",
        "phone_number": "35200846",
        "country_code": "502",
        "first_name": "Rocael",
        "last_name": "Guzman",
        "full_name": "Rocael Guzman",
        "status": "SUSCRIBED",
        "added_from": "WEB_FORM",
        "tags": [ "Home" ],
        "profile_uid": "60e7d5a834224d067d9795d0",
        "monitoring": false 
    }
    ...
]
```


## Obteniendo La Información de un contacto específico
****


Este recurso se utiliza para poder obtener un contacto ingresando como parámetro de entrada el valor de número telefónico: MSISDN. 


::: danger ADVERTENCIA
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


Este recurso se utiliza para crear un nuevo contacto.

### Ejemplo de llamada

#### Llamada en v3

> POST /contacts/50212345678

``` json
{ 
    "msisdn": "50212345678", 
    "first_name": "Jose", 
    "last_name": "Gomez"
}
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


Este recurso se utiliza para actualizar un contacto.

### Ejemplo de llamada

#### Llamada en v3

> PUT /contacts/50212345678

``` json
{ 
    "first_name": "Jose", 
    "last_name": "Gomez" 
}
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

