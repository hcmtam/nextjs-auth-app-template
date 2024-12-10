import { SignUpContextProvider } from "./SignUpContext";
import { SignUpForm } from "./SignUpForm";
import { SignUpProgressIndicator } from "./SignUpProgressIndicator";
import styles from "@/styles/Sign.module.scss";

interface SignUpContainerType {}

export const SignUpContainer: React.FC<SignUpContainerType> = () => {
  return (
    <>
      <SignUpContextProvider>
        <SignUpProgressIndicator />
        <div
          className={`bg-stone-300 rounded-lg shadow-lg shadow-stone-300
    ${styles.signUpFormBox}`}
        >
          <SignUpForm />
        </div>
      </SignUpContextProvider>
    </>
  );
};
