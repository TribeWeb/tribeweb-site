<script setup lang="ts">
const { seo, toaster } = useAppConfig()

// const { data: files } = await useAsyncData('search', () => queryCollectionSearchSections('getting-started'))
const { data: files } = await useAsyncData('search-sections', () => {
  return queryCollectionSearchSections('content')
})

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('content'))
// const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
//   default: () => [],
//   server: false
// })

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogImage: 'https://docs-template.nuxt.dev/social-card.png',
  twitterImage: 'https://docs-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
