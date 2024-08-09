<script setup>
defineProps({
  date: {
    type: String
  },
  label: {
    type: String,
    default: 'First published'
  }
})

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

</script>

<template>
  <UBadge
    color="primary"
    variant="soft"
  >
    <b>{{ label }}:</b>&nbsp; {{ new Date(date).toLocaleDateString('en-GB', options) }}
  </UBadge>
</template>
