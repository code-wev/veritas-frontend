"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function VerifyIdentityPage() {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    const newCode = [...code];
    pasted.split("").forEach((char, i) => {
      newCode[i] = char;
    });
    setCode(newCode);
    const nextEmpty = pasted.length < 6 ? pasted.length : 5;
    inputRefs.current[nextEmpty]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    // Replace this logic with your actual verification
    if (fullCode.length === 6) {
      // login(email); router.push("/");
    } else {
      setError("Please enter the complete 6-digit code.");
    }
  };

  return (
    <section className='flex min-h-screen w-full items-center justify-center'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 items-stretch'>
        {/* Left Side: Form */}
        <div className='w-full mx-auto md:mx-0 flex flex-col justify-center px-6 md:px-10 lg:px-24 py-6 min-h-screen'>
          <div className='text-center'>
            <Link
              href='/'
              className='text-4xl font-bold text-center mb-8 flex justify-center items-center'>
              <Image
                src='/logo.png'
                priority
                alt='Logo'
                width={90}
                height={90}
              />
            </Link>
            <h1 className='text-4xl font-medium sf-mono'>Verify Identity</h1>
            <p className='text-(--text-weak) text-base mt-2'>
              Please input the verification code send to your email
              ****oe@example.com
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
                Enter verification code
              </label>
              <div className='flex gap-1 mt-2 justify-between'>
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type='text'
                    inputMode='numeric'
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className='w-full max-w-30 max-h-16 aspect-square text-center text-lg font-semibold border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#4D7C0F] focus:border-transparent transition-all'
                  />
                ))}
              </div>
            </div>
            <button
              type='submit'
              className='w-full p-4 sf-mono bg-[#4D7C0F] text-white rounded-xl hover:bg-[#3a5f0c] transition-all mt-5'>
              Resend code
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
