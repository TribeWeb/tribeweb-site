<script setup>
import { useWindowSize } from '@vueuse/core'

const props = defineProps({
  name: {
    type: String,
    default: 'State Machine'
  },
  machineId: {
    type: String,
    required: true
  },
  projectId: {
    type: String,
    required: true
  },
  lightDarkMode: {
    validator(value, props) {
      return ['light', 'dark', 'current', 'contrast'].includes(value)
    },
    default: 'contrast'
  },
  mode: {
    validator(value, props) {
      return ['Design', 'Simulate'].includes(value)
    },
    default: 'Design'
  }
})

const map = {
  light: 'dark',
  dark: 'light'
}
const statelyUrl = 'https://stately.ai/registry/editor/embed'

const nativeMode = useColorMode()

const { width, height } = useWindowSize()

const isOpen = ref(false)

const colorMode = computed(() => {
  if (props.lightDarkMode === 'current') {
    return nativeMode.value
  } else if (props.lightDarkMode === 'contrast') {
    return map[nativeMode.value]
  } else {
    return props.lightDarkMode
  }
})

const href = computed(() => {
  return `${statelyUrl}/${props.projectId}?machineId=${props.machineId}&mode=${props.mode}`
})

const embedUrl = computed(() => {
  return `${href.value}&colorMode=${colorMode.value}`
})
</script>

<template>
  <div>
    <UButton
      variant="soft"
      @click="isOpen = true"
    >
      {{ name }}

      <UModal
        v-model="isOpen"
        fullscreen
      >
        <UCard
          :ui="{
            base: 'h-full flex flex-col',
            rounded: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
            header: {
              padding: 'px-4 py-3 sm:px-6'
            },
            body: {
              padding: 'p-4 sm:p-4'
            }
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {{ name }}
              </h3>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpen = false"
              />
            </div>
          </template>

          <iframe
            loading="lazy"
            :src="embedUrl"
            :style="`display: block; width: 100%; aspect-ratio: ${width} / ${height - 64};`"
          >
            <a
            :href="href"
            >
            View the <em>Embed feature machine</em> machine in Stately Studio </a
            >.
          </iframe>
        </UCard>
      </UModal>
    </ubutton>
  </div>
</template>
