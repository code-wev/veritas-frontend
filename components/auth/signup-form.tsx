"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  return (
    <section className='flex min-h-screen w-full items-center justify-center'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-stretch '>
        {/* Left Side: Rounded image card */}
        <div className='relative hidden md:block w-full h-full min-h-screen overflow-hidden shadow-sm'>
          <Image
            src='/auth/auth.jpg'
            alt='Style City Signup Background'
            fill
            className='object-cover object-center scale-[1.02]'
            priority
          />
        </div>

        {/* Right Side: Form */}
        <div className='w-full mx-auto md:mx-0 flex flex-col justify-center px-6 md:px-10 lg:px-24 py-6 min-h-screen'>
          <div className='text-center'>
            <Link
              href='/'
              className='text-4xl font-bold text-center mb-8 flex justify-center items-center '>
              <Image
                src='/logo.png'
                priority
                alt='Logo'
                width={90}
                height={90}
              />
            </Link>
            <h1 className='text-4xl font-medium sf-mono'>Sign Up</h1>
            <p className='text-(--text-weak) text-base mt-2'>
              Enter your email and password to sign up
            </p>
          </div>

          <div className='space-y-4 mt-8'>
            {/* Email */}
            <div className='space-y-1'>
              <label className='text-sm font-medium text-[#1F2937]'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='@peduarte'
                className='w-full p-4 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-pink-200 mt-3 placeholder:text-(--text-weak)'
              />
            </div>
            {/* Password */}
            <div className='space-y-1'>
              <label className='text-sm font-medium text-[#1F2937]'>
                Password
              </label>
              <div className='relative mt-3'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Enter your password'
                  className='w-full p-4 pr-12 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder:text-(--text-weak)'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600'>
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Retype Password */}
            <div className='space-y-1'>
              <label className='text-sm font-medium text-[#1F2937]'>
                Retype Password
              </label>
              <div className='relative mt-3'>
                <input
                  type={showRetypePassword ? "text" : "password"}
                  placeholder='Retype Password'
                  className='w-full p-4 pr-12 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-pink-200 placeholder:text-(--text-weak)'
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                />
                <button
                  type='button'
                  onClick={() => setShowRetypePassword(!showRetypePassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600'>
                  {showRetypePassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            <button className='w-full sf-mono p-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all'>
              Sign Up
            </button>
          </div>

          <p className='text-center text-sm text-[#1C1F1A] mt-8'>
            Already have an account?{" "}
            <Link
              href='/login'
              className='text-primary font-semibold hover:underline'>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
