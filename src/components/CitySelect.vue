<script setup>
  import { ref } from "vue"
  import IconLocation from "../icons/IconLocation.vue"
  import Button from "./Button.vue"
  import Input from "./Input.vue"

  const city = ref("Moscow")
  const isEdited = ref(false)

  const emit = defineEmits({
    selectCity: (payload) => {
      return payload
    },
  })

  const edit = () => {
    isEdited.value = true
  }

  const select = () => {
    isEdited.value = false
    emit("selectCity", "London")
  }

  function updateCity(newCity) {
    city.value = newCity
  }
</script>

<template>
  <div class="city-select">
    <div v-if="isEdited" class="city-input">
      <Input placeholder="Введите город" @update:value="updateCity" />
      <Button @click="select">Сохранить</Button>
    </div>
    <Button v-else @click="edit">
      <IconLocation />
      Изменить город
    </Button>
  </div>
</template>

<style scoped>
  .city-input {
    display: flex;
    gap: 12px;
  }

  .city-select {
    width: 420px;
  }
</style>
