import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Ellora Event Management`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Ellora Event Management`,
      description: service.description,
      images: [{ url: service.heroImage, width: 1600, height: 900 }],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return <ServiceDetailClient service={service} />;
}
