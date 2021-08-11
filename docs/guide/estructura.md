# Estructura y Propiedades

## Objeto Grupo ➜ Etiquetas


### Propiedades de Grupo v3


| Propiedad   | Tipo   |           |
| ----------- | ------ | --------- |
| short_name  | texto  | deprecada |
| name        | texto  |
| description | texto  | deprecada |
| members     | objeto | deprecada |




### Propiedades de Etiqueta v4


| Propiedad | Tipo     | Descripción                       |
| --------- | -------- | --------------------------------- |
| name      | texto    | Nombre de la etiqueta             |
| count     | numérico | Total de contactos en la etiqueta |


### Ejemplos del JSON



#### Json de Grupo v3


```json
{
"short_name": "vip",
"name": "VIP",
"description": "vip group",
"members":
        {
        "total": 5,
        "pending": 1,
        "confirmed": 4,
        "cancelled": 3
        }
}
```



#### Json de Etiqueta v4


```json
{ 
    "name": "VIP", 
    "count": 1 
}
```


## Objeto Contactos



### Propiedades de Contactos v3


| Propiedad    | Tipo  |
| ------------ | ----- |
| msisdn       | texto |
| phone_number | texto |
| first_name   | texto |
| last_name    | texto |
| full_name    | texto |
| country_code | texto |
| added_from   | texto |
| status       | texto |





### Propiedades de Contactos v4


| Propiedad    | Tipo         | Descripción                                                                                 |
| ------------ | ------------ | ------------------------------------------------------------------------------------------- |
| msisdn       | texto        | Código Internacional de País + Número de Teléfono (country code + phone number)             |
| phone_number | texto        | Número de Teléfono                                                                          |
| first_name   | texto        | Primer Nombre del Contacto                                                                  |
| last_name    | texto        | Apellido del Contacto                                                                       |
| full_name    | texto        | Combinación de Primer Nombre y Apellido del Contacto                                        |
| country_code | texto        | Código Internacional de País                                                                |
| added_from   | texto        | Origen del contacto. Posibles valores: WEB_FORM, API, FILE_UPLOAD,SMS, SUBSCRIPTION_REQUEST |
| status       | texto        | Posibles valores: SUBSCRIBED, INVITED, CONFIRMED, CANCELLED                                 |
| tags         | array(texto) | Array con los nombres de las etiquetas                                                      |
| monitoring   | boolean      | true: el contacto es monitor, false: el contacto no es monitor                              |
### Ejemplos del JSON



#### Json de Contacto v3


```json
{
     "msisdn": "50212345678",
     "phone_number": "Jose",
     "country_code": ‘502’,
     "first_name": "Jose",
     "last_name": "Gomez",
     "last_name": "Jose Gomez",
     "added_from": "WEB_FORM",
     "status": "SUBSCRIBED"
}
```



#### Json de Contacto v4


```json
{
   "msisdn": "50235200846",
   "phone_number": "35200846",
   "country_code": "502",
   "first_name": "Rocael",
   "last_name": "Guzman",
   "full_name": "Rocael Guzman",
   "added_from": "WEB_FORM",
   "status": "SUSCRIBED",
   "tags": [ "VIP" ],
   "profile_uid": "60e7d5a834224d067d9795d0",
   "monitoring": false 
}
```

::: tip
Se agregó la propiedad tags, donde se listan las etiquetas agregadas al contacto
:::



## Objeto Mensajes



### Propiedades de Mensajes v3


| Propiedad        | Tipo     |
| ---------------- | -------- |
| message_id       | numérico |
| id               | texto    |
| short_code       | texto    |
| country          | texto    |
| msisdn           | texto    |
| groups           | vector   |
| direction        | texto    |
| status           | texto    |
| message          | texto    |
| total_recipients | numérico |
| sent_from        | vector   |
| sent_count       | numérico |
| error_count      | numérico |
| total_monitors   | numérico |
| is_scheduled     | boolean  |
| is_billable      | boolean  |
| created_on       | Fecha    |
| created_bt       | texto    |
| type             | numérico |





### Propiedades de Mensajes v4


| Propiedad        | Tipo     |
| ---------------- | -------- |
| message_id       | numérico |
| id               | texto    |
| short_code       | texto    |
| country          | texto    |
| msisdn           | numérico |
| tags             | vector   |
| direction        | texto    |
| status           | texto    |
| message          | texto    |
| total_recipients | numérico |
| sent_from        | vector   |
| sent_count       | numérico |
| error_count      | numérico |
| total_monitors   | numérico |
| is_scheduled     | boolean  |
| is_billable      | boolean  |
| created_on       | Fecha    |
| created_bt       | texto    |
| type             | numérico |


::: warning ATENCIÓN
La propiedad msisdn cambió a numérico.
:::

### Ejemplos del JSON



#### Json de Mensajes v3


```json
{
"message_id":109212,
"id":1234,
"short_code":"50210000290",
"groups":[
"sales",
"tech"
],
"direction":"MT",
"status":"SENT",
"message":"demo: This is a test message",
"total_recipients":21,
"sent_from":"API_HTTP",
"sent_count":24,
"error_count":0,
"total_monitors":3,
"is_scheduled":false,
"is_billable":true,
"created_by":"usuario@dominio.com",
"created_on":"2014­08 ­06 21:56:41",
"type":2
}
```



#### Json de Mensajes v4


```json
{ 
   "message_id": "60eb80fa110ff06b4d9ec8e2",
   "short_code": "0050230000215",
   "type": 1,
   "direction": "MT",
   "status": "READY",
   "sent_from": "API_REST",
   "message": "messageTest",
   "sent_count": 0,
   "error_count": 0,
   "total_recipients": 1,
   "msisdn": 50235148164,
   "country": 502,
   "is_billable": true,
   "is_scheduled": false,
   "created_on": "2021-07-11 17:38:34",
   "created_by": "API",
   "total_monitors": 0 
}
```

::: tip
Se quitó la propiedad groups
:::