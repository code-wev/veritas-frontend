"use client";

import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";
import { DEMO_USERS } from "@/constants/demo-users";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
            <h1 className='text-4xl font-medium sf-mono'>Login</h1>
            <p className='text-(--text-weak) text-base mt-2'>
              Enter your email and password to login
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4 mt-8'>
            {error && (
              <div className='text-red-500 text-sm bg-red-50 p-3 rounded'>
                {error}
              </div>
            )}
            <input
              type='email'
              placeholder='Email'
              className='w-full p-4 border rounded-xl'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                className='w-full p-4 pr-12 border rounded-xl'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700'>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button
              type='submit'
              className='w-full p-4 sf-mono bg-[#4D7C0F] text-white rounded-xl hover:bg-[#3a5f0c] transition-all'>
              Login
            </button>
          </form>

          <p className='text-center text-sm text-[#1C1F1A] mt-8'>
            Don&apos;t have an account?{" "}
            <Link
              href='/signup'
              className='text-primary font-semibold hover:underline'>
              Sign up
            </Link>
          </p>

          <div className='border-t pt-8 mt-8'>
            <p className='text-sm text-slate-500 mb-4'>
              Demo Accounts (Click to autofill):
            </p>
            <div className='grid gap-2'>
              {DEMO_USERS.map((user) => (
                <button
                  key={user.email}
                  onClick={() => {
                    setEmail(user.email);
                    setPassword("password123");
                  }}
                  className='w-full p-3 border rounded-lg text-left text-sm hover:bg-slate-50'>
                  <span className='font-medium'>{user.email}</span> -{" "}
                  <span className='text-slate-400'>{user.role}</span>
                </button>
              ))}
            </div>
          </div>
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
