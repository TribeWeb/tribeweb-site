<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { mapContentNavigation } from '@nuxt/ui-pro/runtime/utils/content.js'

const navigation = inject<ContentNavigationItem[]>('navigation', [])

const { header } = useAppConfig()
</script>

<template>
  <UHeader>
    <template #title>
      <AppLogo
        v-bind="{ class: 'md:h-12 h-7 w-auto m-auto' }"
        primary="var(--ui-primary)"
        accent="var(--ui-secondary)"
      />
      <span class="font-display md:text-4xl text-2xl text-primary tracking-[-0.035em] font-bold">tribeweb</span>
    </template>

    <UContentSearchButton
      v-if="header?.search"
      label="Search..."
      variant="outline"
      class="w-full"
    >
      <template #trailing>
        <div class="flex items-center gap-0.5 ms-auto">
          <UKbd value="meta" />
          <UKbd value="k" />
        </div>
      </template>
    </UContentSearchButton>

    <UNavigationMenu
      :ui="{ viewportWrapper: 'w-[150%] -left-1/2 -right-1/2 mx-auto' }"
      :items="mapContentNavigation(navigation)"
      highlight
    />

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        class="lg:hidden"
      />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'primary', variant: 'outline', size: 'sm', ...link }"
        >
          {{ link.label }}
          <UBadge
            v-if="link.badge"
            size="md"
            :label="link.badge"
          />
        </UButton>
      </template>
    </template>
  </UHeader>
</template>
