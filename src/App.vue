<script setup>
  import Stat from "./components/Stat.vue"
  import CitySelect from "./components/CitySelect.vue"
  import { computed, ref } from "vue"

  const savedCity = ref("Moscow")
  const data = ref({
    humidity: 90,
  })

  const dataModified = computed(() => {
    return {
      label: "Влажность",
      stat: data.value.humidity + "%",
    }
  })

  const getCity = (city) => {
    savedCity.value = city
    data.value.humidity = 20
  }
</script>

<template>
  <main class="main">
    <Stat v-bind="dataModified" />
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
