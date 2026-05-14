"use client";

import { useAuth } from "@/providers/auth-provider";
import { DASHBOARD_NAVIGATION } from "@/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronsLeft, ChevronsRight, LogOut, X } from "lucide-react";
import Image from "next/image";

type SidebarProps = {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
};

export function Sidebar({
  isCollapsed,
  isMobileOpen,
  onToggleCollapse,
  onCloseMobile,
}: SidebarProps) {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  if (!user) return null;

  const navItems = DASHBOARD_NAVIGATION[user.role];
  const showLabels = !isCollapsed;

  return (
    <>
      {isMobileOpen ? (
        <button
          type='button'
          aria-label='Close sidebar'
          onClick={onCloseMobile}
          className='fixed inset-0 z-30 bg-slate-950/40 md:hidden'
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex h-screen w-72 flex-col border-r border-slate-200 bg-white p-4 shadow-lg transition-transform duration-300 md:sticky md:top-0 md:z-auto md:shadow-none md:transition-[width,transform] ${
          isCollapsed ? "md:w-24" : "md:w-72"
        } ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className='mb-6 flex items-center justify-between gap-3 rounded-2xl px-3 py-3'>
          <Link
            href='/'
            onClick={onCloseMobile}
            className='flex min-w-0 items-center gap-3 overflow-hidden'>
            <Image
              src='/logo2.png'
              alt='Logo'
              width={120}
              height={120}
              priority
            />
          </Link>

          <button
            type='button'
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            className='hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl   text-slate-700 transition-colors md:inline-flex'>
            {isCollapsed ? (
              <ChevronsRight size={18} />
            ) : (
              <ChevronsLeft size={18} />
            )}
          </button>

          <button
            type='button'
            onClick={onCloseMobile}
            aria-label='Close sidebar'
            className='inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 md:hidden'>
            <X size={18} />
          </button>
        </div>

        <nav className='flex-1 space-y-4 overflow-y-auto'>
          {navItems.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              {section.title && showLabels ? (
                <h3 className='px-3 py-2 text-sm font-semibold tracking-wider text-[#1C1F1A] sf-mono'>
                  {section.title}
                </h3>
              ) : null}
              <div className='space-y-1'>
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onCloseMobile}
                      className={`flex items-center rounded-md px-3 py-3 transition-colors ${
                        isActive
                          ? "bg-(--fill-weak) text-[#1C1F1A]"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      } ${showLabels ? "gap-3 justify-between" : "justify-center"}`}>
                      <div
                        className={`flex items-center ${showLabels ? "gap-3" : ""}`}>
                        <Icon size={20} className='shrink-0' color='#1C1F1A' />
                        {showLabels ? (
                          <span className='truncate text-sm'>{item.label}</span>
                        ) : null}
                      </div>
                      {showLabels && item.badge ? (
                        <span className='shrink-0 rounded-md bg-[#eef4e4] px-2 py-0.5 text-xs font-semibold text-[#516933]'>
                          {item.badge}
                        </span>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <button
          onClick={logout}
          className={`mt-auto flex items-center rounded-xl px-3 py-3 text-red-600 transition-colors hover:bg-red-50 ${
            showLabels ? "gap-3" : "justify-center"
          }`}>
          <LogOut size={20} className='shrink-0' />
          {showLabels ? <span>Logout</span> : null}
        </button>
      </aside>
    </>
  );
}
