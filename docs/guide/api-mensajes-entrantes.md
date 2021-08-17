# Mensajes entrantes

<!-- ::: warning ATENCIÓN
Ahora el json de los mensajes entrantes, la propiedad `message_id` cambió a tipo texto (antes era de tipo numérico)
::: -->

#### v3

```json
{
   "datetime":"2021-08-16 22:34:46",
   "message":"texto prueba",
   "message_id":460808216,
   "msisdn":"50212345678",
   "short_number":"50287654321",
   "type":"INBOX",
   "status":"FORWARDED"
}
```

#### v4

```json
{
  "datetime": "2021-08-12 23:46:42",
  "message": "Test message",
  "msisdn": "50487654321",
  "short_number": "50412345678",
  "type": "INBOX",
  "status": "FORWARDED"
}
```

::: warning ATENCIÓN
La propiedad `message_id` ya no está presente en la v4
:::