import { type SchemaOrg } from 'schema-org';

const SITE_URL = 'https://www.naturalcannabisoil.shop';
const SITE_NAME = 'Natural Cannabis Oil';

export const generateOrganizationSchema = (): SchemaOrg.Organization => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Natural Cannabis Oil',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'Premium Rick Simpson Oil (RSO) and Full Extract Cannabis Oil (FECO) - Medical-grade cannabis extracts for wellness and therapeutic use.',
  sameAs: [
    `${SITE_URL}`,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'Customer Service',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
});

export const generateWebsiteSchema = (): SchemaOrg.WebSite => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const generateBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
): SchemaOrg.BreadcrumbList => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

export const generateProductSchema = (
  product: {
    name: string;
    description: string;
    image: string;
    price: number;
    currency?: string;
    availability?: string;
    ratingValue?: number;
    reviewCount?: number;
  }
): SchemaOrg.Product => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image,
  offers: {
    '@type': 'Offer',
    price: product.price.toString(),
    priceCurrency: product.currency || 'USD',
    availability: product.availability || 'https://schema.org/InStock',
  },
  ...(product.ratingValue && {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.ratingValue.toString(),
      reviewCount: product.reviewCount?.toString() || '1',
    },
  }),
});

export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
): SchemaOrg.FAQPage => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateArticleSchema = (
  article: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
  }
): SchemaOrg.BlogPosting => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.headline,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    '@type': 'Organization',
    name: article.author || SITE_NAME,
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
    },
  },
});

export const generateHowToSchema = (
  howTo: {
    name: string;
    description: string;
    image: string;
    steps: Array<{
      name: string;
      text: string;
      image?: string;
    }>;
  }
): SchemaOrg.HowTo => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: howTo.name,
  description: howTo.description,
  image: howTo.image,
  step: howTo.steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: (index + 1).toString(),
    name: step.name,
    text: step.text,
    ...(step.image && { image: step.image }),
  })),
});

export const SITE_URL_CONSTANT = SITE_URL;
