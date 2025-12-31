import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import FeaturedClients from "@/components/featured-clients";
import OurServices from "@/components/our-services";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <FeaturedClients />
      <GetStarted />
      <ContactUs />
    </>
  );
}
