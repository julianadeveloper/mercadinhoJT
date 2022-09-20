<template>
  <div class="container">
    <CardItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardItem from "@/components/CardItem.vue";

export default defineComponent({
  name: "WellcomeUser",
  components: {
    CardItem,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  background-color: rgb(207, 48, 48);
}
</style>
