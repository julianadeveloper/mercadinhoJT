<template>
  <div class="busca">
    <input type="text" placeholder="Busque por nome ou marca" />
    <button><fa icon="fa-magnifying-glass"/></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
});
</script>

<style scoped>
input {
  height: 3rem;
  width: 20rem;
  outline: none;
}
.busca {
  display: flex;
  padding: 1rem;
} 
button{
  margin-left: 2px;
  color:rgb(207, 48, 48);
  cursor:pointer;
  border:none;
  background-color:transparent;
  width:50px;
  height:50px;
}
button:hover {
  transform: translateY(3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

button:active {
  transform: translateY(-1px);
}

</style>
