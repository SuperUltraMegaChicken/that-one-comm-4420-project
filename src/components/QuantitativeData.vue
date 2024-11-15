<template>
  <v-table class="table">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Search Time Taken</th>
        <th class="text-left">Checkout Time Taken</th>
	      <th class="text-left">Time Taken</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in quantData"
        :key="user.name"
      >
        <td :style="`color: ${user.color}`">{{ user.name }}</td>
        <td>{{ user.diyTimeTaken }}</td>
        <td>{{ user.checkoutTimeTaken }}</td>
	      <td>{{ user.timeTaken }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import quantData from "../quantitativeData.json";

</script>

<style scoped>
</style>