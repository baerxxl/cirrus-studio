<template>
  <v-sidebar style="background: #2A2827 !important;">
    <v-sidebar-items style="background #373535 !important;">
      <v-sidebar-item></v-sidebar-item>
      <v-sidebar-item link="Test">Test</v-sidebar-item>
    </v-sidebar-items>
    <v-sidebar-content>
      <v-container>
        <h4 class="white light">Pretty Dope stuff</h4>
      </v-container>
    </v-sidebar-content>
  </v-sidebar>
</template>

<style lang="scss">
#sidebar {
  background: #373535 !important;
  border-right: 1px solid #000;
  
  .tree-item-header {
    color: white !important;
  }
}
</style>
