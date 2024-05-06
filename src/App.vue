<script>
import Slicebar from './components/Slicebar.vue'
export default {
  name: "App",
  components: {
    Slicebar
  }
}
</script>

<template>
  <Slicebar/>
  <main>
    <router-view/>
  </main>
</template>

<style>

</style>