"use client";
import { ReactElement, useState } from "react";
import { AddSVG, DollarSVG, SubtractSVG } from "../svg";
import { UseFormRegister } from "react-hook-form";

export interface QuantityInputInterface {
  label: string;
  field: string;
  register: UseFormRegister<any>;
}

export const QuantityInput: React.FC<QuantityInputInterface> = (
  props: QuantityInputInterface
) => {
  const { label, field, register } = props;

  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex justify-between items-center pb-4">
      <label className="block mb-2 text-sm font-medium text-stone-900">
        {label}
      </label>
      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          onClick={() => setQuantity((quantity) => quantity - 1)}
          className="bg-stone-100 dark:bg-stone-700 dark:hover:bg-stone-600 
            dark:border-stone-600 hover:bg-stone-200 border border-stone-300 
            rounded-s-lg p-3 h-11"
        >
          <SubtractSVG />
        </button>
        <input
          {...register(field)}
          type="text"
          className="bg-stone-50 border-x-0 border-stone-300 h-11 text-center 
          text-stone-900 text-sm block w-full py-2.5 dark:bg-stone-700 
          dark:border-stone-600 dark:placeholder-gray-400 dark:text-white"
          placeholder=""
          required
          value={quantity}
          autoComplete="off"
        />
        <button
          type="button"
          onClick={() => setQuantity((quantity) => quantity + 1)}
          className="bg-stone-100 dark:bg-stone-700 dark:hover:bg-stone-600 
          dark:border-stone-600 hover:bg-stone-200 border border-stone-300 
          rounded-e-lg p-3 h-11 focus:ring-gray-100"
        >
          <AddSVG />
        </button>
      </div>
    </div>
  );
};
