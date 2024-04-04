<template>
  <v-app >
    <div class="row">
      <div class="col-12 nav-side-background-color">
        <HeaderNav></HeaderNav>
        <Products></Products>
      </div>
    </div>
  </v-app>
</template>

<script>
import HeaderNav from "@/components/components/Header";
import Products from "@/components/pages/Products";
export default {
  components: {Products, HeaderNav},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-side-background-color{
  background: transparent linear-gradient(195deg, #F7E2D8 0%, #F79160 100%) 0% 0% no-repeat padding-box;
  background-size: cover;
  border-radius: 30px 100px 100px 30px;
  z-index: 1;
  align-items: initial;
}
</style>
