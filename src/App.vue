
<template>
  <div class="contents">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};

</script>

<style>
  .contents{
    height: 100%;
  }
</style>
