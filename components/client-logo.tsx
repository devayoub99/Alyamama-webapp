"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./modal";
import { useTranslations } from "next-intl";

const ClientLogo = ({ ...client }) => {
  const t = useTranslations("home");

  const [clientModal, setClientModal] = useState(false);
  const handleToggleModal = () => setClientModal((prev) => !prev);

  return (
    <div className="">
      <button onClick={handleToggleModal}>
        <Image
          src={client.imageSrc}
          alt={client.name}
          className="transition-all rounded-full cursor-pointer hover:scale-110"
          width={110}
          height={110}
        />
      </button>
      {clientModal && (
        <Modal close={handleToggleModal}>
          <div className="flex justify-between">
            <div className="z-1">
              <h3 className="text-xl font-semibold">{t(client.name)}</h3>
              {/* <p>{t(client.description)}</p> */}
              {client.description?.map(
                (part, index): { part: string; index: number } => (
                  <p key={index} className="py-2 leading-8">
                    {t(part)}
                  </p>
                )
              )}
            </div>
            <Image
              src={client.imageSrc}
              alt={client.name}
              className="fixed right-0 z-0 transition-all rounded-full cursor-pointer opacity-10 hover:scale-110"
              width={160}
              height={160}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ClientLogo;
