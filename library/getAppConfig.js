import { getDomain } from "../static/scripts/helpers";

async function fetchLocale(locale) {
  const response = await fetch(`${_I18N_PATH_}${locale}.json`, {
    method: "GET",
  });

  if (response.status >= 200 && response.status <= 299) {
    return await response.json();
  }

  throw Error("Failed fetching i18n");
}

function getLocaleWhenNoPreset(domain) {
  if (domain === "com") {
    return "en";
  }
  if (domain === "ro") {
    return "ro";
  }
  if (domain === "es") {
    return "es";
  }
  return domain;
}

export default async function getAppConfig() {
  try {
    const domain = getDomain();
    const locale = getLocaleWhenNoPreset(domain);

    const i18n = fetchLocale(locale);

    const appConfig = {
      domain,
      locale,
      i18n: await i18n,
    };

    return appConfig;
  } catch (e) {
    return e;
  }
}
