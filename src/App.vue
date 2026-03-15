<script setup>
  import Stat from "./components/Stat.vue"
  import CitySelect from "./components/CitySelect.vue"

  const data = {
    label: "Влажность",
    stat: "90%",
  }

  const getCity = (city) => {
    console.log("City:", city)
  }
</script>

<template>
  <main class="main">
    <Stat v-bind="data" />
    <CitySelect @select-city="getCity" />
  </main>
</template>

<style scoped>
  .main {
    background: var(--color-bg-main);
    padding: 60px 50px;
    border-radius: 25px;
  }
</style>
