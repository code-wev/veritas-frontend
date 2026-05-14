import { ROLES, type Role } from "../constants/roles";
import {
  LayoutDashboard,
  Users,
  Settings,
  Briefcase,
  FileText,
  BarChart3,
  Shield,
  FileCheck,
  AlertCircle,
  BarChart4,
  Eye,
  ClipboardList,
  Lock,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: any;
  badge?: string;
  disabled?: boolean;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

export const DASHBOARD_NAVIGATION: Record<Role, NavSection[]> = {
  [ROLES.USER]: [
    {
      items: [
        { label: "Overview", href: "/user-overview", icon: LayoutDashboard },
        { label: "My Profile", href: "/profile", icon: Users },
      ],
    },
  ],
  [ROLES.MANAGER]: [
    {
      items: [
        { label: "Overview", href: "/manager-overview", icon: LayoutDashboard },
        { label: "Team", href: "/team", icon: Users },
        { label: "Projects", href: "/projects", icon: Briefcase },
      ],
    },
  ],
  [ROLES.ADMIN]: [
    {
      items: [
        {
          label: "Firm Overview",
          href: "/firm-overview",
          icon: LayoutDashboard,
          badge: "01",
        },
      ],
    },
    {
      title: "Operation",
      items: [
        {
          label: "Engagement Dashboard",
          href: "/engagement-dashboard",
          icon: BarChart3,
        },
        {
          label: "MSB Registration",
          href: "/msb-registration",
          icon: FileCheck,
          disabled: true,
        },
        {
          label: "Governance",
          href: "/governance",
          icon: Shield,
          disabled: true,
        },
        {
          label: "AML Program",
          href: "/aml-program",
          icon: Briefcase,
          disabled: true,
        },
        { label: "KYC Review", href: "/kyc-review", icon: Eye, disabled: true },
        {
          label: "Transaction Reporting",
          href: "/transaction-reporting",
          icon: BarChart4,
          disabled: true,
        },
        {
          label: "Transaction Monitoring",
          href: "/transaction-monitoring",
          icon: BarChart3,
          disabled: true,
        },
        {
          label: "Client Files",
          href: "/client-files",
          icon: FileText,
          disabled: true,
        },
        {
          label: "Findings",
          href: "/findings",
          icon: AlertCircle,
          disabled: true,
        },
        {
          label: "Audit Report",
          href: "/audit-report",
          icon: ClipboardList,
          disabled: true,
        },
      ],
    },
    {
      title: "Administration",
      items: [
        {
          label: "Security & Access",
          href: "/security",
          icon: Lock,
          disabled: true,
        },
        {
          label: "Settings",
          href: "/settings",
          icon: Settings,
          disabled: true,
        },
      ],
    },
  ],
};
