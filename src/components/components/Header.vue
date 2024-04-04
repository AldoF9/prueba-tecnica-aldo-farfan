<template>
  <v-toolbar-title absolute color="white" class="nav-bar shadow-sm mb-3 pt-2">
    <v-row class="justify-content-between">
      <v-col cols="12">
        <div class="d-flex align-center">
          <h1 style="padding-left: 560px;color: #FFFFFF" class="pt-5">Productos</h1>
          <router-link to="/shopping" style="margin-left: 460px;">
            <v-icon class="ps-2" style="font-size: 35px; padding-top: 10px; color: #FFFFFF;">mdi-cart</v-icon>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-toolbar-title>
</template>

<script>
export default {
  name: "Header-nav",
};
</script>


<style scoped>

</style>
