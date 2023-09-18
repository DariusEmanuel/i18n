export const setLoadingMessageText = (domain) => {
  const loadingMessageEl = document.createElement("div");

  loadingMessageEl.setAttribute("id", "app-loading-message");

  const translations = {
    com:
      "<h1>Please wait while we load the app</h1>\n" +
      "    <p>If this message does not disappear, please go back and start over.</p>",
    ro:
      "<h1>Asteapta pana site-ul se incarca</h1>\n" +
      "    <p>Daca nu dispare mesajul acesta, da-ti refresh la pagina.</p>",
  };

  loadingMessageEl.innerHTML = translations[domain];
  document.body.appendChild(loadingMessageEl);
};
