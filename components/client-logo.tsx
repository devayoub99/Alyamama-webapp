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
          <div className="flex items-center justify-between gap-4">
            <div className="z-1">
              <h3 className="text-xl font-semibold">{t(client.name)}</h3>
              {client.description?.map((part: string, index: number) => (
                <p key={index} className="py-2 leading-8 text-justify">
                  {t(part)}
                </p>
              ))}
            </div>
            <Image
              src={client.imageSrc}
              alt={client.name}
              className="rounded-full cursor-pointer opacity-80 w-30 h-30"
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
