import styles from "@/styles/Sign.module.scss";
import RICIBs from "react-individual-character-input-boxes";
import { TextInput } from "../common/form-inputs";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type SignUpVerificationFields = {
  userEmail: string;
  password: string;
  rePassword: string;
  termsAndConditions: boolean;
};

interface SignUpVerificationType {}

export const SignUpVerification: React.FC<SignUpVerificationType> = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpVerificationFields>({});

  const onFormSubmit: SubmitHandler<SignUpVerificationFields> = async (
    data: SignUpVerificationFields
  ) => {
    console.log(`login`, JSON.stringify(data));
  };

  const [focusVerify, setFocusVerify] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full h-full p-8">
        <div className="flex flex-row justify-center w-full pb-5">
          <div className="text-indigo-800">Verification</div>

          <form className="" onSubmit={handleSubmit(onFormSubmit)}>
            <div className="flex flex-col h-full justify-between">
              <TextInput
                label={"Email Address"}
                field={"userEmail"}
                placeholder="user@piggyinsights.com"
                register={register}
                required={true}
              />

              <div onClick={() => setFocusVerify(true)}>
                <RICIBs
                  amount={6}
                  autoFocus={focusVerify}
                  handleOutputString={(e) => {}}
                  inputProps={{
                    className: "2fa-box text-stone-600",
                    placeholder: "_",
                  }}
                  inputRegExp={/^[0-9]$/}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
