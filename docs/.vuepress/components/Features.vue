<template>
  <div class="container">
    <div class="item">
      <h3>API REST</h3>
      <RouterLink to="/guide/rest-group-tag">Grupos → Etiquetas</RouterLink>
    </div>
    <div class="item">
      <h3>API HTTP</h3>
      <RouterLink to="/guide/api-mensajes-entrantes">Mensajes Entrantes</RouterLink>
    </div>
    <div class="item">
      <h3>SDK'S</h3>
      <RouterLink to="/guide/sdk-groups">Grupos → Etiquetas</RouterLink>
    </div>
  </div>
</template>

<script>
export default {
    name: "Features"
};
</script>

<style scoped>
.container {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem 1rem;
}
.item {
  text-align: center;
}
</style>
