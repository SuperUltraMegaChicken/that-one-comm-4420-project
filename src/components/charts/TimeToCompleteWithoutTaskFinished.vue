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

const convertDurationToSeconds = (duration: string) => {
	const [minutes, seconds, milliseconds] = duration.split(":").map(Number);
	return minutes * 60 + seconds + milliseconds / 1000;
};

quantitativeData.forEach((user) => {
	data.value.datasets!.push({
		label: user.name,
		data: [
			{
				x: convertDurationToSeconds(user.diyTimeTaken),
				// @ts-ignore
				y: "Guide Found"
			},
			{
				x: convertDurationToSeconds(user.findCategoryTimeTaken),
				// @ts-ignore
				y: "Category Found"
			},
			{
				x: 0,
				// @ts-ignore
				y: "Start",
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
				text: "Time (s)",
				color: brightColor
			},
			min: 0,
			max: 900,
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
				text: "Time Taken To Complete Tasks",
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