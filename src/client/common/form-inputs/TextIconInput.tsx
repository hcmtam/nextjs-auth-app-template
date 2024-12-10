"use client";
import { ReactElement } from "react";
import { UseFormRegister } from "react-hook-form";

export interface TextIconInputInterface {
  label: string;
  field: string;
  svg: ReactElement<any, any>;
  placeholder: string;
  register: UseFormRegister<any>;
}

export const TextIconInput: React.FC<TextIconInputInterface> = (
  props: TextIconInputInterface
) => {
  const { label, field, register, svg, placeholder } = props;

  return (
    <div className="pb-4">
      <label className="block mb-2 text-sm font-medium text-stone-900">
        {label ?? ""}
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex text-stone-100 items-center ps-3 pointer-events-none">
          {svg}
        </div>
        <input
          {...register(field)}
          type="text"
          className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-stone-700 dark:border-stone-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
          autoComplete="off"
        />
      </div>
    </div>
  );
};
