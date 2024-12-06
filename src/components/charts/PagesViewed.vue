<template>
	<Scatter class="chart" :data="data" :options="options" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Scatter } from "vue-chartjs";
import { type ChartData, type ChartOptions} from 'chart.js'
import quantitativeData from "../../quantitativeData.json";


const brightColor = "#b7b7b7";

const data = ref<ChartData<"scatter">>({
	datasets: []
});

quantitativeData.forEach((user) => {
	data.value.datasets!.push({
		label: user.name,
		data: [
			{
				x: 0,
				// @ts-ignore
				y: "Start",
			},
			{
				x: user.findCategoryPages,
				// @ts-ignore
				y: "Category Found"
			},
			{
				x: user.diyPages,
				// @ts-ignore
				y: "Guide Found"
			},
		],
		backgroundColor: user.color,
		borderColor: "#575050",
		borderWidth: 1
	});
});

const options = ref<ChartOptions<"scatter">>({
	responsive: true,
	scales: {
		y: {
			type: "category",
			position: "left",
			title: {
				display: true,
				text: "Checkpoints",
				color: brightColor
			},
			labels: ["Guide Found", "Category Found", "Start"],
			min: 0,
			ticks: {
				color: brightColor
			}
		},
		x: {
			type: "linear",
			position: "bottom",
			title: {
				display: true,
				text: "Pages",
				color: brightColor
			},
			min: 0,
			max: 35,
			ticks: {
				color: brightColor
			}
		}
	},
	plugins: {
		legend: {
			labels: {
				color: brightColor
			},
			title: {
				display: true,
				text: "Pages Viewed",
				color: "white",
				font: {
					size: 24
				}
			}
		}
	},
	showLine: true,
	font: {
		size: 16
	},
	elements: {
		point: {
			radius: 10,
			hoverRadius: 15
		}
	}
});

</script>

<style scoped>
.chart {
	width: 100%;
	height: 100%;
}
</style>