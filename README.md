# Vue 3 + TypeScript + Vite

Requirments:

node v16.18

npm install

npm run dev

Experience seamless internationalization with my Vite + Vue + Pinia application.

My app leverages the power of Pinia stores and the i18n
composable to provide multi-language support effortlessly.
Whether it's the English (en) or Romanian (ro) version, my app dynamically serves the right content based on your domain, ensuring a localized and user-friendly experience for your audience.

- How I access the domain?

```
const url = window.location.hostname;
  const domain = url ? url.substring(url.lastIndexOf(".") + 1) : "com";
  return ["0", "localhost"].includes(domain) ? "com" : domain;
```

- Where the translations are stored? (key value pairs)

[English Translations](public/i18n/en.json)

[Romanian Translations](public/i18n/ro.json)

- How do I use the translations in the app?

```
import { useI18n } from "../src/store/useI18n.js";

const {t} = useI18n();

console.log(t('key'));
```

      - ex of key:
      coffee_with_aliens.title => "Coffee with Aliens"
