<template>
  <div class="nav-container">
    <nav class="nav">
      <div>
        <ul>
          <li><fa icon="fa-shop" /></li>
          <li><fa icon="fa-cart-shopping" /></li>
        </ul>
      </div>
      <div class="search">
        <Search />
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "@/components/Search.vue";

export default defineComponent({
  name: "NavBar",
  components: {
    Search,
  },
});
</script>

<style scoped>
.nav-container {
  position: relative;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  color: rgb(207, 48, 48);
  margin: 0.5rem;
  list-style: none;
}
li:hover {
  transform: translateY(3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

li:active {
  transform: translateY(-1px);
}
ul {
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  padding: 1rem;
  display: flex;
}
</style>
