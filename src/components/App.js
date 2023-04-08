import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";
import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

function App() {
  const [count, setCount] = useState(0);
  const [translate, i18n, ready] =
    useTranslation(/* пространство имён перевода */);
  // translate функция перевода из библиотеки
  // i18n для смены языка
  // ready укажет загружены ли переводы

  const lngs = {
    en: { nativeName: "English" },
    ru: { nativeName: "Russian" },
  };

  // вставляем столько кнопок сколько у нас ключей в LNGS(к тому же сохраняет в локальном языке выбранный язык)
  const putButton = Object.keys(lngs).map((lng) => (
    <button
      key={lng}
      style={{ fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal" }}
      type="submit"
      onClick={() => {
        i18n.changeLanguage(lng)
        setCount(count + 1)
      }}
    >
      {lngs[lng].nativeName}
    </button>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {putButton}
        <h2><i>{translate('counter', { count })}</i></h2>
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate("description.part2")}
        </a>
      <Footer translate={translate} />
      </header>
    </div>
  );
}

export default App;
