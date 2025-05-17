"use client";

import { useState } from "react";
import { MdClose } from "react-icons/md";
import Button from "./Button";

export default function Dialog({
  children,
  openButtonText,
  onClose,
  onOpen,
}: {
  children?: React.ReactNode;
  openButtonText: string;
  onOpen?: () => void;
  onClose?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        className="bg-stone-300 dark:bg-stone-700 hover:bg-stone-300 hover:dark:bg-stone-600 w-full !mb-0"
        callback={async () => {
          onOpen?.();
          setOpen(true);
        }}
      >
        {openButtonText}
      </Button>
      {open && (
        <div
          id="backdrop"
          className="fixed z-50 inset-0 bg-black/10 backdrop-blur grid place-items-center !m-0"
        >
          <div className="flex flex-col w-[95dvw] h-[95dvh] md:w-[70%] md:h-fit lg:w-[40%] items-center">
            <button
              className="p-1 dark:bg-stone-800 rounded-md bg-stone-200 my-2 w-fit ml-auto text-2xl hover:dark:bg-stone-700 hover:bg-stone-300 hover:cursor-pointer"
              onClick={() => {
                setOpen(false);
                if (onClose != undefined) onClose();
              }}
            >
              <MdClose />
            </button>
            <div
              className="w-full h-full overflow-y-auto dark:bg-stone-800 rounded-md bg-stone-200 p-5 "
              onSubmit={() => {
                setOpen(false);
              }}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
