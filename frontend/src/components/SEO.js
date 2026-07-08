import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function SEO({ page }) {
  const { t } = useTranslation();
  const title = t(`seo.${page}.title`);
  const description = t(`seo.${page}.description`);
  const ogTitle = t(`seo.${page}.ogTitle`);
  const ogDescription = t(`seo.${page}.ogDescription`);
  const ogImage = t(`seo.${page}.ogImage`);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
