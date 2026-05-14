import RoleGuard from "@/components/shared/role-guard";
import { ROLES } from "@/constants/roles";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoleGuard allowedRoles={[ROLES.ADMIN]}>
      {children}
    </RoleGuard>
  );
}
