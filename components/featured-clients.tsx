import { useTranslations } from "next-intl";
import { featuredClients } from "@/lib";

import Container from "./container";
import GradientText from "./gradient-text";
import ClientLogo from "./client-logo";

const OurParnters = () => {
  const t = useTranslations("home");

  return (
    <section>
      <Container
        className="relative flex flex-col items-center"
        id="featured-clients"
      >
        <GradientText
          Element="h2"
          text={t("featured_clients")}
          classNames="mb-12 text-3xl font-bold md:text-[40px] pb-4"
        />

        <div className="grid grid-cols-4 gap-8 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 place-items-center">
          {featuredClients?.map((client) => (
            <ClientLogo key={client.id} {...client} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurParnters;
