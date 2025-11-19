import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Header />

      <Hero />

      <section id="test" className="h-[1000px]">
        Test sections
      </section>

      <section id="contact-us" className="h-[1000px]">
        Contact us section
      </section>
    </div>
  );
}
