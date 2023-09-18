<script setup lang="js">

import { useI18n } from "../store/useI18n.js";

const { t } = useI18n();
</script>

<template>
  <h3>Parsed i18n</h3>
  <p>{{ t("goto") }}</p>
  <h3>Parsed i18n with parsed placeholders</h3>
  <p>{{ t("goto", { DESTINATION: "CLUJ NAPOCA", NUMBER: 10 }) }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
