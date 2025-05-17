"use client";

import { useEffect, useState } from "react";
import P from "./P";

export default function ErrorDialog({ error }: { error?: string }) {
  const [open, setOpen] = useState(!!error);
  useEffect(() => {
    setOpen(!!error);
  }, [error]);

  return (
    <>
      {open && (
        <div
          id="backdrop"
          className="fixed z-[1000] inset-0 bg-black/10 backdrop-blur grid place-items-center"
        >
          <div className="flex flex-col">
            <button
              className="py-1 px-2 dark:bg-stone-800 rounded-md bg-stone-200 my-2 w-fit ml-auto"
              onClick={() => {
                setOpen(false);
              }}
            >
              Close
            </button>
            <P>{error}</P>
          </div>
        </div>
      )}
    </>
  );
}
