<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="flex justify-center my-40 w-full h-full flex-col items-center">
    <h1 class="mb-12">{{ error?.statusCode }}</h1>
    <button
      class="px-6 py-2 border bg-primary text-white text-lg font-bold hover:bg-primary/90"
    >
      <NuxtLink to="/">Go back home</NuxtLink>
    </button>
  </div>
</template>
