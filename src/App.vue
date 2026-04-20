<script setup>
  import Stat from "./components/Stat.vue"
  import CitySelect from "./components/CitySelect.vue"
  import { computed, ref } from "vue"
  import Error from "./components/Error.vue"

  const API_ENDPOINT = "https://api.weatherapi.com/v1"
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  const errorMap = new Map([[1006, "Указанный город не найден"]])

  const data = ref(null)
  const error = ref(null)

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

  const errorDisplay = computed(() => {
    return errorMap.get(error.value?.error?.code)
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

    if (res.status !== 200) {
      data.value = null
      error.value = await res.json()
      return
    }

    data.value = await res.json()
    error.value = null
  }
</script>

<template>
  <main class="main">
    <Error :error="errorDisplay" />
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
