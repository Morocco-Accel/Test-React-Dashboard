import { useLoginTask } from "api";
import { useAuth } from "core";
import * as React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

export function Signin() {
  const { signIn, token } = useAuth();
  const { mutate, isLoading, status } = useLoginTask();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = async (DATA: IFormInput) => {
    console.log(status);
    mutate(DATA, {
      onSuccess: (data) => {
        signIn({
          access: data?.data.access_token,
          refresh: data?.data.refresh_token,
          email: data?.data.email,
          role: data?.data.role,
        });
        <Navigate to={"/"} />;
      },
      onError: () => {
        console.log("error");
      },
    });
  }; // your form submit function which will invoke after successful validation

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>First Name</label>
        <input
          {...register("email", {
            required: true,
            maxLength: 20,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors?.email?.type === "required" && <p>This field is required</p>}
        {errors?.email?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.email?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
        <label>Laste Name</label>
        <input {...register("password")} />
        {errors?.password?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}
