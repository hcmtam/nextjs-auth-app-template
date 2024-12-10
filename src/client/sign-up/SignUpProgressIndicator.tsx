import styles from "@/styles/Sign.module.scss";
import { useSignUpContext } from "./SignUpContext";

interface SignUpProgressIndicatorType {}

export const SignUpProgressIndicator: React.FC<
  SignUpProgressIndicatorType
> = () => {
  const { step, setStep } = useSignUpContext();

  return (
    <div className="flex flex-row w-full justify-center pb-16">
      <ol className="relative flex items-center w-full">
        <li className={`flex flex-col items-center w-1/2`}>
          <div className="relative flex items-center">
            <div className="flex items-center justify-center rounded-full pl-9">
              <span className="flex w-3 h-3 m-1 bg-stone-300 rounded-full"></span>
            </div>
            <div
              className={`absolute flex h-0.5 bg-gradient-to-r from-stone-300 to-stone-500
                ${styles.indicatorBar}`}
            ></div>
          </div>
          <div className="">
            <span className="text-sm text-stone-300">Create Account</span>
          </div>
        </li>
        <li className={`flex flex-col items-center w-1/2`}>
          <div className="relative flex items-center">
            <div className="flex items-center justify-center rounded-full">
              <span className="flex w-3 h-3 m-1 bg-stone-500 rounded-full"></span>
            </div>
          </div>
          <div className="">
            <span className="text-sm text-stone-300">Verfication</span>
          </div>
        </li>
      </ol>
    </div>
  );
};
