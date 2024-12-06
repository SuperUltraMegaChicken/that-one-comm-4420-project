<template>
  <v-table class="table">
    <thead>
      <tr>
        <th v-tooltip="'Lings Cars.'">Name</th>
        <th v-tooltip="questions.navigation">Navigation</th>
        <th v-tooltip="questions.cart">Cart</th>
        <th v-tooltip="questions.instructions">Instructions</th>
        <th v-tooltip="questions.materials">Materials</th>
        <th v-tooltip="questions.feedback">Feedback</th>
        <th v-tooltip="questions.diy">Use DIY</th>
        <th v-tooltip="questions.satisfaction">Satisfaction</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in screenData" :key="user.name">
        <td :style="`color: ${user.color}`">{{ user.name }}</td>
        <td>
          <div class="row">
            <br>
            <p>Confidence: <span :style="`color: ${getColor(user.navigation.confidence / 5)}`">{{ user.navigation.confidence }}</span></p>
            <br>
            <p>Reason: {{ user.navigation.reason }}</p>
          </div>
        </td>
        <td>
          <div class="row">
            <br>
            <p>Confidence: <span :style="`color: ${getColor(user.cart.confidence / 5)}`">{{ user.cart.confidence }}</span></p>
            <br>
            <p>Reason: {{ user.cart.reason }}</p>
          </div>
        </td>
        <td>
          <div class="row">
          	<br>
	          <p>Confidence: <span :style="`color: ${getColor(user.instructions.confidence / 5)}`">{{ user.instructions.confidence }}</span></p>
            <br>
            <p>Reason: {{ user.instructions.reason }}</p>
          </div>
        </td>
        <td>
        	<div class="row">
            <br>
            <p>Materials ({{ user.materials.materials.length }}): {{ user.materials.materials.join(", ") }}</p>
	        </div>
        </td>
        <td>
          <div class="row">
	          <br>
	          <p>{{ user.feedback.response }}</p>
          </div>
        </td>
	      <td><div class="row">
	        <br>
	        <p>{{ user.useDIY.answer }}. {{ user.useDIY.reason }}</p>
	      </div></td>
        <td class="text-center">
          <div>
            <p :style="`color: ${getColor(user.satisfaction / 5)}`">{{ user.satisfaction }}</p>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import screenData from "../screeningData.json";
import { getColor, questions } from "../util.ts";
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>