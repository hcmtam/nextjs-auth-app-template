import { register } from "module";
import {
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import {
  CheckboxInput,
  PasswordInput,
  TextInput,
  ToggleInput,
} from "../common/form-inputs";
import { useSignUpContext } from "./SignUpContext";
import { createUser } from "@/server/authorize";

type SignUpFormFields = {
  userEmail: string;
  password: string;
  rePassword: string;
  termsAndConditions: boolean;
};

export interface SignUpFormInterface {}

export const SignUpForm: React.FC<SignUpFormInterface> = (
  props: SignUpFormInterface
) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormFields>({});

  const { setStep } = useSignUpContext();

  const onFormSubmit: SubmitHandler<SignUpFormFields> = async (
    data: SignUpFormFields
  ) => {
    console.log(`login`, JSON.stringify(data));
    setStep(2);

    ("use server");
    await createUser(data);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full h-full p-8">
        <div className="flex flex-row justify-center w-full pb-5">
          <div className="">Create Account</div>
        </div>

        <form className="" onSubmit={handleSubmit(onFormSubmit)}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <TextInput
                label={"Email Address"}
                field={"userEmail"}
                placeholder="user@example.com"
                register={register}
                required={true}
              />

              <PasswordInput
                label={"Enter Password"}
                field={"password"}
                placeholder="**********"
                register={register}
                required={true}
              />

              <PasswordInput
                label={"Re-enter Password"}
                field={"rePassword"}
                placeholder="**********"
                register={register}
                required={true}
              />

              <CheckboxInput
                label={"Accept Terms and Conditions"}
                field={"termsAndConditions"}
                register={register}
                required={true}
              />
            </div>

            <button
              type="submit"
              className={`flex justify-center items-center w-full text-stone-800
            py-1.5 bg-stone-200 border-stone-500 border rounded-lg `}
            >
              <span>Create Account</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
