"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import AuthLayout from "../_layout";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { LOGIN_SCHEMA } from "@/lib/schema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config/firebase";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const debug = false;

function Login() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: LOGIN_SCHEMA,

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // ! form values
        debug && console.log(values);

        const response = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        debug && console.log(response);

        if (response) {
          // ! 1) redirect to the home screen
          router.replace("/");

          // ! 2) setting success toast here . . .
          toast({
            title: "User Logged in Successfully",
            action: <ToastAction altText="close the toast">Close</ToastAction>,
          });
        }
      } catch (err) {
        console.error(err.message);

        // ! setting the toast here . . .
        toast({
          title: err.message,
          description: `${err.message}: Error occurred while sign up`,
          action: <ToastAction altText="Retry user sign up">Retry</ToastAction>,
        });
        // ! toast set . . .
      } finally {
        // ! performing cleanup here . . .
        setSubmitting(false);
        resetForm();
      }
    },
  });

  // useEffect(() => {
  //   debug && console.log("is submitting: " + formik.isSubmitting);
  // }, [formik.isSubmitting]);

  return (
    <AuthLayout>
      <Button
        className="self-end text-[15px] font-medium"
        variant="ghost"
        onClick={() => router.push("/sign-up")}
      >
        Register
      </Button>
      <form
        className="h-full w-full flex items-center justify-center flex-col"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col space-y-4 items-center mb-8">
          <h3 className="text-black font-semibold text-2xl lg:text-3xl">
            Sign into your account
          </h3>
          <p className="text-gray-500/90 text-[15px] font-medium text-center">
            Enter your email below to sign in
          </p>
        </div>

        <Input
          type="email"
          placeholder="Email"
          className={
            formik.touched.email && formik.errors.email
              ? `px-4 py-6 w-full lg:w-[440px] xl:w-[500px] placeholder:text-[15px] placeholder:font-medium border-red-300`
              : `px-4 py-6 w-full lg:w-[440px] xl:w-[500px] placeholder:text-[15px] placeholder:font-medium`
          }
          {...formik.getFieldProps("email")}
        />

        <Input
          type="password"
          placeholder="Password"
          className={
            formik.touched.password && formik.errors.password
              ? `px-4 py-6 w-full lg:w-[440px] xl:w-[500px] placeholder:text-[15px] placeholder:font-medium border-red-300 mt-2`
              : `px-4 py-6 w-full lg:w-[440px] xl:w-[500px] placeholder:text-[15px] placeholder:font-medium mt-2`
          }
          {...formik.getFieldProps("password")}
        />
        {/* {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null} */}

        <Button
          className="w-full lg:w-[440px] xl:w-[500px] mt-2 p-6 text-[15px] font-medium"
          disabled={formik.isSubmitting}
          type="submit"
        >
          {formik.isSubmitting ? (
            <div className="loader"></div>
          ) : (
            "Sign In with Email"
          )}
        </Button>

        <div className="flex flex-row items-center justify-center my-6">
          <Separator className="hidden lg:flex w-[150px]" />
          <p className="text-[15px] text-gray-500/90 font-medium mx-3 text-center">
            {"or continue with".toUpperCase()}
          </p>
          <Separator className="hidden lg:flex w-[150px]" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-[440px] xl:w-[500px] gap-3">
          <Button
            className="w-full p-6 text-[15px] font-medium"
            variant="outline"
          >
            <p className="text-black text-[15px] font-medium flex items-center gap-3">
              <FaGoogle />
              Google
            </p>
          </Button>
          <Button className="w-full flex items-center gap-3 p-6 text-[15px] font-medium">
            <FaGithub className="w-[16px] h-[16px]" />
            Github
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
