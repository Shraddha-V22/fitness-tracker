import React from "react";

export default function ModalProvider({ children, closeModal, open }) {
  return (
    open && (
      <div className="absolute left-0 top-0 grid min-h-[100vh] w-full place-items-center bg-black/30">
        <div className="flex flex-col gap-2 border bg-white p-4">
          <button className="ml-auto" onClick={closeModal}>
            X
          </button>
          <div>{children}</div>
        </div>
      </div>
    )
  );
}
