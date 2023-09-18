import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

window.addEventListener("DOMContentLoaded", () => {
  const loadingMessageEl = document.getElementById("app-loading-message");
  if (loadingMessageEl) {
    loadingMessageEl.style.display = "none";
  }

  app.mount("#app");
});
