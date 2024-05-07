<script>
import MenuHead from "../components/head/MenuHead.vue";
export default {
  name: "Headd",
  components: {
    MenuHead,
  },
};
</script>

<template>
  <div class="flex justify-between ">
    <div>
        <span> <span class="text-[white]">Pages</span>/Tables </span>
        <h3 class="mt-[10px]">Tables</h3>
    </div>
    <MenuHead />
  </div>
</template>