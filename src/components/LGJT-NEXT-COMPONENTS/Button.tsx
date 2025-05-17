"use client";
import { ReactNode } from "react";

export default function Button({
  callback,
  id,
  className,
  children,
  disabled,
}: {
  callback?: () => Promise<void>;
  id?: string;
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      id={id}
      className={`p-1 rounded-md hover:cursor-pointer  ${className}`}
      onClick={() => (callback ? callback() : () => {})}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
