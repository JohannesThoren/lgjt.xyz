import { ChangeEventHandler, ReactNode } from "react";

export default function Select({
        className,
        children,
        id,
        name,
        onChange,
}: {
        className?: string,
        children: ReactNode[] | ReactNode;
        id: string;
        name: string;
        onChange?: ChangeEventHandler<HTMLSelectElement>;
}) {
        return (
                <select
                        className={`w-full bg-stone-300 dark:bg-stone-700 text-stone-700 dark:text-stone-300 py-1 px-2 rounded-md ${className}`}
                        id={id}
                        name={name}
                        onChange={onChange}
                >
                        <option value={-1}></option>
                        {children}
                </select>
        );
}
