# Grupos -> Etiquetas

::: warning ATENCIÓN
En cualquier respuesta de tipo GroupResponse
- prescindir de la propiedad shortName
- prescindir de la propiedad description
:::

## Groups.GetList
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<List<ResponseObjects.GroupResponse>> response = 
        sdk.Groups.GetList();
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$tags = $api->tags()->getTags();
```
  </CodeGroupItem>
</CodeGroup>


## Groups.Get
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<ResponseObjects.GroupResponse> response = 
        sdk.Groups.Get(name);
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$tag = $api->tags()->getByShortName("test");
```
  </CodeGroupItem>
</CodeGroup>

## Groups.Delete
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<ResponseObjects.ActionMessageResponse> response = 
        sdk.Groups.Delete(name);
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$response = $api->tags()->deleteTag("newTag");
```
  </CodeGroupItem>
</CodeGroup>

## Groups.GetContactList
#### No presenta ningún cambio en la llamada a esta función

<CodeGroup>
  <CodeGroupItem title=".NET" active>

``` cs
ResponseObjects.ApiResponse<List<ResponseObjects.ContactJson>> response = 
        sdk.Groups.GetContactList(name);
```
  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$response = $api->tags()->getTagContacts("tag");
```
  </CodeGroupItem>
</CodeGroup>




## Funciones deprecadas de clase Groups

- Groups.AddContact
- Groups.RemoveContact
- Groups.Add




::: tip Recomendación
Preferible renombrar las variales de shortName a simplemente name
:::

