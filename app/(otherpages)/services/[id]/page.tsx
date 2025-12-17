"use client";

import Container from "@/components/container";
import GradientText from "@/components/gradient-text";
import ourServices from "@/lib/our-services";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "use-intl";

const page = ({ props }) => {
  const pathname = usePathname();
  const insuranceType = pathname.replace("/services/", "");

  const t = useTranslations("home");

  // const insuranceType = lastPathnameSegment.slice(1);

  const { title, paragraphs, imageSrc } = ourServices[insuranceType];

  // const paragraphs

  return (
    <section>
      <Container
        className="flex flex-col"
        id="about-us"
        // noPadding
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-3">
            <GradientText
              Element="h2"
              text={t(title)}
              classNames="mb-8 text-3xl font-bold md:text-[40px]"
            />
            <div className="flex flex-col gap-4">
              {paragraphs?.map((paragraph, index) => (
                <p key={index} className="text-lg text-justify">
                  {t(paragraph)}
                </p>
              ))}
            </div>
          </div>
          <Image
            src={`/our-services/${imageSrc}`}
            alt={t(title)}
            width={400}
            height={400}
            className="flex-2"
          />
        </div>
      </Container>
    </section>
  );
};

export default page;
