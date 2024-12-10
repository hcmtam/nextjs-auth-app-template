"use client";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center text-stone-300">
          <span className="text-sm font-light">
            NextJs Auth App Template © 2024
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
