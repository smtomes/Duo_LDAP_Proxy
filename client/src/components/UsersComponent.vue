<template>
  <hr class="bg-amber-600 h-px border-none my-2" />
  <div class="grid grid-cols-2">
    <template v-for="user of users">
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const users = ref([]);

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      users.value = json;
    })
    .catch((err) => console.log(err));
}

onMounted(() => {
  getUsers();
});
</script>
