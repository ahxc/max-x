<template>
<div id="navbar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>
.contain-n {
  position: relative;
}

#navbar {
  display: flex;
  background-color: black;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 45px;
  z-index: 4;
}

.right {
  height: 45px;
  width: 45px;
}

.left {
  height: 45px;
  width: 45px;
}

.center {
  height: 45px;
  flex: 1;
}
</style>
