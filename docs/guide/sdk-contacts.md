# Contactos

::: tip 
Al objeto Contacto se le agregó la propiedad tags
:::

## Contacts.GetList
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<List<ResponseObjects.ContactJson>> response =
        sdk.Contacts.GetList(null, null, 0, 100);
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$response = $api->contacts()->getContacts(null,10,0,'SUSCRIBED');
```
  </CodeGroupItem>
</CodeGroup>

## Contacts.GetByMsisdn
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<ResponseObjects.ContactJson> response = 
        sdk.Contacts.GetByMsisdn(msisdn);
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$response = $api->contacts()->getContacts($msisdn,10,0,'SUSCRIBED');

```
  </CodeGroupItem>
</CodeGroup>

## Contacts.Update
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<ResponseObjects.ContactJson> response =
        sdk.Contacts.Update("502", msisdn, firstname, lastname);
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$response = $api->contacts()->updateContact("50212345678","12345678","502","Alberto");
```
  </CodeGroupItem>
</CodeGroup>

## Contacts.Add
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<ResponseObjects.ContactJson> response =
        sdk.Contacts.Add("502", msisdn, firstname, lastname);
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$response = $api->contacts()->createContact("59824","502",'prueba', $firstName, $lastName);
```
  </CodeGroupItem>
</CodeGroup>

## Contacts.Delete
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<ResponseObjects.ContactJson> response = 
        sdk.Contacts.Delete(msisdn);
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$response = $api->contacts()->deleteContact("50253919824");
```
  </CodeGroupItem>
</CodeGroup>

## Contacts.GetGroupList
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<List<ResponseObjects.GroupResponse>> response =
        sdk.Contacts.GetGroupList(msisdn);
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$response = $api->contacts()->getContactGroups("50212345678");
```
  </CodeGroupItem>
</CodeGroup>