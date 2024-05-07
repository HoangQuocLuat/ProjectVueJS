<script>
import Slicebar from "./components/Slicebar.vue";
import Headd from "./components/Head.vue";
import Footerr from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Slicebar,
    Headd,
    Footerr,
  },
};
</script>

<template>
  <Slicebar class="w-[246px] mt-[20px]"/>
  <main class="w-full  mx-[20px] ml-[50px]">
    <Headd class="mt-[20px]"/>
    <router-view />
    <Footerr class="my-[20px]"/>
  </main>
</template>
<style>
</style>