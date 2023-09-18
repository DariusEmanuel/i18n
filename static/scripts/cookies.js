const getDataCulture = (domain) => {
  switch (domain) {
    case "com":
      return "EN";
    case "ro":
      return "RO";
    case "es":
      return "ES";
    default:
      return domain.toUpperCase();
  }
};

export const addCookieConsent = (domain) => {
  const dataCulture = getDataCulture(domain);
  const script = document.createElement("script");
  script.id = "CookieConsent";
  script.src = "https://policy.app.cookieinformation.com/uc.js";
  script.setAttribute("data-culture", dataCulture);
  document.getElementsByTagName("body")[0].appendChild(script);
};
