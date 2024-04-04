<template>
  <div>
    <v-row>

      <v-col cols="8" md="4" lg="6"
             v-for="item in products"
             :key="item.id">
        <v-card>
          <v-card-text>
            <v-row >

              <v-col cols="12" class="text-center pt-0">
                <v-img
                    :src="item.imageUrl"
                    height="150px"
                    max-width="150px"
                    class="mx-auto"
                    contain
                    style="margin-top: 10px"
                ></v-img>
                <div class="color-txt-gray fw-bold pt-5 h-3em overflow-hidden text-truncate">{{item.name}}</div>
                <div class="color-txt-blue fw-bold pt-5">${{item.price}}</div>
              </v-col>

            </v-row>
            <ViewProduct :data="item"></ViewProduct>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ViewProduct from "@/components/pages/ViewProduct";
import addShopping from "@/addShopping";
export default {
  name: "Products-all",
  components: {ViewProduct},
  data() {
    return {
      products: null,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const token =
            "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqNENWdUR6R0RpQTJzeHUwWVlPWW5kaUU0WGtvbnNGYiIsImlhdCI6MTY3NDU4NjI5OTUyN30.W01xe4zYHPf8-n8KlW_OnPe8anXZFzNPLIHHmmYTsDCBIeVqTYhbbYxHvRW3HTrN3nnwD9CSvbnFpvC_655UAQ";
        const headers = { Authorization: `Bearer ${token}` };

        const response = await this.$http.get("/products", { headers });
        this.products = response.data.products;
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    },
    addToCart(item) {
      addShopping.add(item);
    }
  },
}
</script>

<style scoped>

</style>