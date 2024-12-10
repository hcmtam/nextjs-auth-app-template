"use client";

const AddSVG: React.FC = () => {
  return (
    <>
      <svg
        className="w-3 h-3 text-stone-900 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
    </>
  );
};

export default AddSVG;
