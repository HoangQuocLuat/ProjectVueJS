<script>
import { HomeOutlined } from "@ant-design/icons-vue";
export default {
  name: "ElementSlicebar",
  components: {
    HomeOutlined,
  },
};
</script>

<template>
  <button class="flex group hover:bg-white m-[12px] rounded-[10px] p-[10px] w-full">
    <slot class="mt-auto mb-auto"></slot>
  </button>
</template>

