import RoleGuard from "@/components/shared/role-guard";
import { ROLES } from "@/constants/roles";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoleGuard allowedRoles={[ROLES.USER, ROLES.MANAGER, ROLES.ADMIN]}>
      {children}
    </RoleGuard>
  );
}
