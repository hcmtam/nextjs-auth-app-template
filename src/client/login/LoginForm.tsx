import {
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
import { CheckboxInput, PasswordInput, TextInput } from "../common/form-inputs";
import { GithubSVG, GoggleSVG } from "../common/svg";
import { useRouter } from "next/navigation";

type LoginFormFields = {
  userEmail: string;
  password: string;
  rememberMe: boolean;
};

export interface LoginFormInterface {}

export const LoginForm: React.FC<LoginFormInterface> = (
  props: LoginFormInterface
) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({});

  const { push } = useRouter();

  const onFormSubmit: SubmitHandler<LoginFormFields> = async (
    data: LoginFormFields
  ) => {
    await signIn("credentials", {
      username: data.userEmail,
      password: data.password,
      callbackUrl: "/u/dashboard",
    });
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full h-full p-8 pt-12">
        <span className="text-3xl">Sign In</span>

        <form
          className="pb-7 pt-10 border-b border-stone-300"
          onSubmit={handleSubmit(onFormSubmit)}
        >
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
                label={"Password"}
                field={"password"}
                placeholder="**********"
                register={register}
                required={true}
              />

              <CheckboxInput
                label={"Remember Me"}
                field={"rememberMe"}
                register={register}
              />
            </div>

            <button
              type="submit"
              className={`flex justify-center items-center w-full text-stone-100
            shadow-lg py-1.5 bg-stone-700 border rounded-lg `}
            >
              <span>Sign In</span>
            </button>
          </div>
        </form>

        <div
          className={`flex flex-col justify-center items-center border-b border-stone-500 pt-2 pb-4`}
        >
          <div className="flex flex-col justify-center items-center w-full">
            <div className="text-sm text-stone-800 mb-2">Or Continue With</div>

            <div className="flex flex-row justify-around w-full items-center">
              <button
                className="flex items-center justify-center rounded-lg border border-stone-800 
            text-stone-800 bg-stone-200 w-40 p-2"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "/u/dashboard",
                  })
                }
              >
                <GoggleSVG />
                <span className="ml-2">Google</span>
              </button>
              <button
                className="flex items-center justify-center rounded-lg border  border-stone-800
            text-stone-800 bg-stone-200 w-40 p-2"
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "/u/dashboard",
                  })
                }
              >
                <GithubSVG />
                <span className="ml-2">Github</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="pt-6 font-light flex flex-row justify-center items-center
        text-stone-800 text-sm"
        >
          <span>New around here?</span>
          <div
            className="pl-1 font-semibold cursor-pointer"
            onClick={() => {
              push(`/sign/sign-up`);
            }}
          >
            <span>Create Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};
