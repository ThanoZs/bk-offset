/**
 * SEO.jsx — Component for managing page metadata and social tags.
 * Integrates with react-helmet-async for dynamic head updates.
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO — Centralized metadata controller for search engine optimization.
 * 
 * @param {Object} props
 * @param {string} props.title - The primary page title.
 * @param {string} props.description - Brief summary for search snippets.
 * @param {string} props.keywords - Comma-separated list of search terms.
 */
export function SEO({ title, description, keywords }) {
  const siteName = "BK Offset Printing";
  const canonicalUrl = "https://thanozs.github.io/bk-offset/";

  return (
    <Helmet>
      {/* ── Standard Metadata ── */}
      <title>{title} | {siteName}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* ── Open Graph (Facebook/LinkedIn) ── */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      
      {/* ── Twitter Cards ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* ── Technical Directives ── */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
