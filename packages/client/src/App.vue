<script setup lang="ts">
useHead({
  title: '__APP_NAME__',
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <div flex flex-col text--c-text min-h-svh>
    <RouterView />
  </div>
</template>

<style>
:root {
  color-scheme: light dark;
  --c-text: #1f2937;
  --c-primary: #f9f9f9;
  --c-secondary: #eaeaea;
  --c-tertiary: #a2a2a2;
  --c-inverse: #121212;
  --c-accent: #1da54f;
}

html.dark {
  --c-text: #e5e7eb;
  --c-primary: #121212;
  --c-secondary: #1e1e1e;
  --c-tertiary: #323232;
  --c-inverse: #f9f9f9;
  --c-accent: #4ade80;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  background: var(--c-primary);
}

html,
div {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html::-webkit-scrollbar,
div::-webkit-scrollbar {
  display: none;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: var(--c-accent);
  opacity: 0.75;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}

.prose pre:not(.shiki) {
  padding: 0;
}

.prose .shiki {
  font-family: 'DM Mono', monospace;
  font-size: 1.2em;
  line-height: 1.4;
  background: var(--c-bg);
}

.prose img {
  width: 100%;
}

.shiki,
.shiki span {
  color: var(--shiki-light);
}

html.dark .shiki,
html.dark .shiki span {
  color: var(--shiki-dark);
}
</style>
