"use client";
import { UseFormRegister } from "react-hook-form";

export interface ToggleInputInterface {
  label: string;
  field: string;
  register: UseFormRegister<any>;
}

export const ToggleInput: React.FC<ToggleInputInterface> = (
  props: ToggleInputInterface
) => {
  const { label, field, register } = props;

  return (
    <div className="pb-4">
      <label className="flex justify-between w-full items-center me-5 cursor-pointer">
        <span className="me-3 text-sm font-medium text-stone-900 slider-round">
          {label}
        </span>
        <input {...register(field)} type="checkbox" className="sr-only peer" />
        <div
          className="relative w-11 h-6 bg-stone-200 rounded-full peer 
            dark:bg-stone-700 peer-checked:after:translate-x-full 
            rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
            after:content-[''] after:absolute after:top-0.5 after:start-[2px] 
            after:bg-white after:border-stone-300 after:border after:rounded-full 
            after:h-5 after:w-5 after:transition-all 
            peer-checked:bg-blue-600"
        ></div>
      </label>
    </div>
  );
};
