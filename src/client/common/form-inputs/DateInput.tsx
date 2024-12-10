"use client";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import styles from "@/styles/Common.module.scss";
import { useState, useEffect, useMemo } from "react";
import moment from "moment";

export interface DateInputInterface {
  label: string;
  field: string;
  register: UseFormRegister<any>;
  value?: string;
}

export const DateInput: React.FC<DateInputInterface> = (
  props: DateInputInterface
) => {
  const { label, field, value = undefined, register } = props;

  const [date, setDate] = useState<string>("");

  const currentDate = useMemo(() => {
    return moment().format("YYYY-MM-DD");
  }, []);

  useEffect(() => {
    setDate(currentDate);
  }, []);

  return (
    <div className="pb-4">
      <label className="block mb-2 text-sm font-medium text-stone-900">
        {label}
      </label>
      <input
        {...register(field)}
        type="date"
        className={`border bg-stone-400 border-stone-300 text-stone-900 text-sm rounded-lg
        block w-full p-2.5 
        dark:bg-stone-700 dark:border-stone-600 dark:placeholder-gray-400 
        dark:text-white ${styles.inputAutoFill}`}
        value={date}
        required
        autoComplete="off"
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};
