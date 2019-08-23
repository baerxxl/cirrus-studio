<template>
  <v-sidebar style="background: #2A2827 !important;">
    <v-sidebar-items style="background #373535 !important;">
      <v-sidebar-item></v-sidebar-item>
      <v-sidebar-item>
        <v-sidebar-dropdown title="Headlines">
          <v-sidebar-item dropdown v-for="headline in headlines" :key="headline">{{ headline }}</v-sidebar-item>
        </v-sidebar-dropdown>
      </v-sidebar-item>
      <v-sidebar-item>Paragraph</v-sidebar-item>
    </v-sidebar-items>
    <v-sidebar-content>
      <slot></slot>
    </v-sidebar-content>
  </v-sidebar>
</template>

<script>
export default {
  data() {
    return {
      headlines: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    };
  },
};
</script>

<style lang="scss">
#sidebar {
  background: #373535 !important;
  border-right: 1px solid #000;
  
  .tree-item-header {
    color: white !important;
  }

  li.menu-item a {
    color: white;
  }
}
</style>
