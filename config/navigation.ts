import { ROLES, type Role } from "../constants/roles";
import { LayoutDashboard, Users, Settings, Briefcase, FileText, BarChart3 } from "lucide-react";

export const DASHBOARD_NAVIGATION: Record<Role, { label: string; href: string; icon: any }[]> = {
  [ROLES.USER]: [
    { label: "Overview", href: "/user-overview", icon: LayoutDashboard },
    { label: "My Profile", href: "/profile", icon: Users },
  ],
  [ROLES.MANAGER]: [
    { label: "Overview", href: "/manager-overview", icon: LayoutDashboard },
    { label: "Team", href: "/team", icon: Users },
    { label: "Projects", href: "/projects", icon: Briefcase },
  ],
  [ROLES.ADMIN]: [
    { label: "Firm Overview", href: "/firm-overview", icon: LayoutDashboard },
    { label: "Engagement Dashboard", href: "/engagement-dashboard", icon: BarChart3 },
    { label: "User Management", href: "/users", icon: Users },
    { label: "System Logs", href: "/logs", icon: FileText },
    { label: "Settings", href: "/settings", icon: Settings },
  ],
};
