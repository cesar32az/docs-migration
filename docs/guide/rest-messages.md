# Mensajes

## Listando los mensajes enviados
****


Este recurso se utiliza para obtener el listado de los mensajes enviados.

### Ejemplo de llamada


#### Llamada en Mensajería Corporativa

> GET /messages

#### Respuesta en Mensajería Corporativa

``` json
[
    {
        "id": 1, 
        "groups": [ "home","VIP" ],
        "message": "Texto",
        "recipients_count": 5, 
        "recipients": [
            "50212345678",
            "50212345677",
            "50212345676",
            "50212345675",
            "50212345674"
        ]
    }, ...
]

```

#### Llamada en Enterprise Communicator

> GET /messages

#### Respuesta en Enterprise Communicator

``` json
[
    {
        id: 1, 
    },...
]

```





## Enviando mensajes individuales
****

::: warning ATENCIÓN
En la solicitud, ya no se puede usar la llave `detail`, el API-REST no lo reconoce como parte de las propiedades, si se usa `detail` producirá un error.
:::

### Ejemplo de llamada


#### Llamada en Mensajería Corporativa

> POST /messages/send_to_contact

``` json
{
    "msisdn": 50212345678, 
    "message": "Este es un mensaje de prueba", 
    "id": 12345, 
    "detail": 1
}
```

#### Respuesta en Mensajería Corporativa

```json{2}
{
"message_id":109212,
"id":12345,
"short_code":"50210000290",
"msisdn":"50212345678",
"direction":"MT",
"status":"SENT",
"message":"mensaje de prueba",
"total_recipients":1,
"sent_from":"API_HTTP",
"sent_count":1,
"error_count":0,
"total_monitors":0,
"is_scheduled": false,
"is_billable": true,
"created_by":"usuario@dominio.com",
"created_on":"2014­08­06 21:56:41",
"type":1
}
```


#### Llamada en Enterprise Communicator


> POST /messages/send_to_contact

``` json
{
   "msisdn": 50235148163,
   "message": "este es un mensaje de prueba",
   "id": 12345
}
```

#### Respuesta en Enterprise Communicator

```json{2}
{ 
    "message_id": "60eb82fe4caac830e3af82b6",
    "short_code": "0050230000215",
    "type": 1,
    "direction": "MT",
    "status": "SENT",
    "sent_from": "API_REST",
    "id": "12345",
    "message": "mensaje de prueba",
    "sent_count": 1,
    "error_count": 0,
    "total_recipients": 1,
    "msisdn": "50235148163",
    "country": "502",
    "is_billable": true,
    "is_scheduled": false,
    "created_on": "2021-07-11 17:47:10",
    "created_by": "API",
    "total_monitors": 0 
}
```




## Enviando mensajes a etiquetas
****

::: warning ATECIÓN
En la solicitud, la llave `groups`, ahora es cambiada a `tags`, en caso contrario ocacionará error.
:::
### Ejemplo de llamada

#### Llamada en Mensajería Corporativa

> POST /messages/send

``` json
{
    "groups": ["sales", "tech"],
    "message": "This is a test message",
    "id": 1234
}
```

#### Respuesta en Mensajería Corporativa



#### Llamada en Enterprise Communicator


> POST /messages/send

``` json{2}
{
   "tags": ["home", "VIP"],
   "message": "This is a test message",
   "id": 1
}
```
#### Respuesta en Enterprise Communicator

```json
{
   "message_id": "60eb82fe4caac830e3af82b6",
   "short_code": "0050230000215",
   "type": 1,
   "direction": "MT",
   "status": "READY",
   "sent_from": "API_REST",
   "id": "12345",
   "message": "este es un mensaje de prueba",
   "sent_count": 0,
   "error_count": 0,
   "total_recipients": 1,
   "msisdn": "50235148163",
   "country": "502",
   "is_billable": true,
   "is_scheduled": false,
   "created_on": "2021-07-11 17:47:10",
   "created_by": "API",
   "total_monitors": 0
}
```


::: warning ATENCIÓN
La propiedad "groups" es cambiada a "tags"
:::
