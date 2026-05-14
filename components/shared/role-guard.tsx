"use client";

import { useAuth } from "@/providers/auth-provider";
import { type Role } from "@/constants/roles";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: Role[];
  redirectTo?: string;
}

export default function RoleGuard({
  children,
  allowedRoles,
  redirectTo = "/",
}: RoleGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !isLoading) {
      if (!user) {
        router.push("/login");
      } else if (!allowedRoles.includes(user.role)) {
        router.push(redirectTo);
      }
    }
  }, [user, isLoading, router, isMounted, allowedRoles, redirectTo]);

  if (!isMounted || isLoading) return null;
  if (!user || !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
}
