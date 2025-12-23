import { notFound } from "next/navigation";
import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import ourServices from "@/lib/our-services";
import Image from "next/image";
// import { useTranslations } from "use-intl";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all services at build time
export async function generateStaticParams() {
  return Object.keys(ourServices).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  // const service = ourServices[slug];
  const service = ourServices[slug as keyof typeof ourServices];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.paragraphs?.[0] || "",
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  // const t = useTranslations("home");
  // const service = ourServices[slug];
  const service = ourServices[slug as keyof typeof ourServices];

  // Use Next.js notFound() for proper 404 handling
  if (!service) {
    notFound();
  }

  const { title, paragraphs, imageSrc } = service;

  return (
    <section className="py-12 md:py-16">
      <Container className="flex flex-col" id="service-details">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Content Section */}
          <div className="flex-1 lg:flex-3">
            <GradientText
              Element="h1"
              text={title}
              classNames="mb-6 text-3xl font-bold md:mb-8 md:text-[40px] lg:text-5xl"
            />
            <div className="flex flex-col gap-4 md:gap-6">
              {paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-justify md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 lg:flex-2">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-square">
              <Image
                src={`/our-services/${imageSrc}`}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
