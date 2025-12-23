import {
  LayoutDashboard,
  Upload,
  FileText,
  ListOrdered,
  BarChart3,
  CreditCard,
  ShieldCheck,
  Settings,
  Building,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const items = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Data Import", path: "/data-import", icon: Upload },
    { label: "Templates", path: "/templates", icon: FileText },
    { label: "Sequences", path: "/sequences", icon: ListOrdered },
    { label: "Analytics", path: "/analytics", icon: BarChart3 },
    { label: "Payment Portal", path: "/payments", icon: CreditCard },
    { label: "Compliance", path: "/compliance", icon: ShieldCheck },
    { label: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-300 flex flex-col justify-between">
      <div>
      {/* 🔒 Fixed Header */}
      <div className="flex gap-2 items-center p-4 font-bold text-lg border-b border-gray-300 shrink-0">
        <div className="bg-gray-900 p-2 text-gray-50 rounded-lg">
          <Building />
        </div>
        <div className="font-normal text-md">
          CollectPro
          <p className="text-xs text-gray-500">Collection Platform</p>
        </div>
      </div>

      {/* 🔽 Scrollable Navigation */}
      <nav className="justify-between overflow-y-auto py-4">
        {items.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 mx-2 rounded-md text-sm font-medium transition
     whitespace-nowrap
     ${isActive
                ? "bg-gray-100"
                : ""
              }`
            }
          >
            <Icon size={18} className="shrink-0" />
            <span className="font-normal">{label}</span>
          </NavLink>
        ))}          

      </nav>
      </div>
        <div className="flex gap-4 items-center justify-start p-4 border-t border-t-gray-300">
          <div className="p-2 rounded-full bg-gray-200"><p className="text-sm">JD</p></div>
          <div className="flex flex-col gap-0"><p className="text-sm">John Doe</p> <p className="text-gray-500 text-xs">Admin</p></div>
        </div>
    </aside>
  );
}
