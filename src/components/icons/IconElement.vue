<script>
export default {
  name: "IconElement",
};
</script>

<template>
  <button class="flex">
    <button class="rounded-full bg-[white] h-[30px] w-[30px] flex items-center justify-center group-hover:bg-[#4FD1C5]">
        <slot class="h-[15px] w-[15px] "></slot>
    </button>
  </button>
</template>

