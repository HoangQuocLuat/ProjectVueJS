<script>
import {SearchOutlined} from "@ant-design/icons-vue"
export default {
  name: "Search",
  components: {
    SearchOutlined,
  }
};

</script>

<template>
  <button class="w-[200px] h-[30px] bg-white rounded-[10px] flex items-center">
    <SearchOutlined class="p-[10px]"/>
    <input type="text" class="w-[155px] " placeholder="Type here..."/>
  </button>
</template>

