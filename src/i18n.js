import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_de from "./translations/de/common.json";
import common_en from "./translations/en/common.json";

i18n.
    use(initReactI18next)
    .init({
        interpolation: { escapeValue: false },
        lng: 'en',
        resources: {
            en: {
                common: common_en
            },
            de: {
                common: common_de
            },
        },
        fallbackLng: 'en',

    });


export default i18n