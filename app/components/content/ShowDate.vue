<script setup>
defineProps({
  date: {
    type: String
  }
})
</script>

<template>
  <div>
    First published: {{ new Date(date).toLocaleDateString() }}
  </div>
</template>
