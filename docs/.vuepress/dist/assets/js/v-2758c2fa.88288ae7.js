"use strict";(self.webpackChunkmigration_docs=self.webpackChunkmigration_docs||[]).push([[368],{4556:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-2758c2fa",path:"/guide/contacts.html",title:"Contactos",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Obteniendo una lista de contactos",slug:"obteniendo-una-lista-de-contactos",children:[{level:3,title:"Ejemplo de llamada",slug:"ejemplo-de-llamada",children:[]}]},{level:2,title:"Obteniendo La Información de un contacto específico",slug:"obteniendo-la-informacion-de-un-contacto-especifico",children:[{level:3,title:"Ejemplo de llamada",slug:"ejemplo-de-llamada-1",children:[]}]},{level:2,title:"Creando Un Nuevo Contacto",slug:"creando-un-nuevo-contacto",children:[{level:3,title:"Ejemplo de llamada",slug:"ejemplo-de-llamada-2",children:[]}]},{level:2,title:"Actualizando Un Contacto",slug:"actualizando-un-contacto",children:[{level:3,title:"Ejemplo de llamada",slug:"ejemplo-de-llamada-3",children:[]}]},{level:2,title:"Eliminando Un Contacto Existente",slug:"eliminando-un-contacto-existente",children:[{level:3,title:"Ejemplo de llamada",slug:"ejemplo-de-llamada-4",children:[]}]}],filePathRelative:"guide/contacts.md",git:{contributors:[]}}},8412:(a,n,s)=>{s.r(n),s.d(n,{default:()=>U});var e=s(6252);const t=(0,e.uE)('<h1 id="contactos" tabindex="-1"><a class="header-anchor" href="#contactos" aria-hidden="true">#</a> Contactos</h1><h2 id="obteniendo-una-lista-de-contactos" tabindex="-1"><a class="header-anchor" href="#obteniendo-una-lista-de-contactos" aria-hidden="true">#</a> Obteniendo una lista de contactos</h2><hr><p>Este recurso se utiliza para obtener la lista de contactos existentes. La consulta puede ser filtrada por nombres o estados. Si se desea buscar contactos por grupos por favor consulta la sección</p><blockquote><p>GET /contacts</p></blockquote><h3 id="ejemplo-de-llamada" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-llamada" aria-hidden="true">#</a> Ejemplo de llamada</h3><h4 id="llamada-en-v3" tabindex="-1"><a class="header-anchor" href="#llamada-en-v3" aria-hidden="true">#</a> Llamada en v3</h4><blockquote><p>GET /contacts</p></blockquote><h4 id="respuesta-en-v3" tabindex="-1"><a class="header-anchor" href="#respuesta-en-v3" aria-hidden="true">#</a> Respuesta en v3</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n        <span class="token property">&quot;msisdn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50212345678&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gomez&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUSCRIBED&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="llamada-en-v4" tabindex="-1"><a class="header-anchor" href="#llamada-en-v4" aria-hidden="true">#</a> Llamada en v4</h4><blockquote><p>GET /contacts</p></blockquote><h4 id="respuesta-en-v4" tabindex="-1"><a class="header-anchor" href="#respuesta-en-v4" aria-hidden="true">#</a> Respuesta en v4</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n        <span class="token property">&quot;msisdn&quot;</span><span class="token operator">:</span><span class="token string">&quot;50212345678&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Gomez&quot;</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUBSCRIBED&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="obteniendo-la-informacion-de-un-contacto-especifico" tabindex="-1"><a class="header-anchor" href="#obteniendo-la-informacion-de-un-contacto-especifico" aria-hidden="true">#</a> Obteniendo La Información de un contacto específico</h2><hr><blockquote><p>GET /contacts/:msisdn</p></blockquote><p>Este recurso se utiliza para poder obtener un contacto ingresando como parámetro de entrada el valor de número telefónico: MSISDN.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>El número de teléfono deberá de incluir el código internacional de país.</p></div><h3 id="ejemplo-de-llamada-1" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-llamada-1" aria-hidden="true">#</a> Ejemplo de llamada</h3><h4 id="llamada-en-v3-1" tabindex="-1"><a class="header-anchor" href="#llamada-en-v3-1" aria-hidden="true">#</a> Llamada en v3</h4><blockquote><p>GET /contacts/50212345678</p></blockquote><h4 id="respuesta-en-v3-1" tabindex="-1"><a class="header-anchor" href="#respuesta-en-v3-1" aria-hidden="true">#</a> Respuesta en v3</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;msisdn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50212345678&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gomez&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CONFIRMED&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="llamada-en-v4-1" tabindex="-1"><a class="header-anchor" href="#llamada-en-v4-1" aria-hidden="true">#</a> Llamada en v4</h4><blockquote><p>GET /contacts/50212345678</p></blockquote><h4 id="respuesta-en-v4-1" tabindex="-1"><a class="header-anchor" href="#respuesta-en-v4-1" aria-hidden="true">#</a> Respuesta en v4</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n   <span class="token property">&quot;msisdn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50235148164&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;phone_number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;35148164&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;country_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;502&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Xuya&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;full_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose Xuya&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUSCRIBED&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;added_from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;API&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;profile_uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60eb4ec901347f06638b8b6a&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;monitoring&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="creando-un-nuevo-contacto" tabindex="-1"><a class="header-anchor" href="#creando-un-nuevo-contacto" aria-hidden="true">#</a> Creando Un Nuevo Contacto</h2><hr><blockquote><p>POST /contacts/:msisdn</p></blockquote><p>Este recurso se utiliza para crear un nuevo contacto.</p><h3 id="ejemplo-de-llamada-2" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-llamada-2" aria-hidden="true">#</a> Ejemplo de llamada</h3><h4 id="llamada-en-v3-2" tabindex="-1"><a class="header-anchor" href="#llamada-en-v3-2" aria-hidden="true">#</a> Llamada en v3</h4><blockquote><p>POST /contacts/50212345678</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;msisdn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50212345678&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;Gomez&quot;</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="respuesta-en-v3-2" tabindex="-1"><a class="header-anchor" href="#respuesta-en-v3-2" aria-hidden="true">#</a> Respuesta en v3</h4>',37),o=(0,e.Uk)("Se devolverá un código que indicará si la creación fue exitosa o bien si ocurrió un error al efectuar la operación. Por favor consultar la "),p={href:"https://notificame.claro.com.gt/api/docs/index.php/codigos-de-retorno/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("Tabla de códigos"),l=(0,e.Uk)(" de respuesta de la plataforma."),c=(0,e.uE)('<h4 id="llamada-en-v4-2" tabindex="-1"><a class="header-anchor" href="#llamada-en-v4-2" aria-hidden="true">#</a> Llamada en v4</h4><blockquote><p>POST /contacts/50235148164</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n   <span class="token property">&quot;country_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;502&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gomez&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;msisdn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50235148164&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="respuesta-en-v4-2" tabindex="-1"><a class="header-anchor" href="#respuesta-en-v4-2" aria-hidden="true">#</a> Respuesta en v4</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n   <span class="token property">&quot;msisdn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50235148164&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;phone_number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;35148164&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;country_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;502&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gomez&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;full_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose Gomez&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUSCRIBED&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;added_from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;API&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;profile_uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60eb4ec901347f06638b8b6a&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;monitoring&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="actualizando-un-contacto" tabindex="-1"><a class="header-anchor" href="#actualizando-un-contacto" aria-hidden="true">#</a> Actualizando Un Contacto</h2><hr><blockquote><p>PUT /contacts/:msisdn</p></blockquote><p>Este recurso se utiliza para actualizar un contacto.</p><h3 id="ejemplo-de-llamada-3" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-llamada-3" aria-hidden="true">#</a> Ejemplo de llamada</h3><h4 id="llamada-en-v3-3" tabindex="-1"><a class="header-anchor" href="#llamada-en-v3-3" aria-hidden="true">#</a> Llamada en v3</h4><blockquote><p>PUT /contacts/50212345678</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gomez&quot;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h4 id="respuesta-en-v3-3" tabindex="-1"><a class="header-anchor" href="#respuesta-en-v3-3" aria-hidden="true">#</a> Respuesta en v3</h4>',14),u=(0,e.Uk)("Se devolverá un código que indicará si la actualización fue exitosa o bien si ocurrió un error al efectuar la operación. Por favor consultar la "),i={href:"https://notificame.claro.com.gt/api/docs/index.php/codigos-de-retorno/",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("Tabla de códigos"),k=(0,e.Uk)(" de respuesta de la plataforma."),m=(0,e.uE)('<h4 id="llamada-en-v4-3" tabindex="-1"><a class="header-anchor" href="#llamada-en-v4-3" aria-hidden="true">#</a> Llamada en v4</h4><blockquote><p>PUT /contacts/50235148164</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n   <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gomez&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="respuesta-en-v4-3" tabindex="-1"><a class="header-anchor" href="#respuesta-en-v4-3" aria-hidden="true">#</a> Respuesta en v4</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n   <span class="token property">&quot;msisdn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;50235148164&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;phone_number&quot;</span><span class="token operator">:</span> <span class="token string">&quot;35148164&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;country_code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;502&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;first_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;last_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Xuya&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;full_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Jose Xuya&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SUSCRIBED&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;added_from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;API&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;profile_uid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60eb4ec901347f06638b8b6a&quot;</span><span class="token punctuation">,</span>\n   <span class="token property">&quot;monitoring&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span> \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="eliminando-un-contacto-existente" tabindex="-1"><a class="header-anchor" href="#eliminando-un-contacto-existente" aria-hidden="true">#</a> Eliminando Un Contacto Existente</h2><hr><blockquote><p>DELETE /contacts/:msisdn</p></blockquote><p>Este recurso se utiliza para eliminar un contacto existente.</p><h3 id="ejemplo-de-llamada-4" tabindex="-1"><a class="header-anchor" href="#ejemplo-de-llamada-4" aria-hidden="true">#</a> Ejemplo de llamada</h3><h4 id="llamada-en-v3-4" tabindex="-1"><a class="header-anchor" href="#llamada-en-v3-4" aria-hidden="true">#</a> Llamada en v3</h4><blockquote><p>DELETE /contacts/50212345678</p></blockquote><h4 id="respuesta-en-v3-4" tabindex="-1"><a class="header-anchor" href="#respuesta-en-v3-4" aria-hidden="true">#</a> Respuesta en v3</h4>',13),b=(0,e.Uk)("Se devolverá un código que indicará si la eliminación fue exitosa o bien si ocurrió un error al efectuar la operación. Por favor consultar la "),q={href:"https://notificame.claro.com.gt/api/docs/index.php/codigos-de-retorno/",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("Tabla de códigos"),g=(0,e.Uk)(" de respuesta de la plataforma."),v=(0,e._)("h4",{id:"llamada-en-v4-4",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#llamada-en-v4-4","aria-hidden":"true"},"#"),(0,e.Uk)(" Llamada en v4")],-1),f=(0,e._)("blockquote",null,[(0,e._)("p",null,"DELETE /contacts/50212345678")],-1),y=(0,e._)("h4",{id:"respuesta-en-v4-4",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#respuesta-en-v4-4","aria-hidden":"true"},"#"),(0,e.Uk)(" Respuesta en v4")],-1),j=(0,e.Uk)("Se devolverá un código que indicará si la eliminación fue exitosa o bien si ocurrió un error al ejecutar la operación. Por favor consultar la "),x={href:"https://docs.reach.tools/manual/tabla-codigos-de-respuesta/#page-content",target:"_blank",rel:"noopener noreferrer"},_=(0,e.Uk)("Tabla de códigos"),E=(0,e.Uk)(" de respuesta de la plataforma."),U={render:function(a,n){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[o,(0,e._)("a",p,[r,(0,e.Wm)(s)]),l]),c,(0,e._)("p",null,[u,(0,e._)("a",i,[d,(0,e.Wm)(s)]),k]),m,(0,e._)("p",null,[b,(0,e._)("a",q,[h,(0,e.Wm)(s)]),g]),v,f,y,(0,e._)("p",null,[j,(0,e._)("a",x,[_,(0,e.Wm)(s)]),E])],64)}}}}]);