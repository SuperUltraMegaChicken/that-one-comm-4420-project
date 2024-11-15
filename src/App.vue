<template>
  <div>
    <h1>Raw Data</h1>
    <v-card>
      <v-tabs v-model="rawData">
        <v-tab value="Quantitative Data">Quantitative Data</v-tab>
        <v-tab value="Screening Data">Screening Data</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tabs-window v-model="rawData">
          <v-tabs-window-item value="Quantitative Data">
            <QuantitativeData />
          </v-tabs-window-item>
          <v-tabs-window-item value="Screening Data">
            <ScreeningData />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
    <br>
	  <h1>Visualized Data</h1>
	  <v-card>
		  <v-tabs v-model="visualizedData">
			  <v-tab value="Time To Complete">Time To Complete</v-tab>
			  <v-tab value="Use DIY?">Use DIY?</v-tab>
			  <v-tab value="Confidence">Confidence Levels</v-tab>
		  </v-tabs>
		  <v-card-text>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Time To Complete">
					  <QuantitativeChartData />
				  </v-tabs-window-item>
			  </v-tabs-window>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Use DIY?">
					  <UseDIY />
				  </v-tabs-window-item>
			  </v-tabs-window>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Confidence">
					  <Confidence />
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
import QuantitativeChartData from "./components/charts/TimeToComplete.vue";
import UseDIY from "./components/charts/UseDIY.vue";
import Confidence from "./components/charts/Confidence.vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const rawData = ref("null");
const visualizedData = ref("null");

</script>

<style scoped>
.table {
  background-color: #242424;
}

</style>