import Header from "@/components/header";
import React from "react";

export default async function OtherPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
