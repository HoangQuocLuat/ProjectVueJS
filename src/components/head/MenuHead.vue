<script>
import {
  HomeOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons-vue";

import Search from "../icons/Search.vue";
import SignIn from "../icons/SignIn.vue";
export default {
  name: "MenuHead",
  components: {
    HomeOutlined,
    SettingOutlined,
    BellOutlined,
    SignIn,
    Search,
  },
};
</script>

<template>
  <div class="flex justify-between items-center mb-[30px]">
    <Search />
    <SignIn class="pl-[20px] flex"><span class="mt-auto mb-auto">Sign In</span></SignIn>
    <SettingOutlined class="pl-[20px]"/>
    <BellOutlined class="pl-[20px]"/>
  </div>
</template>
<style>
</style>

