<script setup lang="ts">
import { onMounted } from 'vue'
//const greyMode = ref<boolean>(false)

onMounted(() => {
  console.log('頁面使用:', import.meta.env.VITE_API_DEFAULT_URL)
})
</script>

<template>
  <RouterView />
</template>

