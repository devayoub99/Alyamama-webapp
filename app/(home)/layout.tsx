import Header from "@/components/header";
import Hero from "@/components/hero";
import React from "react";
import ClientModal from "./@modal/(.)client/[id]/page";

export default async function HomeLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col min-h-dvh">
        <Header />
        <Hero />
      </section>
      {modal}
      <main>{children}</main>
    </>
  );
}
