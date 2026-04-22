<script setup>
  import Stat from "./components/Stat.vue"
  import CitySelect from "./components/CitySelect.vue"
  import { computed, ref } from "vue"
  import Error from "./components/Error.vue"
  import DayCard from "./components/DayCard.vue"

  const API_ENDPOINT = "https://api.weatherapi.com/v1"
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  const errorMap = new Map([[1006, "Указанный город не найден"]])

  const data = ref(null)
  const error = ref(null)

  const dataModified = computed(() => {
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

    <div v-if="data" class="stat-data">
      <div class="stat-list">
        <Stat v-for="item in dataModified" v-bind="item" :key="item.label" />
      </div>

      <div class="day-card-list">
        <DayCard
          v-for="item in data.forecast.forecastday"
          :key="item.date"
          :weather-code="item.day.condition.code"
          :temp="item.day.avgtemp_c"
          :date="new Date(item.date)"
        />
      </div>
    </div>

    <CitySelect @select-city="getCity" />
  </main>
</template>

<style scoped>
  .main {
    background: var(--color-bg-main);
    padding: 60px 50px;
    border-radius: 25px;
  }

  .day-card-list {
    display: flex;
    gap: 1px;
  }

  .stat-data {
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin-bottom: 70px;
  }

  .stat-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
