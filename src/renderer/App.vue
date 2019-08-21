<template>
  <div id="app" style="-webkit-app-region: drag">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'cirrus-studio',
  };
</script>

<style lang="scss">
.clickable {
  -webkit-app-region: no-drag;
}
</style>
