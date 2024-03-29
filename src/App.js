import './App.css';
import { useTranslation } from "react-i18next";
import { HighOrderComponent } from "./components/HighOrderComponent";
import { LanguageSelector } from "./components/LanguageSelector";
import TranslatedComponent from './translations/TranslatedComponent';
// import common_de from '././translations/de/common.json'
import { useState } from 'react';


function App() {

    const { t } = useTranslation("common");
    // const trans = common_de.app;

    const [language, setLanguage] = useState('en'); // Default language is English

    const changeLanguage = (selectedLanguage) => {
      setLanguage(selectedLanguage);
    };

    return (
        <TranslatedComponent language={language}>
            <div className="App">
                {/* <LanguageSelector/> */}
                <div>
                    <button onClick={() => changeLanguage('en')}>English</button>
                    <button onClick={() => changeLanguage('de')}>Deutsch</button>
                </div>
                {/* <p>{t("language-selector.label")} </p> */}
                <p>i am a good boy</p>
                <p>You are a good girl</p>
                <p>You are a student</p>
                <p>today is holi day</p>
                <p>yesterday is fun day</p>
                {/* <HighOrderComponent/> */}
            </div>
        </TranslatedComponent>
    );
}

export default App;

