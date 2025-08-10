<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  titleTemplate: '',
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description
})
</script>

<template>
  <UPage>
    <UPageHero
      v-if="page?.hero"
      :title="page?.hero.title"
      :description="page?.hero.description"
      :img="page?.hero.img"
      orientation="horizontal"
      class="md:py-32"
    >
      <!-- <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span
              class="absolute inset-0"
              aria-hidden="true"
            />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template> -->

      <!-- <template #title>
        <MDC :value="page.hero.title" />
      </template> -->
      <img
        :src="page.hero.img.src"
        :class="page.hero.img.class"
      >
    </UPageHero>

    <UPageSection
      :title="page?.features?.title"
      :links="page?.features?.links"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) of page?.features?.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </UPageSection>
  </UPage>
</template>
