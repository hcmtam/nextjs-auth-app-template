"use client";

import { UseFormRegister } from "react-hook-form";

export type DropdownSelection = {
  label: string;
  value: string;
};

export interface DropdownInterface {
  label: string;
  field: string;
  placeholder: string;
  list: DropdownSelection[];
  selected?: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

export const Dropdown: React.FC<DropdownInterface> = (
  props: DropdownInterface
) => {
  const {
    label,
    field,
    register,
    placeholder,
    list,
    selected,
    required = false,
  } = props;

  return (
    <div className="pb-4">
      <div className="flex flex-row">
        <label className="block mb-2 text-sm font-medium text-stone-900">
          {label ?? "Select an option"}
        </label>
        {required && <span className="text-red-800 pl-1">*</span>}
      </div>

      <select
        {...register(field)}
        className="bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>{selected ?? placeholder}</option>

        {list.map((i: DropdownSelection) => {
          return <option value={i.value}>{i.label}</option>;
        })}
      </select>
    </div>
  );
};
