<script setup lang="ts">
const props = defineProps<{
  primary: string
  accent: string
}>()
</script>

<template>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 360"
    width="512px"
    height="380px"
    preserveAspectRatio="xMidYMid meet"
  >
    <g :fill="props.primary" >
      <path transform="matrix(0.443103909492, 1.36379802227, -2.402045965195, -0.566248834133, 442.757351953536, -122.596815752797)" d="M 169.748 108.124 A 104.166 104.166 0 1 1 169.748 147.876 A 73.332 73.332 0 1 0 169.748 108.124 Z" />
      <path transform="matrix(0.266438096762, 0.820051014423, -1.444347023964, -0.340483993292, 346.873858686537, -59.94560243655)" d="M 169.748 108.124 A 104.166 104.166 0 1 1 169.748 147.876 A 68.231 68.231 0 1 0 169.748 108.124 Z" />
    </g>
    <g :fill="props.accent">
      <path transform="matrix(0.107680998743, 0.331425994635, -0.58373695612, -0.137608006597, 262.214067068882, -0.074143329868)" d="M 169.748 108.124 A 104.166 104.166 0 1 1 169.748 147.876 A 26.457 26.457 0 1 0 169.748 108.124 Z" />
    </g>
  </svg>
</template>

