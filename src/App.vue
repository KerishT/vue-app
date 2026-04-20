<script setup>
  import Stat from "./components/Stat.vue"
  import CitySelect from "./components/CitySelect.vue"
  import { computed, ref } from "vue"

  const API_ENDPOINT = "https://api.weatherapi.com/v1"
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  const data = ref(null)

  const dataModified = computed(() => {
    if (!data.value) return []

    return [
      {
        label: "Влажность",
        stat: data.value.current.humidity + "%",
      },
      {
        label: "Облачность",
        stat: data.value.current.cloud + "%",
      },
      {
        label: "Ветер",
        stat: data.value.current.wind_kph + "км/ч",
      },
    ]
  })

  const getCity = async (city) => {
    const params = new URLSearchParams({
      q: city,
      lang: "ru",
      key: API_KEY,
      days: 3,
    })
    const res = await fetch(
      `${API_ENDPOINT}/forecast.json?${params.toString()}`,
    )
    data.value = await res.json()
  }
</script>

<template>
  <main class="main">
    <Stat v-for="item in dataModified" v-bind="item" :key="item.label" />

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
