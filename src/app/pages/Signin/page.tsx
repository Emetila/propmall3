"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import image from "@/app/asset/images/loginimg.svg";
import logo from "@/app/asset/logo.svg";
import Image from "next/image";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import style from "./style.module.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { IoKeyOutline } from "react-icons/io5";
import { Open_Sans } from '@next/font/google';

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })

const openSans = Open_Sans({
  subsets: ['latin'],
});

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

type SignInFormData = {
  email: string;
  password: string;
};

export const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(validationSchema),
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (data: SignInFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://staging-api.propmall.io/v1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const result = await response.json();
        setError(result.message || "Failed to sign in");
        setLoading(false);
        return;
      }

      // Simulate a successful response from the API
      const result = await response.json();
      console.log("Sign-in successful:", result);
      localStorage.setItem("token", result.token);
      window.location.href = "/dashboard";
    } catch (err) {
      setError("Something went wrong, please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-start overflow-hidden gap-x-20" >
      <div className="flex-col items-center justify-center py-20 w-1/2 max-sm:w-full max-xsm:w-full xsm:py-0">
        <div className="inline-flex flex-col justify-center items-center p-6 gap-8">
          <Image src={logo} alt="propmall" className="py-3 sm:py-0, m-0" />
          <p>live your dream with smart investments</p>
        </div>
        <div className="py-6">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="example@gmail.com"
                className={`mt-1 block w-full text-gray-700 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="********"
                className={`mt-1 block w-full ${errors.password ? "border-red-500" : ""}`}
              />
              {/* Eye icon to toggle password visibility */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 top-5 pr-3 flex items-center"
              >
                {showPassword ? <RxEyeClosed size={20} /> : <RxEyeOpen size={20} />}
              </button>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
          </form>
        </div>
        <div className="items-start">
          <Link href="/forgot-password" className="flex items-center gap-2">
            <IoKeyOutline className="h-5 w-5 fill-green" />
            <p className="text-green">forgot password?</p>
          </Link>
        </div>

        <div className="flex gap-2 py-5">
          <input type="radio" name="sign-in" id="signed" className="h-5 w-5 accent-green border-green" />
          <label className="text-green">Keep me signed in</label>
        </div>

        <div className="flex justify-between items-center py-10 xsm:py-5">
          <Button type="submit" className="flex items-center w-full h-18 rounded py-4 px-6 text-base xsm:h-10" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </div>

        <div>
          <div className="flex items-center justify-center gap-5 xsm:gap-2">
            <p className="text-dark-violet openSans.className">Continue using</p>
            <div className="flex items-center justify-center justify-items-center drop-shadow-sm gap-3">
            <FcGoogle className="w-8 h-8 shrink-0 xsm:w-5 max-xsm:h-2"/>
            <FaApple className="w-8 h-8 xsm:w-4 max-xsm:h-2" />
            </div>
          </div>
        </div>
        <div className="text-center py-8 xsm:py-4">
          <p>Oh, you are new here? 
            <span><a href="/signup">Sign in</a></span>
          </p>
        </div>
      </div >
      <div className="w-1/2 my-0 -top-36  sm:hidden xsm:hidden md:block lg:block">
        <Image src={image} alt="login" className="w-full my-0 h-100"  />
        <div className="flex flex-col absolute items-center top-80 px-20 py-20">
          <h2 className="text-dark-violet text-xl openSans.className font-bold py-5">You are back!</h2>
          <p className="text-dark-violet">Excited to see how well your investment is doing?</p>
          <Link className="py-5 font-bold" href="/signin">Sign In</Link>
        </div>
      </div>
    </div >
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    //     <FormField
    //       control={form.control}
    //       name="username"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Username</FormLabel>
    //           <FormControl>
    //             <Input placeholder="shadcn" {...field} />
    //           </FormControl>
    //           <FormDescription>
    //             This is your public display name.
    //           </FormDescription>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <Button type="submit">Submit</Button>
    //   </form>
    // </Form>
  )
}
