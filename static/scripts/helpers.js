const getLanguageCode = (domain) => {
  switch (domain) {
    case "com":
      return "en";
    case "ro":
      return "ro";
    case "es":
      return "es";
    default:
      return domain;
  }
};

export const setSiteLanguage = (domain) => {
  document.documentElement.lang = getLanguageCode(domain);
};

export const getDomain = () => {
  const url = window.location.hostname;
  const domain = url ? url.substring(url.lastIndexOf(".") + 1) : "com";
  return ["0", "localhost"].includes(domain) ? "com" : domain;
};
