<script>
import { SearchOutlined, UserOutlined } from "@ant-design/icons-vue";
export default {
  name: "Search",
  components: {
    UserOutlined,
    SearchOutlined,
  },
};
</script>

<template>
  <button>
    <UserOutlined />
    <slot></slot>
  </button>
</template>

