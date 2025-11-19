import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zhTW from './locales/zh-TW.json';

// 從localStorage獲取保存的語言，如果沒有則使用瀏覽器語言或預設為繁體中文
const savedLanguage = localStorage.getItem('language');
const browserLanguage = navigator.language;
const defaultLanguage = savedLanguage || browserLanguage.startsWith('zh') ? 'zh-TW' : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      'zh-TW': {
        translation: zhTW,
      },
    },
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// 導出全局 t 函數
export const tr = i18n.t.bind(i18n);

export default i18n;
