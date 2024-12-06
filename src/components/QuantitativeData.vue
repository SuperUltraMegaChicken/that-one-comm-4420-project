<template>
	<p>Hover over the headers to get more detailed information about each row.</p>
	<br>
	<v-table class="table">
		<thead>
		<tr>
			<th class="text-left" v-tooltip="'Lings Cars?'">Name</th>
			<th class="text-left" v-tooltip="'Time Taken To Find The Category'">Category Time*</th>
			<th class="text-left" v-tooltip="'Pages To Find The Category'">Category Pages*</th>
			<th class="text-left highlight" v-tooltip="'Total Time Taken To Find The Guide'">Guide Time</th>
			<th class="text-left" v-tooltip="'Pages To Find The Guide'">Guide Pages</th>
			<th class="text-left" v-tooltip="'Time Taken To Checkout'">Checkout Time</th>
			<th class="text-left" v-tooltip="'Total Time Taken To Complete The Task'">Total Time Taken</th>
			<th class="text-left" v-tooltip="'Did the user find it through the category and unchecked the filter?'">Breadcrumb</th>
			<th class="text-left" v-tooltip="'% Of Time Taken To Find The Guide'">Guide %</th>
		</tr>
		</thead>
		<tbody>
		<tr
				v-for="user in quantData"
				:key="user.name"
		>
			<td :style="`color: ${user.color}`">{{ user.name }}</td>
			<td>{{ user.findCategoryTimeTaken }}</td>
			<td>{{ user.findCategoryPages }}</td>
			<td class="highlight">{{ user.diyTimeTaken }}</td>
			<td>{{ user.diyPages }}</td>
			<td>{{ user.checkoutTimeTaken }}</td>
			<td>{{ user.timeTaken }}</td>
			<td>{{ user.foundThroughCategory }}</td>
			<td>{{ Math.round(convertDurationToSeconds(user.diyTimeTaken) / convertDurationToSeconds(user.timeTaken) * 100) + '%'}}</td>
		</tr>
		<tr>
			<td><b>Averages</b></td>
			<td>{{ convertSecondsToDuration(average(findCategoryTimes)) }}</td>
			<td>{{ average(findCategoryPages) }}</td>
			<td class="highlight">{{ convertSecondsToDuration(average(diyTimes)) }}</td>
			<td>{{ average(diyPages) }}</td>
			<td>{{ convertSecondsToDuration(average(checkoutTimes)) }}</td>
			<td>{{ convertSecondsToDuration(average(totalTimes)) }}</td>
			<td>N/A</td>
			<td>{{ Math.round(average(guidePercentages)) + '%' }}</td>
		</tr>
		</tbody>
	</v-table>
	<br>
	<p id="benchmark">
		The benchmark to find the
		<span class="highlight">"How-To Guide"</span>
		was 2 minutes. Yes, all of them
		<span class="danger">FAILED</span>.
	</p>
	<br>
	<footer>
		* = The guide we wanted users to look for, <em>How to sync your lights</em> was under the
		<em>Lighting & Ceiling Fan</em> category. However, when you click on this category, it already
		filters the keyword "Fans." To get to the guide from that point, users had to remove the "Fans" keyword.
	</footer>
</template>

<script setup lang="ts">
import quantData from "../quantitativeData.json";

const convertDurationToSeconds = (duration: string) => {
	const [minutes, seconds, milliseconds] = duration.split(":").map(Number);
	return minutes * 60 + seconds + milliseconds / 1000;
};

const convertSecondsToDuration = (seconds: number) => {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = Math.floor(seconds % 60);
	const milliseconds = Math.round((seconds % 1) * 100);
	return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
};

const average = (values: number[]) => values.reduce((a, b) => a + b, 0) / values.length;

const findCategoryTimes = quantData.map(user => convertDurationToSeconds(user.findCategoryTimeTaken));
const diyTimes = quantData.map(user => convertDurationToSeconds(user.diyTimeTaken));
const checkoutTimes = quantData.map(user => convertDurationToSeconds(user.checkoutTimeTaken));
const totalTimes = quantData.map(user => convertDurationToSeconds(user.timeTaken));

const findCategoryPages = quantData.map(user => user.findCategoryPages);
const diyPages = quantData.map(user => user.diyPages);

const guidePercentages = quantData.map(user => (convertDurationToSeconds(user.diyTimeTaken) / convertDurationToSeconds(user.timeTaken)) * 100);
</script>

<style scoped>
#benchmark {
	font-size: 20px;
}

.table {
	background-color: #242424;
}

.danger {
	color: #ff4a4a;
}

.highlight {
	background: rgba(255, 242, 0, 0.1);
}
</style>