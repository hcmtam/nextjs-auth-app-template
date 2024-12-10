"use client";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import styles from "@/styles/Common.module.scss";

export interface TextInputInterface {
  label: string;
  field: string;
  placeholder: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

export const TextInput: React.FC<TextInputInterface> = (
  props: TextInputInterface
) => {
  const { label, field, placeholder, register, required = false } = props;

  return (
    <div className="pb-4">
      <div className="flex flex-row">
        <label className="block mb-2 text-sm font-medium text-stone-900">
          {label}
        </label>
        {required && <span className="text-red-800 pl-1">*</span>}
      </div>

      <input
        {...register(field)}
        type="text"
        className={`border bg-stone-400 border-stone-300 text-stone-900 text-sm rounded-lg
        block w-full p-2.5 
        dark:bg-stone-700 dark:border-stone-600 dark:placeholder-gray-400 
        dark:text-white ${styles.inputAutoFill}`}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
      />
    </div>
  );
};
