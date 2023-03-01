<style></style>

<template>
  <div class="container mx-auto">
    <div>Blackbox</div>
    <users-component />
    <hr class="bg-amber-600 h-px border-none my-2" />
    <div class="my-3 flex">
      <div class="mx-3">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          v-model="myVariable"
        />
      </div>
      <div class="mx-3">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="myFunction()"
        >
          click to log
        </button>
      </div>
    </div>
    <hr class="bg-amber-600 h-px border-none my-2" />
    {{ myVariable }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import UsersComponent from "./components/UsersComponent.vue";

const myVariable = ref("");

function myFunction() {
  console.log(myVariable.value);
}
</script>
