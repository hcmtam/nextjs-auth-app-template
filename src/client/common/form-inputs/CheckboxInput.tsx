"use client";
import { UseFormRegister } from "react-hook-form";

export interface CheckboxInputInterface {
  label: string;
  field: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

export const CheckboxInput: React.FC<CheckboxInputInterface> = (
  props: CheckboxInputInterface
) => {
  const { label, field, register, required } = props;

  return (
    <div className="pb-4">
      <div className="flex items-center mb-4">
        <input
          {...register(field)}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-stone-100 border-stone-300 rounded"
          required={required}
        />
        <label className="pl-1 flex w-full items-center me-5 cursor-pointer">
          <span className="text-sm font-medium text-stone-900 slider-round">
            {label}
          </span>
          {required && <span className="text-red-800 pl-1">*</span>}
        </label>
      </div>
    </div>
  );
};
