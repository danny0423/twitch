import {type ReactElement} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App(): ReactElement {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div>
      <nav>
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/about">{t('nav.about')}</Link>
        <div style={{ marginLeft: 'auto' }}>
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en">{t('language.en')}</option>
            <option value="zh-TW">{t('language.zh-TW')}</option>
          </select>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;