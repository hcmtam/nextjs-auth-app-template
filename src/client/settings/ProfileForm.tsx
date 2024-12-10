import { register } from "module";
import {
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import styles from "@/styles/Sign.module.scss";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { CheckboxInput, TextInput, ToggleInput } from "../common/form-inputs";
import { GithubSVG, GoggleSVG } from "../common/svg";

type ProfileFormFields = {
  userEmail: string;
  userName?: string;
  password: string;
  firstName?: string;
  lastName?: string;
  profilePic?: string;
};

export interface ProfileFormInterface {
  data: ProfileFormFields;
}

export const ProfileForm: React.FC<ProfileFormInterface> = (
  props: ProfileFormInterface
) => {
  const { data } = props;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormFields>({
    defaultValues: data,
  });

  const onFormSubmit: SubmitHandler<ProfileFormFields> = async (
    data: ProfileFormFields
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
                label={"First Name"}
                field={"firstName"}
                placeholder="**********"
                register={register}
                required={true}
              />

              <TextInput
                label={"Last Name"}
                field={"lastName"}
                placeholder="**********"
                register={register}
                required={true}
              />

              <TextInput
                label={"Email Address"}
                field={"userEmail"}
                placeholder="user@piggyinsights.com"
                register={register}
                required={true}
              />

              <TextInput
                label={"Email Address"}
                field={"userName"}
                placeholder="user@piggyinsights.com"
                register={register}
                required={true}
              />
            </div>

            <button
              type="submit"
              className={`flex justify-center items-center w-full text-stone-100
            shadow-lg py-1.5 bg-indigo-700 border rounded-lg `}
            >
              <span>Sign In</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
