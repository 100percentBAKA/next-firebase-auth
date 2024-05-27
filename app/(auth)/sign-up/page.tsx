"use client";

import { Button } from "@/components/ui/button";
import AuthLayout from "../_layout";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { REGISTER_SCHEMA } from "@/lib/schema";
import { useFormik } from "formik";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  auth,
  githubProvider,
  googleProvider,
} from "@/firebase/config/firebase";
import { useState } from "react";

const debug = true;

function Register() {
  const router = useRouter();
  const { toast } = useToast();

  // Single state object to handle loading
  const [loading, setLoading] = useState({ google: false, github: false });

  // Function triggered upon clicking the google button
  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, google: true }));

    try {
      const result = await signInWithPopup(auth, googleProvider);
      debug && console.log(result);

      router.replace("/");

      toast({
        title: "Signed in with Google",
        action: <ToastAction altText="close the toast">Close</ToastAction>,
      });
    } catch (err) {
      if (err instanceof Error) {
        debug && console.error(err.message);

        toast({
          title: "Authentication error",
          description: `${err.message}`,
          action: <ToastAction altText="auth error">Close</ToastAction>,
        });
      }
    } finally {
      setLoading((prev) => ({ ...prev, google: false }));
    }
  };

  // Function triggered upon clicking the github button
  const handleGithubSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, github: true }));

    try {
      // Replace with actual GitHub sign-in logic
      const result = await signInWithPopup(auth, githubProvider);
      debug && console.log(result);

      router.replace("/");

      toast({
        title: "Signed in with Github",
        action: <ToastAction altText="close the toast">Close</ToastAction>,
      });
    } catch (err) {
      if (err instanceof Error) {
        debug && console.error(err.message);

        toast({
          title: "Authentication error",
          description: `${err.message}`,
          action: <ToastAction altText="auth error">Close</ToastAction>,
        });
      }
    } finally {
      setLoading((prev) => ({ ...prev, github: false }));
    }
  };

  // Form handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: REGISTER_SCHEMA,

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );

        debug && console.log(response);
        // 1) Redirect the user to the root
        router.replace("/");
        // 2) Display the toast
        toast({
          title: "User Registered Successfully",
          action: <ToastAction altText="close the toast">Close</ToastAction>,
        });
      } catch (err) {
        if (err instanceof Error) {
          debug && console.error(err.message);

          toast({
            title: "Authentication error",
            description: `${err.message}`,
            action: <ToastAction altText="auth error">Retry</ToastAction>,
          });
        }
      } finally {
        // Perform clean up here
        setSubmitting(false);
        resetForm();
      }
    },
  });

  return (
    <AuthLayout>
      <Button
        className="self-end text-[15px] font-medium"
        variant="ghost"
        onClick={() => router.push("/sign-in")}
      >
        Login
      </Button>
      <form
        className="h-full w-full flex items-center justify-center flex-col"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col space-y-4 items-center mb-8">
          <h3 className="text-black font-semibold text-2xl lg:text-3xl">
            Create an account
          </h3>
          <p className="text-gray-500/90 text-[15px] font-medium text-center">
            Enter your email below to create your account
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

        <Button
          className="w-full lg:w-[440px] xl:w-[500px] mt-2 p-6 text-[15px] font-medium"
          disabled={formik.isSubmitting}
          type="submit"
        >
          {formik.isSubmitting ? (
            <div className="loader"></div>
          ) : (
            "Sign up with Email"
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
            onClick={(e) => handleGoogleSignIn(e)}
            // Passing the event to prevent default behavior of the form
          >
            <p className="text-black text-[15px] font-medium flex items-center gap-3">
              <FaGoogle />
              {loading.google ? <div className="loader"></div> : "Google"}
            </p>
          </Button>
          <Button
            className="w-full flex items-center gap-3 p-6 text-[15px] font-medium"
            onClick={(e) => handleGithubSignIn(e)}
            // Passing the event to prevent default behavior of the form
          >
            <FaGithub className="w-[16px] h-[16px]" />
            {loading.github ? <div className="loader"></div> : "Github"}
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
