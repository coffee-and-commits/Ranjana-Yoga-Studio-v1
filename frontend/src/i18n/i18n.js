import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// Site copy is served by the PHP backend (see php-backend/api/content.php)
// and fetched at runtime, rather than bundled at build time — this is what
// lets admin content-editor saves go live without rebuilding the frontend.
const CONTENT_URL = process.env.REACT_APP_CONTENT_URL || '/php-backend/api/content.php';

export const i18nReady = i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: `${CONTENT_URL}?key=site-content-en`,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

// Safe wrapper around t(key, { returnObjects: true }) for list content
// (stats, cards, testimonials, etc.). If the backend fetch hasn't resolved
// yet or failed, i18next returns the raw key string instead of an array —
// this guards every call site from crashing on array.map().
export function tArray(t, key) {
  const value = t(key, { returnObjects: true });
  return Array.isArray(value) ? value : [];
}
