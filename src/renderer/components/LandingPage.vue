<template>
  <ComponentSidebar>
    <h6 class="white light"><fa-icon :icon="['fa', 'eye']"></fa-icon> Preview</h6>
  </ComponentSidebar>
</template>

<script>
import ComponentSidebar from './ComponentSidebar.vue';

export default {
  components: {
    ComponentSidebar,
  },
};
</script>