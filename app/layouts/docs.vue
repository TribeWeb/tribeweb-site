<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { mapContentNavigation } from '@nuxt/ui-pro/runtime/utils/content.js'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UNavigationMenu :links="mapContentNavigation(navigation)" />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
