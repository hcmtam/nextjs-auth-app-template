import {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
  useContext,
} from "react";

type SignUpContextType = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const defaultSignUpContextValues = {
  step: 1,
  setStep: () => null,
};

const SignUpContext = createContext<SignUpContextType>(
  defaultSignUpContextValues
);

export const SignUpContextProvider = ({ children, ...props }) => {
  const {} = props;

  const [step, setStep] = useState<number>(1);

  return (
    <SignUpContext.Provider
      value={{
        step,
        setStep,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUpContext = () => {
  return useContext(SignUpContext);
};
