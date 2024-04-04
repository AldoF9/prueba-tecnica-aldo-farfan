<template>
  <v-dialog
      v-model="dialog"
      width="900"
      persistent
  >
    <template v-slot:activator="{ on, attrs }">
      <v-icon
          v-on="on"
          v-bind="attrs"
          class="m-0 p-0"
          large
          style="color: #F79160"
      >
        mdi-eye
      </v-icon>
    </template>
    <v-card :outlined="true" rounded="xl">
      <v-card-text>
        <div class="text-center py-5" v-if="modalLoading">
          <v-progress-linear
              indeterminate
              color="cyan"
          ></v-progress-linear>
          <span>Loading...</span>
        </div>
        <v-row v-if="!modalLoading" no-gutters>
          <v-col
              cols="12"
              class="d-flex justify-content-end"
          >
            <v-icon class="color-txt-gray mt-2" @click="dialog = false" large>mdi-close</v-icon>
          </v-col>
          <div class="container-fluid px-4">
            <v-row>
              <v-col cols="12" class="text-center pt-0">
                <h4 class="fields-modals">
                  <v-icon class="color-txt-gray" style="color: #F79160" large>mdi-label</v-icon>
                  Informacion de Producto
                </h4>
              </v-col>
              <v-col cols="12" class="pt-0 pb-3">

                <v-img
                    :src="data.imageUrl"
                    height="150px"
                    max-width="150px"
                    class="mx-auto"
                    contain
                ></v-img>
              </v-col>

              <v-col cols="4" class="pt-0 pb-3">
                <h4 class="fields-modals mb-0">Nombre:</h4>
                <h4>{{ data.name }}</h4>
              </v-col>

              <v-col cols="4" class="pt-0 pb-3">
                <h4 class="fields-modals mb-0">Precio:</h4>
                <h4>{{ data.price }}</h4>
              </v-col>

              <v-col cols="4" class="pt-0 pb-3">
                <h4 class="fields-modals mb-0">Descripcion:</h4>
                <h4>{{ data.description }}</h4>
              </v-col>

              <v-col cols="4" class="pt-0 pb-3">
                <h4 class="fields-modals mb-0">Variantes:</h4>
                <h4 v-for="item in data.variants"
                      :key="item.id">{{ item.name }}</h4>
              </v-col>

              <v-col cols="4" class="pt-0 pb-3">
                <h4 class="fields-modals mb-0">Sku:</h4>
                <h4>{{ data.sku }}</h4>
              </v-col>

              <v-col cols="4" class="pt-0 pb-3">
                <h4 class="fields-modals mb-0">Cantidad en existencia:</h4>
                <h4>{{ data.quantity }}</h4>
              </v-col>

              <v-col cols="12" class="pt-0 pb-3">
                <button class="btn" @click="addToCart(data)" style="background-color: #F79160;">
                  Agregar al carrito
                  <v-icon class="color-txt-gray" style="color: #FFFFFF" large>mdi-cart-plus</v-icon>
                </button>
              </v-col>

            </v-row>
          </div>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import addShopping from "@/addShopping";
export default {
  name: "ViewProduct",
  props: {
    data: {}
  },
  data() {
    return {
      dialog: false,
      modalLoading: false,
    }
  },
  methods: {
    addToCart(data) {
      addShopping.add(data);
    }
  },
}
</script>

<style scoped>

</style>