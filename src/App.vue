<template>
  <div>
    <v-card>
      <v-tabs v-model="tab">
        <v-tab value="Quantitative Data">Quantitative Data</v-tab>
        <v-tab value="Screening Data">Screening Data</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="Quantitative Data">
            <QuantitativeData />
          </v-tabs-window-item>
          <v-tabs-window-item value="Screening Data">
            <ScreeningData />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import QuantitativeData from "./components/QuantitativeData.vue";
import ScreeningData from "./components/ScreeningData.vue";

const tab = ref("null");

</script>

<style scoped>
.table {
  background-color: #242424;
}
</style>