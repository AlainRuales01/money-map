'use client';
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Evita el scroll cuando el modal está abierto
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
        (document.body.style.overflow = "auto");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
