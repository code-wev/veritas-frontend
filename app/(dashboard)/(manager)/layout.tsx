import RoleGuard from "@/components/shared/role-guard";
import { ROLES } from "@/constants/roles";

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoleGuard allowedRoles={[ROLES.MANAGER, ROLES.ADMIN]}>
      {children}
    </RoleGuard>
  );
}
