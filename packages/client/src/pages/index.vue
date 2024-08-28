<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: '__APP_NAME__',
})
</script>

<template>
  <main flex grow flex-col px-4>
    <div mx-auto mt-20vh max-w-120 min-w-75 w-92vw sm:min-w-120>
      <TitleLogo my-3 text-3xl sm:my-5 sm:text-4xl />
      {{ t('example.hello-world') }}
    </div>
  </main>
</template>

<route lang="yaml">
meta:
  layout: index
</route>
