import React from "react";

export default function FirmOverviewPage() {
  return (
    <div className='space-y-6'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold tracking-tight'>Firm Overview</h1>
        <p className='text-slate-500'>
          Welcome to your firm overview dashboard.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {/* Placeholder cards for a professional look */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className='rounded-xl border border-slate-200 bg-white p-6 shadow-sm'>
            <div className='h-4 w-24 rounded bg-slate-100 mb-4' />
            <div className='h-8 w-16 rounded bg-slate-200' />
          </div>
        ))}
      </div>
    </div>
  );
}
