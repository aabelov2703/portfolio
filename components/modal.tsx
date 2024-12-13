import React, { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};
const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full">{children}</div>
    </div>
  );
};

export default Modal;
