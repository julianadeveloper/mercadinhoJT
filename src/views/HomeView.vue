<template>
  
  <div class="home">
    <Nav></Nav>
    <Home/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from '@/components/Home.vue'; // @ is an alias to /src
import Nav from "@/components/Nav.vue"
export default defineComponent({
  name: 'HomeView',
  components: {
    Home,
    Nav  },
});
</script>
