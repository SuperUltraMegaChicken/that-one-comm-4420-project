<template>
	<div class="pie-container">
		<Pie class="pie" :data="data" :options="options" />
		<v-table class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Response</th>
					<th>Satisfaction</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in screeningData" :key="user.name">
					<td :style="`color: ${user.color}`" >{{ user.name }}</td>
					<td class="text-center">{{ user.useDIY.answer }}</td>
					<td class="text-center" :style="`color: ${getColor(user.satisfaction / 5)}`">{{ user.satisfaction }}</td>
				</tr>
			</tbody>
		</v-table>
	</div>
	<br>
	<footer class="text-center">Note: The person who took the longest (890 seconds), did not recommend it. The second longest one took 592 seconds</footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Pie } from "vue-chartjs";
import { type ChartData, type ChartOptions} from 'chart.js'
import screeningData from "../../screeningData.json";
import {getColor} from "../../util.ts";


const brightColor = "#b7b7b7";

const data = ref<ChartData<"pie">>({
	labels: ["Yes", "No"],
	datasets: [
		{
			label: "Would you use DIY?",
			data: [0, 0],
			backgroundColor: [
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
			],
			hoverOffset: 4
		}
	]
});

for (const user of screeningData) {
	data.value.datasets[0].data[user.useDIY.answer === "Yes" ? 0 : 1]++;
}

const options = ref<ChartOptions<"pie">>({
	responsive: true,
	color: brightColor
});

</script>

<style scoped>
.pie {
	height: 400px !important;
	width: 400px !important;
}

.pie-container {
	display: flex;
	justify-content: center;
	gap: 20px;
}

.table {
	background-color: #242424;
}
</style>