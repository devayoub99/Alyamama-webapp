import Header from "@/components/header";
import Hero from "@/components/hero";
import React from "react";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col min-h-dvh">
        <Header />
        <Hero />
      </section>
      {children}
    </>
  );
}
