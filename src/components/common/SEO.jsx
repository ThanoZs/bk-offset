import { Helmet } from 'react-helmet-async';

export function SEO({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title} | BK Offset Printing</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://thanozs.github.io/bk-offset/" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://thanozs.github.io/bk-offset/" />
    </Helmet>
  );
}
