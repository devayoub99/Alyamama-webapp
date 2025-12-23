import { X } from "lucide-react";
import React, { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
  close: () => void;
}

const Modal = ({ children, footer, close }: ModalProps) => {
  // Disable the Scrolling when modal opened
  useEffect((): (() => void) => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="fixed inset-0 backdrop-blur-sm bg-black/50"
        onClick={close}
      ></div>

      {/* Modal */}
      <div className="absolute pb-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-2xl w-120 max-w-[80%] 10 top-1/2 left-1/2 ">
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <button className="px-2 pt-2 cursor-pointer " onClick={close}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="px-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-between px-4 pt-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
