import { addCookieConsent } from "./cookies";
import { setLoadingMessageText } from "./loading";
import { getDomain, setSiteLanguage } from "./helpers";

const domain = getDomain();
console.log(domain);
setSiteLanguage(domain);
setLoadingMessageText(domain);
addCookieConsent(domain);
