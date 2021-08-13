# Mensajes


## Messages.GetList
#### No presenta ningún cambio en la llamada a esta función


<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<List<ResponseObjects.MessageResponse>> response =
                sdk.Messages.GetList(startDate, endDate, 0, 50, null);
```

  </CodeGroupItem>

  <CodeGroupItem title="PHP">

```php
$response = $api->messages()->getMessages("2015-03-01", "2015-03-10");
```

  </CodeGroupItem>
</CodeGroup>

## Messages.SendToContact
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<ResponseObjects.MessageResponse> response =
                sdk.Messages.SendToContact(msisdn, message, id);
```

  </CodeGroupItem>

  <CodeGroupItem title="PHP">

```php
$response = $api->messages()->sendToContact("50212345678", "Sent from PHP SDK", "123");
```

  </CodeGroupItem>
</CodeGroup>

## Messages.SendToGroups
Únicamente se debe tomar en cuenta que ahora estaremos enviando a tags y no a grupos

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<ResponseObjects.MessageResponse> response =
                sdk.Messages.SendToGroups(names, message, id);
```

  </CodeGroupItem>

  <CodeGroupItem title="PHP">

```php
# En php, la función cambió a sendToTag
$response = $api->messages()->sendToTag(array("test"), "Test message to tag", "12434");
```

  </CodeGroupItem>
</CodeGroup>
