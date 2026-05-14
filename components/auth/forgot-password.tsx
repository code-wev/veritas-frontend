"use client";

import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";
import { DEMO_USERS } from "@/constants/demo-users";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = DEMO_USERS.find((u) => u.email === email);
    if (user) {
      login(email);
      router.push("/");
    } else {
      setError("Invalid demo credentials. Use one of the accounts below.");
    }
  };

  return (
    <section className='flex min-h-screen w-full items-center justify-center'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-stretch '>
        {/* Left Side: Form */}
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
            <h1 className='text-4xl font-medium sf-mono'>Forget Password</h1>
            <p className='text-(--text-weak) text-base mt-2'>
              Enter your registered email address, and we&apos;ll send you a
              reset link.
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4 mt-8'>
            {error && (
              <div className='text-red-500 text-sm bg-red-50 p-3 rounded'>
                {error}
              </div>
            )}
            <div>
              <label className='text-sm font-medium text-[#1F2937] px-1'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='Email'
                className='w-full p-4 border rounded-xl mt-2'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type='submit'
              className='w-full p-4 sf-mono bg-[#4D7C0F] text-white rounded-xl hover:bg-[#3a5f0c] transition-all mt-5'>
              Send Reset Link
            </button>
          </form>
        </div>

        {/* Right Side: Rounded image card */}
        <div className='relative hidden md:block w-full h-full min-h-screen overflow-hidden shadow-sm'>
          <Image
            src='/auth/auth.jpg'
            alt='Style City Signup Background'
            fill
            className='object-cover object-center scale-[1.02]'
            priority
          />
        </div>
      </div>
    </section>
  );
}
