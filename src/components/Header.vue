<template>
  <div id="app-header">{{title}}</div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
$height: 138px;
#app-header {
  width: 100%;
  height: $height;
  background-image: linear-gradient(
    97deg,
    #268700 15%,
    #248500 46%,
    #207a00 65%,
    #1b6b00
  );
  font-size: 171px;
  font-family: Arial;
  font-size: 48px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: $height;
  letter-spacing: normal;
  color: #fbe500;
}


</style>