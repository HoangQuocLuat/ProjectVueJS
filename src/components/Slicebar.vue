<script>
import Logo from "./icons/Logo.vue";
import Vector from "./icons/Vecter.vue";
import MenuSlicebar from "./Slicebar/MenuSlicebar.vue";
import ElementSlicebar from "./icons/ElementSlicebar.vue";
import IconElement from "./icons/IconElement.vue";

//icon
import {
  HomeOutlined,
  BarChartOutlined,
  CreditCardOutlined,
  SettingOutlined,
  UserOutlined,
  FileOutlined,
  RocketOutlined,
} from "@ant-design/icons-vue";
import HelpSlicebar from "./Slicebar/HelpSlicebar.vue";

export default {
  name: "Slicebar",
  components: {
    Logo,
    Vector,
    MenuSlicebar,
    ElementSlicebar,
    IconElement,
    //icon
    HomeOutlined,
    BarChartOutlined,
    CreditCardOutlined,
    SettingOutlined,
    UserOutlined,
    FileOutlined,
    RocketOutlined,
    HelpSlicebar,
  },
};
</script>

<template>
  <div>
    <Logo />
    <Vector />
    <MenuSlicebar class="menuslibar">
      <ElementSlicebar class="bg-white">
        <IconElement><HomeOutlined /></IconElement>
        <span> Dashboard </span>
      </ElementSlicebar>
      <ElementSlicebar>
        <IconElement><BarChartOutlined /></IconElement>
        <span> Table </span>
      </ElementSlicebar>
      <ElementSlicebar>
        <IconElement><CreditCardOutlined /></IconElement>
        <span> Billing </span>
      </ElementSlicebar>
      <ElementSlicebar>
        <IconElement><SettingOutlined /></IconElement>
        <span> RTL </span>
      </ElementSlicebar>
    </MenuSlicebar>
    <span class="text-[12px]">ACCOUNT PAGES</span>
    <MenuSlicebar class="menuslibar">
      <ElementSlicebar>
        <IconElement><UserOutlined /></IconElement>
        <span> Profile </span></ElementSlicebar
      >
      <ElementSlicebar>
        <IconElement><FileOutlined /> </IconElement>
        <span> Sign In </span>
      </ElementSlicebar>
      <ElementSlicebar>
        <IconElement><RocketOutlined /></IconElement>
        <span> Sign Up </span></ElementSlicebar
      >
    </MenuSlicebar>
    <HelpSlicebar />
  </div>
</template>
<style>
.menuslibar span {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
