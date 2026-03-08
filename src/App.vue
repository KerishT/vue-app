<script setup>
  import Button from "./components/Button.vue"
  import Stat from "./components/Stat.vue"

  const data = {
    label: "Влажность",
    stat: "90%",
  }
</script>

<template>
  <main class="main">
    <Button>Сохранить</Button>
    <Stat v-bind="data" />
  </main>
</template>

<style scoped>
  .main {
    background: var(--color-bg-main);
    padding: 60px 50px;
    border-radius: 25px;
  }
</style>
