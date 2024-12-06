<template>
	<div class="radar-container">
		<Radar class="radar" :data="data" :options="options" />
		<v-table class="table">
			<thead>
			<tr>
				<th>Name</th>
				<th>Navigation</th>
				<th>Cart</th>
				<th>Instructions</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="user in screeningData" :key="user.name">
				<td :style="`color: ${user.color}`" >{{ user.name }}</td>
				<td class="text-center" :style="`color: ${getColor(user.navigation.confidence / 5)}`">{{ user.navigation.confidence }}</td>
				<td class="text-center" :style="`color: ${getColor(user.cart.confidence / 5)}`">{{ user.cart.confidence }}</td>
				<td class="text-center" :style="`color: ${getColor(user.instructions.confidence / 5)}`">{{ user.instructions.confidence }}</td>
			</tr>
			<tr>
				<td>Average</td>
				<td class="text-center" :style="`color: ${getColor(averageNavigation / 5)}`">{{ averageNavigation }}</td>
				<td class="text-center" :style="`color: ${getColor(averageCart / 5)}`">{{ averageCart }}</td>
				<td class="text-center" :style="`color: ${getColor(averageInstructions / 5)}`">{{ averageInstructions }}</td>
			</tr>
			</tbody>
		</v-table>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Radar } from "vue-chartjs";
import { type ChartData, type ChartOptions } from 'chart.js';
import screeningData from "../../screeningData.json";
import { getColor } from "../../util.ts";

const brightColor = "#b7b7b7";

const data = ref<ChartData<"radar">>({
	labels: ["Navigation", "Cart", "Instructions"],
	datasets: []
});

for (const user of screeningData) {
	data.value.datasets.push({
		label: user.name,
		data: [
			user.navigation.confidence,
			user.cart.confidence,
			user.instructions.confidence
		],
		fill: true,
		backgroundColor: user.color + "20",
		borderColor: user.color,
		pointBackgroundColor: user.color,
		pointBorderColor: '#fff',
		pointHoverBackgroundColor: '#fff',
		pointHoverBorderColor: user.color
	});
}

const options = ref<ChartOptions<"radar">>({
	responsive: true,
	scales: {
		r: {
			backgroundColor: "#a8a8a8",
			suggestedMin: 0,
			suggestedMax: 5,
			ticks: {
				stepSize: 1
			}
		}
	},
	plugins: {
		legend: {
			labels: {
				color: "white"
			},
			title: {
				display: true,
				text: "How confident are you in the following tasks?",
				color: "white",
				font: {
					size: 24
				}
			}
		}
	},
});

const averageNavigation = computed(() => {
	const total = screeningData.reduce((sum, user) => sum + user.navigation.confidence, 0);
	return (total / screeningData.length)
});

const averageCart = computed(() => {
	const total = screeningData.reduce((sum, user) => sum + user.cart.confidence, 0);
	return (total / screeningData.length)
});

const averageInstructions = computed(() => {
	const total = screeningData.reduce((sum, user) => sum + user.instructions.confidence, 0);
	return (total / screeningData.length)
});
</script>

<style scoped>
.radar {
	width: 700px !important;
	height: 700px !important;
}

.radar-container {
	display: flex;
	justify-content: center;
	gap: 20px;
}

.table {
	background-color: #242424;
}
</style>