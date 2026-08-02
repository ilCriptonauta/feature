import { Metadata } from 'next';
import { 
  OOX_FEATURES, 
  getFeatureBySlug 
} from '@/data/features';
import FeatureDetailClient from './FeatureDetailClient';

export async function generateStaticParams() {
  return OOX_FEATURES.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const feature = getFeatureBySlug(params.slug);
  if (!feature) {
    return {
      title: 'Feature non trovata | OOX',
    };
  }

  const shareUrl = `https://ooxfeatures.art/features/${feature.slug}`;
  const title = feature.title.it;
  const description = feature.fullDescription.it;
  const shortDescription = feature.shortDescription.it;

  return {
    title: `${title} | OOX Features`,
    description: description,
    openGraph: {
      title: `${title} - OOX Features`,
      description: shortDescription,
      url: shareUrl,
      siteName: 'OOX Features',
      images: [
        {
          url: feature.ogImage,
          width: 1200,
          height: 630,
          alt: `${title} Preview`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - OOX Features`,
      description: shortDescription,
      site: '@OOXart',
      creator: '@OOXart',
      images: [feature.ogImage],
    },
  };
}

export default function FeatureDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <FeatureDetailClient slug={params.slug} />;
}
