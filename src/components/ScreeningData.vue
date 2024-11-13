<template>
  <v-table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Navigation</th>
        <th>Cart</th>
        <th>Instructions</th>
        <th>Materials</th>
        <th>Feedback</th>
        <th>Use DIY</th>
        <th>Satisfaction</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in screenData" :key="data.name">
        <td>{{ data.name }}</td>
        <td>{{ data.navigation }}</td>
        <td>{{ data.cart }}</td>
        <td>{{ data.instructions }}</td>
        <td>{{ data.materials }}</td>
        <td>{{ data.feedback }}</td>
        <td>{{ data.useDIY }}</td>
        <td>{{ data.satisfaction }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import screenData from "../screeningData.json";

</script>

<style scoped>

</style>