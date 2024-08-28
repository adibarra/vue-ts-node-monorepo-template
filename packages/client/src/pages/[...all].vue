<script setup lang="ts">
useHead({
  title: 'Not Found • __APP_NAME__',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<template>
  <main grow>
    <div mx-auto mt-20vh w-fit rd-2 p-5 outline-1 outline>
      <div text-4xl font-900>
        <span text-red>404:</span>
        Not Found
      </div>
      <button
        title="Go Back"
        mt-2 flex text-lg custom-icon-btn
        @click="$router.back()"
        @keydown.enter="$router.back()"
      >
        <div i-carbon:caret-left text-2xl />
        Go Back
      </button>
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
