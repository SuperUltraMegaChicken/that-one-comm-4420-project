<template>
  <div>
    <h1>Raw Data</h1>
    <v-card>
      <v-tabs v-model="rawData">
        <v-tab value="Timed Data">Timed Data</v-tab>
        <v-tab value="Post Survey Data">Post Survey Data</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tabs-window v-model="rawData">
          <v-tabs-window-item value="Timed Data">
            <QuantitativeData />
          </v-tabs-window-item>
          <v-tabs-window-item value="Post Survey Data">
            <ScreeningData />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
    <br>
	  <br>
	  <h1>Visualized Data</h1>
	  <v-card>
		  <v-tabs v-model="visualizedData">
			  <v-tab value="Time To Complete">Time To Complete</v-tab>
			  <v-tab value="Pages Viewed">Pages Viewed</v-tab>
			  <v-tab value="Navigation">Navigation</v-tab>
			  <v-tab value="Cart">Cart</v-tab>
			  <v-tab value="Instructions">Instructions</v-tab>
			  <v-tab value="Confidence">Confidence Levels</v-tab>
			  <v-tab value="Use DIY?">Use DIY?</v-tab>
		  </v-tabs>
		  <v-card-text>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Time To Complete">
					  <v-tabs v-model="taskFinished">
						  <v-tab value="With Task Finished">With Task Finished</v-tab>
						  <v-tab value="Without Task Finished">Without Task Finished</v-tab>
					  </v-tabs>
					  <v-card-text>
						  <v-tabs-window v-model="taskFinished">
							  <v-tabs-window-item value="With Task Finished">
								  <TimeToCompleteWithTaskFinished />
							  </v-tabs-window-item>
							  <v-tabs-window-item value="Without Task Finished">
								  <TimeToCompleteWithoutTaskFinished />
							  </v-tabs-window-item>
						  </v-tabs-window>
					  </v-card-text>
				  </v-tabs-window-item>
			  </v-tabs-window>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Pages Viewed">
					  <PagesViewed />
				  </v-tabs-window-item>
			  </v-tabs-window>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Navigation">
					  <Navigation />
				  </v-tabs-window-item>
			  </v-tabs-window>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Cart">
					  <Cart />
				  </v-tabs-window-item>
			  </v-tabs-window>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Instructions">
					  <Instructions />
				  </v-tabs-window-item>
			  </v-tabs-window>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Confidence">
					  <Confidence />
				  </v-tabs-window-item>
			  </v-tabs-window>
			  <v-tabs-window v-model="visualizedData">
				  <v-tabs-window-item value="Use DIY?">
					  <UseDIY />
				  </v-tabs-window-item>
			  </v-tabs-window>
		  </v-card-text>
	  </v-card>
	  <br>
	  <br>
	  <h1>References</h1>
	  <p id="1">1. </p>
	  <img :src="Triangle" alt="Triangle Lights">
  </div>
	<br>
	<br>
	<br>
	<footer><a href="https://github.com/SuperUltraMegaChicken/that-one-comm-4420-project">Repo</a></footer>
</template>

<script setup lang="ts">
import {ref} from "vue";
import QuantitativeData from "./components/QuantitativeData.vue";
import ScreeningData from "./components/ScreeningData.vue";
import UseDIY from "./components/charts/UseDIY.vue";
import Confidence from "./components/charts/Confidence.vue";
import { Chart, registerables } from "chart.js";
import PagesViewed from "./components/charts/PagesViewed.vue";
import TimeToCompleteWithTaskFinished from "./components/charts/TimeToCompleteWithTaskFinished.vue";
import TimeToCompleteWithoutTaskFinished from "./components/charts/TimeToCompleteWithoutTaskFinished.vue";
import Navigation from "./components/charts/Navigation.vue";
import Cart from "./components/charts/Cart.vue";
import Triangle from "./assets/triangle.webp";
import Instructions from "./components/charts/Instructions.vue";
Chart.register(...registerables);

const rawData = ref("Timed Data");
const visualizedData = ref("Time To Complete");
const taskFinished = ref("With Task Finished");

</script>

<style scoped>
.table {
  background-color: #242424 !important;
}

img {
	max-width: 800px;
}
</style>