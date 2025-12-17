import Header from "@/components/header";
import React from "react";

export default async function OtherPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <section className="flex flex-col min-h-dvh"> */}
      <Header />
      {/* </section> */}
      {children}
    </>
  );
}
