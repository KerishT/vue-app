<script setup>
  import IconLocation from "../icons/IconLocation.vue"
  import Button from "./Button.vue"

  const log = () => {
    console.log("Log!")
  }
</script>

<template>
  <Button @click="log">
    <IconLocation />
    Изменить город
  </Button>
  <input />
  <Button>Сохранить</Button>
</template>
