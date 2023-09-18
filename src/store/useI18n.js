import _ from "lodash";
import { useI18nStore } from "./i18nStore.js";
import { storeToRefs } from "pinia";

export const useI18n = () => {
  const i18nStore = useI18nStore();

  const t = (key, options = null) => {
    const value = _.get(i18nStore.i18n, key);
    return value
      ? options
        ? replaceTranslatedPlaceHolders(value, options)
        : value
      : key;
  };

  const hasI18nKey = (key) => {
    return _.has(i18n, key);
  };

  const hasI18nValue = (key) => {
    return !!_.get(i18n, key);
  };

  const replaceTranslatedPlaceHolders = (value, options) => {
    let result = value;

    for (const key in options) {
      const placeholder = `[${key.toUpperCase()}]`;
      const placeholderValue = options[key];
      result = result.replaceAll(placeholder, placeholderValue);
    }

    return result;
  };

  return {
    t,
    hasI18nKey,
    hasI18nValue,
  };
};
