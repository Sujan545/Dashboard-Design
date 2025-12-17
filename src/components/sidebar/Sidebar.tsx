import {
  LayoutDashboard,
  Upload,
  FileText,
  ListOrdered,
  BarChart3,
  CreditCard,
  ShieldCheck,
  Settings,
  Building
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const items = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Data Import",
      path: "/data-import",
      icon: Upload,
    },
    {
      label: "Templates",
      path: "/templates",
      icon: FileText,
    },
    {
      label: "Sequences",
      path: "/sequences",
      icon: ListOrdered,
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: BarChart3,
    },
    {
      label: "Payment Portal",
      path: "/payments",
      icon: CreditCard,
    },
    {
      label: "Compliance",
      path: "/compliance",
      icon: ShieldCheck,
    },
    {
      label: "Settings",
      path: "/settings",
      icon: Settings,
    },

  ];
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-300">
      <div className=" flex gap-2 items-center p-4 font-bold text-lg border border-b border-gray-300">
        <div className="bg-gray-900 p-2 text-gray-50 rounded-lg">
          <Building />
        </div>
        <div>
          CollectPro
          <p className="text-xs text-gray-500"> Collection Platform </p>
        </div>
      </div>
      <nav className="py-3">
        {items.map(({ label, path, icon: Icon }) => (
          <NavLink key={path} to={path} className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-md`}>
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

