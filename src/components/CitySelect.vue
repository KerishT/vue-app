<script setup>
  import { ref } from "vue"
  import IconLocation from "../icons/IconLocation.vue"
  import Button from "./Button.vue"

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
</script>

<template>
  <Button @click="edit">
    <IconLocation />
    Изменить город
  </Button>

  <div v-if="isEdited">
    <input />
    <Button @click="select">Сохранить</Button>
  </div>
</template>
