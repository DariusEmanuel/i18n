import { ref } from "vue";
import { defineStore } from "pinia";
import getAppConfig from "../../library/getAppConfig.js";

export const useI18nStore = defineStore("i18n", async () => {
  const appConfig = await getAppConfig();

  const i18n = ref(appConfig?.i18n);
  return {
    i18n,
  };
});
