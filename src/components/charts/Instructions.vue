<template>
	<div class="bar-container">
		<Bar :data="data" :options="options" />
		<v-table class="table">
			<thead>
			<tr>
				<th>Name</th>
				<th>Instructions</th>
				<th>Reason</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="user in screeningData" :key="user.name">
				<td :style="`color: ${user.color}`" >{{ user.name }}</td>
				<td class="text-center" :style="`color: ${getColor(user.instructions.confidence / 5)}`">{{ user.instructions.confidence }}</td>
				<td v-html="user.instructions.simplifiedReason"></td>
			</tr>
			<tr>
				<td><b>Average</b></td>
				<td class="text-center" :style="`color: ${getColor(averageConfidence / 5)}`">{{ averageConfidence }}</td>
				<td>N/A</td>
			</tr>
			</tbody>
		</v-table>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Bar } from "vue-chartjs";
import { type ChartData, type ChartOptions } from 'chart.js';
import screeningData from "../../screeningData.json";
import { getColor } from "../../util.ts";

const data = ref<ChartData<"bar">>({
	labels: screeningData.map(user => user.name),
	datasets: [
		{
			label: 'Users',
			data: screeningData.map(user => user.instructions.confidence),
			backgroundColor: screeningData.map(user => user.color + "20"),
			borderColor: screeningData.map(user => user.color),
			borderWidth: 1
		}
	]
});

const options = ref<ChartOptions<"bar">>({
	responsive: true,
	scales: {
		x: {
			title: {
				display: true,
				text: 'Users',
				color: 'white'
			},
			ticks: {
				color: 'white'
			}
		},
		y: {
			title: {
				display: true,
				text: 'Confidence Level',
				color: 'white'
			},
			ticks: {
				beginAtZero: true,
				color: 'white',
				stepSize: 1
			},
			suggestedMax: 5
		}
	},
	plugins: {
		legend: {
			labels: {
				color: 'white'
			}
		},
		title: {
			display: true,
			text: 'Confidence Levels in Instructions from Guide',
			color: 'white',
			font: {
				size: 24
			}
		}
	}
});

const averageConfidence = computed(() => {
	const totalConfidence = screeningData.reduce((sum, user) => sum + user.instructions.confidence, 0);
	return (totalConfidence / screeningData.length)
});
</script>

<style scoped>
.bar-container {
	display: flex;
	justify-content: center;
	gap: 20px;
}

.table {
	background-color: #242424;
}
</style>