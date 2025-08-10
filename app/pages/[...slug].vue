<script setup lang="ts">
import ShowDate from '~/components/content/ShowDate.vue'
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageHeadline } from '@nuxt/content/utils'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation', ref([]))
const breadcrumb = useBreadcrumbItems()

definePageMeta({
  layout: 'docs'
})

const route = useRoute()
const { toc, seo } = useAppConfig()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('content', route.path, {
    fields: ['title', 'description'] })
})

// const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryCollection()
//   .where({ _extension: 'md', navigation: { $ne: false } })
//   .only(['title', 'description', '_path'])
//   .findSurround(withoutTrailingSlash(route.path))
// )

useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Docs',
  title: page.value.title,
  description: page.value.description
})

const headline = findPageHeadline(navigation.value, route.path)

const links = computed(() => [toc?.bottom?.edit && {
  icon: 'i-heroicons-pencil-square',
  label: 'Edit this page',
  to: `${toc.bottom.edit}/${page?.value?._file}`,
  target: '_blank'
}, ...(toc?.bottom?.links || [])].filter(Boolean))
</script>

<template>
  <UPage>
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :headline="headline"
    >
      <template #headline>
        <UBreadcrumb :links="breadcrumb" />
      </template>
      <ShowDate v-if="page.date" :date="page.date.value" :label="page.date.label" class="mt-4" />
    </UPageHeader>

    <UPageBody>
      <ContentRenderer
        v-if="page.body"
        :value="page"
      />

      <hr v-if="surround?.length">

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page.toc !== false"
      #right
    >
      <UContentToc
        :title="toc?.title"
        :links="page.body?.toc?.links"
      >
        <template
          v-if="toc?.bottom"
          #bottom
        >
          <div
            class="hidden lg:block space-y-6"
            :class="{ '!mt-6': page.body?.toc?.links?.length }"
          >
            <USeparator
              v-if="page.body?.toc?.links?.length"
              type="dashed"
            />

            <UPageLinks
              :title="toc.bottom.title"
              :links="links"
            />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
