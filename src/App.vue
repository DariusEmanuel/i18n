<script setup>
import getAppConfig from "../library/getAppConfig.js";
import HelloWorld from "./components/HelloWorld.vue";
import { useI18nStore } from "./store/i18nStore.js";
import { useI18n } from "../src/store/useI18n.js";

const i18nStore = useI18nStore();

async function onCreated() {
  const config = await getAppConfig();
  i18nStore.i18n = config?.i18n;

  const { t } = useI18n();
  console.log(t("top_secret_mission.reference"));
  console.log(t("goto", { DESTINATION: "Cluj Napoca", NUMBER: 10 }));
}
onCreated();
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="./assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a>
      <img src="https://pinia.vuejs.org/logo.svg" class="logo pinia" />
    </a>
  </div>
  <h1>Vite + Vue + Pinia</h1>
  <h2>Dynamic Multilingual Content by Domain with i18n Store</h2>
  <p class="description">
    Experience seamless internationalization with my Vite + Vue + Pinia
    application. My app leverages the power of Pinia stores and the i18n
    composable to provide multi-language support effortlessly. Whether it's the
    English (en) or Romanian (ro) version, my app dynamically serves the right
    content based on your domain, ensuring a localized and user-friendly
    experience for your audience.
  </p>
  <HelloWorld />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #e7f11faa);
}

.description {
  margin: 0 auto;
  max-width: 800px;
}
</style>
