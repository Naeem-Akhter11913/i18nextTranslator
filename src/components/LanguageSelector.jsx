import { useState } from "react";
import {useTranslation} from "react-i18next";

export const LanguageSelector = () =>
{
    const [t, i18n] = useTranslation('common');
    const [language, setLanguage] = useState('en'); // Default language is English

    const changeLanguage = (selectedLanguage) => {
      setLanguage(selectedLanguage);

    };
    console.log(language)
    return <div>
        <span>{t('language-selector.label')} </span>
        <button onClick={() => changeLanguage('de')}>{t('language-selector.languages.de')}</button>
        &nbsp;
        <button onClick={() => changeLanguage('en')}>{t('language-selector.languages.en')}</button>
    </div>
}
