# Mensajes

## Listando los mensajes enviados
****

> GET /messages

Este recurso se utiliza para obtener el listado de los mensajes enviados.

### Ejemplo de llamada


#### Llamada en v3

> GET /messages

#### Respuesta en v3

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

#### Llamada en v4

> GET /messages

#### Respuesta en v4

``` json
[
    {
        id: 1, 
    },...
]

```





## Enviando mensajes individuales
****

> POST /messages/send_to_contact

Este recurso se utiliza para enviar mensajes individuales a un contacto.

### Ejemplo de llamada


#### Llamada en v3

> POST /messages/send_to_contact

#### Respuesta en v3

``` json
{
    "msisdn": 50212345678, 
    "message": "Este es un mensaje de prueba", 
    "id": 12345, 
    "detail": 1
}
```



#### Llamada en v4


> POST /messages/send_to_contact

#### Respuesta en v4

``` json
{
   "msisdn": 50235148163,
   "message": "este es un mensaje de prueba",
   "id": 12345
}
```





## Enviando mensajes a etiquetas
****

> POST /messages/send

Este recurso se utiliza para enviar mensajes a los contactos de una o varias etiquetas.

### Ejemplo de llamada



#### Llamada en v3

> POST /messages/send

#### Respuesta en v3

``` json
{
    "groups": ["sales", "tech"],
    "message": "This is a test message",
    "id": 1234
}
```


#### Llamada en v4


> POST /messages/send

#### Respuesta en v4

``` json{2}
{
   "tags": ["home", "VIP"],
   "message": "This is a test message",
   "id": 1
}
```

::: warning ATENCIÓN
La propiedad "groups" es cambiada a "tags"
:::
