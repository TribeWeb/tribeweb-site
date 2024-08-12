<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<NavItem[]>('navigation', [])

const { header } = useAppConfig()
const { value: mode } = useColorMode()
</script>

<template>
  <UHeader>
    <template #logo>
      <AppLogo
        v-bind="{ class: 'md:h-12 h-8 w-auto m-auto' }"
        primary="rgb(var(--color-primary-DEFAULT)"
        :accent="mode==='light' ? 'rgb(var(--color-primary-accentLight)' : 'rgb(var(--color-primary-accentDark)'"
      />
      <span class="font-feature md:text-4xl text-2xl text-primary tracking-[-0.035em] font-bold">tribeweb</span>
    </template>

    <template
      v-if="header?.search"
      #center
    >
      <UContentSearchButton class="hidden lg:flex" />
    </template>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        :label="null"
        class="lg:hidden"
      />

      <UColorModeButton v-if="header?.colorMode" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
