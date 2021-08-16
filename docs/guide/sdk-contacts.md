# Contactos

::: tip 
Al objeto Contacto se le agregó la propiedad tags
:::

Ahora se cuenta con nuevos métodos para agregar y eliminar las etiquetas de los contactos
- [Contacts.addTag](#contacts-addtag)
- [Contacts.deleteTag](#contacts-removetag)

Al usar estas funciones, únicamente se debe tomar en cuenta los parámetros de msisdn que pertenece al contacto al cual se le agregará o removerá la etiqueta y el nombre de la etiqueta

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
<CodeGroupItem title="Java">

```java
ApiResponse<List<ContactJsonObject>> response =
      contactsApi.getList(null, null, 0, 1, false);
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
$response = $api->contacts()->getContacts($msisdn);

```
  </CodeGroupItem>
<CodeGroupItem title="Java">

```java
ApiResponse<ContactJsonObject> response =
      contactsApi.getByMsisdn(msisdn);
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
<CodeGroupItem title="Java">

```java
contactsApi.update(
    testContactCountryCode,
    testContactMsisdn,
    testContactLastName,
    testContactFirstName
);
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
<CodeGroupItem title="Java">

```java
ApiResponse<ContactJsonObject> response = contactsApi.add(
      testContactCountryCode,
      testContactMsisdn,
      testContactFirstName,
      testContactLastName
);
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
<CodeGroupItem title="Java">

```java
contactsApi.delete(testContactMsisdn);
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
<CodeGroupItem title="Java">

```java
ApiResponse<List<TagJsonObject>> tags = contactsApi.getTagList(testContactMsisdn);
```
</CodeGroupItem>
</CodeGroup>

## Contacts.addTag


<CodeGroup>

<CodeGroupItem title=".NET" active>

```cs
ResponseObjects.ApiResponse<ResponseObjects.ContactJson> response = 
      sdk.Contacts.AddTag(msisdn, tagName);
```
</CodeGroupItem>
<CodeGroupItem title="PHP">

```php
$response = $api->contacts()->addTagToContact('50212345678', "tagTest");
```
</CodeGroupItem>
<CodeGroupItem title="Java">

```java
ApiResponse<ContactJsonObject> addResponse = 
      contactsApi.addTag(testContactMsisdn, testTagName);
```
</CodeGroupItem>
</CodeGroup>


## Contacts.removeTag



<CodeGroup>

<CodeGroupItem title=".NET" active>

```cs
ResponseObjects.ApiResponse<ResponseObjects.ContactJson> response = 
      sdk.Contacts.RemoveTag(msisdn, tagName);

```
</CodeGroupItem>
<CodeGroupItem title="PHP">

```php
$response = $api->contacts()->removeTagToContact('50230593400', "test");
```
</CodeGroupItem>
<CodeGroupItem title="Java">

```java
ApiResponse<ContactJsonObject> addResponse = 
      contactsApi.removeTag(testContactMsisdn, testTagName);
```
</CodeGroupItem>
</CodeGroup>