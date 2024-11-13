<template>
  <v-table class="table">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Start Time</th>
        <th class="text-left">End Time</th>
        <th class="text-left">Time Taken</th>
        <th class="text-left">DIY Time</th>
        <th class="text-left">DIY Time Taken</th>
        <th class="text-left">Checkout Time Taken</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in quantData"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.startTime }}</td>
        <td>{{ item.endTime }}</td>
        <td>{{ item.timeTaken }}</td>
        <td>{{ item.diyTime }}</td>
        <td>{{ item.diyTimeTaken }}</td>
        <td>{{ item.checkoutTimeTaken }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import quantData from "../quantitativeData.json";

console.log(quantData);
</script>

<style scoped>
</style>