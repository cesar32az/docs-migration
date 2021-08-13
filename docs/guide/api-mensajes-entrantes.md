# Mensajes entrantes

::: warning ATENCIÓN
Ahora el json de los mensajes entrantes, la propiedad `message_id` cambió a tipo texto (antes era de tipo numérico)
:::

#### v3

```json
{
   "datetime":"2021-07-12 00:00:11",
   "message":"texto prueba",
   "message_id":460808216,
   "msisdn":"50235148164",
   "short_number":"50210001234",
   "type":"INBOX",
   "status":"FORWARDED"
}
```

#### v4

```json
{
   "datetime": "2021-07-12 00:00:11",
   "message": "texto prueba",
   "message_id": "60eb82fe4caac830e3af82b6",
   "msisdn": "50235148164",
   "short_number": "50210001234",
   "type": "INBOX",
   "status": "FORWARDED"
}
```