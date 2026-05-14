"use client";

import { useAuth } from "@/providers/auth-provider";
import { ROLES } from "@/constants/roles";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardRootPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push("/login");
        return;
      }

      // Role-based redirection logic
      switch (user.role) {
        case ROLES.ADMIN:
          router.push("/firm-overview");
          break;
        case ROLES.MANAGER:
          router.push("/manager-overview");
          break;
        case ROLES.USER:
          router.push("/user-overview");
          break;
        default:
          router.push("/login");
      }
    }
  }, [user, isLoading, router]);

  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#516933] border-t-transparent" />
    </div>
  );
}
