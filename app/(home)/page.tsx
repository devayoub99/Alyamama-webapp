import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import Header from "@/components/header";
import Hero from "@/components/hero";
import OurParnters from "@/components/our-partners";
import OurServices from "@/components/our-services";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <section className="flex flex-col min-h-dvh">
        <Header />
        <Hero />
      </section>
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <OurParnters />

      <GetStarted />
      <ContactUs />
      <Footer />
    </>
  );
}
