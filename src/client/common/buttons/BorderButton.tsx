"use client";

interface BorderButtonProps {
  onClick: () => void;
  customClass?: string;
  label?: string;
  disabled?: boolean;
  svg?: React.ReactElement;
}

export const BorderButton: React.FC<BorderButtonProps> = (
  props: BorderButtonProps
) => {
  const { onClick, label, disabled, customClass = "", svg } = props;
  const btnClass =
    "flex items-center justify-center rounded-lg border border-stone-400 text-stone-400";

  return (
    <button
      className={`${btnClass} ${customClass}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label && <span>{label}</span>}
      {svg && <span>{svg}</span>}
    </button>
  );
};
