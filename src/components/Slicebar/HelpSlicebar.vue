<script>
import IconElement from "../icons/IconElement.vue";

import { QuestionOutlined } from "@ant-design/icons-vue";
export default {
  name: "HelpSlicebar",
  components: {
    IconElement,
    QuestionOutlined,
  },
};
</script>

<template>
  <div class="bg-[#4FD1C5] w-[200px] h-[200px] rounded-[10px]">
    <IconElement class="p-[10px]"><QuestionOutlined /></IconElement>
    <div class="text-[white] p-[10px]">
      <h3 class="mb-[10px]">Need help?</h3>
      <span>Please check our docs</span>
    </div>
    <div class="flex justify-center w-full">
      <button class="bg-white p-[10px] px-[30px] rounded-[10px]">
        <span class="text-[12px] ">DOCUMENTATION</span>
      </button>
    </div>
  </div>
</template>

