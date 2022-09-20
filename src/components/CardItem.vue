<template>
  <section>
    <div class="content-card">
      <img src="" />
      <button class="add-item">Adicionar ao Carrinho</button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardProduct",
});
</script>
<style scoped>
.content-card {
  background-color: rgb(255, 255, 255);
  width: 20%;
  height: 50%;
}
.add-item {
  cursor: pointer;
  height: 30px;
  width: 100%;
  display: flex;
  margin-top: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(22, 22, 22);
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
