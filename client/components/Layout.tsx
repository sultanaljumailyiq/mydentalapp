import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  Users,
  Stethoscope,
  UserCheck,
  CreditCard,
  TrendingUp,
  ShoppingCart,
  Package,
  BarChart3,
  HelpCircle,
  Search,
  Plus,
  Bell,
  User,
  ChevronDown,
  Building,
  MapPin,
  Menu,
  X,
  Settings,
  Globe,
  Crown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import AIAssistant from "./AIAssistant";

// We'll make these dynamic based on the translation function

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { language, isRTL, t } = useI18n();

  const isActive = (href: string) => {
    if (href === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(href);
  };

  // Navigation with Arabic as primary language
  const navigation = [{ name: "لوحة التحكم", href: "/admin", icon: Home }];

  const clinicNavigation = [
    { name: "الحجوزات", href: "/admin/reservations", icon: Calendar },
    { name: "المرضى", href: "/admin/patients", icon: Users },
    { name: "العلاجات", href: "/admin/treatments", icon: Stethoscope },
    { name: "الطاقم", href: "/admin/staff", icon: UserCheck },
  ];

  const financeNavigation = [
    { name: "الحسابات", href: "/admin/accounts", icon: CreditCard },
    { name: "المبيعات", href: "/admin/sales", icon: TrendingUp },
    { name: "المشتريات", href: "/admin/purchases", icon: ShoppingCart },
    { name: "طرق الدفع", href: "/admin/payment-methods", icon: CreditCard },
  ];

  const physicalAssetNavigation = [
    { name: "المخزون", href: "/admin/stocks", icon: Package },
    { name: "الأجهزة", href: "/admin/peripherals", icon: Package },
  ];

  const otherNavigation = [
    { name: "التقارير", href: "/admin/reports", icon: BarChart3 },
    { name: "الدعم الفني", href: "/admin/support", icon: HelpCircle },
    { name: "إدارة المنصة", href: "/admin/platform-admin", icon: BarChart3 },
    {
      name: "إدارة السوق",
      href: "/admin/marketplace-admin",
      icon: ShoppingCart,
    },
    {
      name: "إعدادات المدير العام",
      href: "/admin/super-admin-settings",
      icon: Crown,
    },
  ];

  return (
    <div className={cn("min-h-screen bg-gray-50", isRTL ? "font-arabic" : "")}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 bg-white border-gray-200 transform transition-all duration-300 ease-in-out shadow-lg",
          sidebarCollapsed ? "w-16" : "w-64",
          isRTL ? "right-0 border-l" : "left-0 border-r",
          sidebarOpen
            ? "translate-x-0"
            : isRTL
              ? "translate-x-full lg:translate-x-0"
              : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200">
          <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          {!sidebarCollapsed && (
            <span className="text-base font-semibold text-gray-900 transition-opacity duration-300">
              {t("app.name")}
            </span>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden lg:flex ml-auto p-1 rounded-lg hover:bg-gray-100 transition-all duration-200"
          >
            <ChevronDown
              className={cn(
                "w-4 h-4 text-gray-600 transform transition-transform duration-300",
                sidebarCollapsed ? "rotate-90" : "-rotate-90",
              )}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2">
          {/* Main Dashboard */}
          <div className="px-2 mb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  sidebarCollapsed ? "justify-center gap-0" : "gap-3",
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50",
                )}
                title={sidebarCollapsed ? item.name : undefined}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && item.name}
              </Link>
            ))}
          </div>

          {/* Clinic Section */}
          <div className="px-2 mb-4">
            <div
              className={cn(
                "px-3 py-1",
                sidebarCollapsed
                  ? "border-b border-gray-200 mx-2"
                  : "text-xs font-semibold text-gray-500 uppercase tracking-wide",
              )}
            >
              {!sidebarCollapsed && "العيادة"}
            </div>
            {clinicNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  sidebarCollapsed ? "justify-center gap-0" : "gap-3",
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50",
                )}
                title={sidebarCollapsed ? item.name : undefined}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && item.name}
              </Link>
            ))}
          </div>

          {/* Finance Section */}
          <div className="px-2 mb-4">
            <div
              className={cn(
                "px-3 py-1",
                sidebarCollapsed
                  ? "border-b border-gray-200 mx-2"
                  : "text-xs font-semibold text-gray-500 uppercase tracking-wide",
              )}
            >
              {!sidebarCollapsed && "المالية"}
            </div>
            {financeNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  sidebarCollapsed ? "justify-center gap-0" : "gap-3",
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50",
                )}
                title={sidebarCollapsed ? item.name : undefined}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && item.name}
              </Link>
            ))}
          </div>

          {/* Physical Asset Section */}
          <div className="px-2 mb-4">
            <div
              className={cn(
                "px-3 py-1",
                sidebarCollapsed
                  ? "border-b border-gray-200 mx-2"
                  : "text-xs font-semibold text-gray-500 uppercase tracking-wide",
              )}
            >
              {!sidebarCollapsed && "الأصول المادية"}
            </div>
            {physicalAssetNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  sidebarCollapsed ? "justify-center gap-0" : "gap-3",
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50",
                )}
                title={sidebarCollapsed ? item.name : undefined}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && item.name}
              </Link>
            ))}
          </div>

          {/* Other Section */}
          <div className="px-2">
            <div
              className={cn(
                "px-3 py-1 mb-2",
                sidebarCollapsed
                  ? "border-b border-gray-200 mx-2"
                  : "text-xs font-semibold text-gray-500 uppercase tracking-wide",
              )}
            >
              {!sidebarCollapsed && "أخرى"}
            </div>
            {otherNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  sidebarCollapsed ? "justify-center gap-0" : "gap-3",
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50",
                )}
                title={sidebarCollapsed ? item.name : undefined}
              >
                <item.icon className="w-5 h-5" />
                {!sidebarCollapsed && item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          sidebarCollapsed
            ? isRTL
              ? "lg:pr-16"
              : "lg:pl-16"
            : isRTL
              ? "lg:pr-64"
              : "lg:pl-64",
        )}
      >
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
              >
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900">
                {location.pathname === "/admin"
                  ? "لوحة التحكم"
                  : location.pathname.includes("reservations")
                    ? "الحجوزات"
                    : location.pathname.includes("patients")
                      ? "المرضى"
                      : location.pathname.includes("treatments")
                        ? "العلاجات"
                        : location.pathname.includes("staff")
                          ? "الطاقم"
                          : location.pathname.includes("accounts")
                            ? "الحسابات"
                            : location.pathname.includes("sales")
                              ? "المبيعات"
                              : location.pathname.includes("purchases")
                                ? "المشتريات"
                                : location.pathname.includes("stocks")
                                  ? "المخزون"
                                  : location.pathname.includes("reports")
                                    ? "التقارير"
                                    : location.pathname.includes("support")
                                      ? "الدعم الفني"
                                      : location.pathname.includes(
                                            "platform-admin",
                                          )
                                        ? "إدارة المنصة"
                                        : location.pathname.includes(
                                              "marketplace-admin",
                                            )
                                          ? "إدارة السوق"
                                          : location.pathname.includes(
                                                "super-admin-settings",
                                              )
                                            ? "إعدادات المدير العام"
                                            : "لوحة التحكم"}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ابحث عن أي شيء هنا..."
                  className="pl-10 pr-4 py-2 w-80 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Mobile search button */}
              <button className="md:hidden p-2 text-gray-500 hover:text-gray-700">
                <Search className="w-5 h-5" />
              </button>

              {/* Add Button */}
              <button className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Plus className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-gray-700 transition-colors">
                <Bell className="w-5 h-5" />
              </button>

              {/* User Menu */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <div className="text-sm hidden lg:block">
                  <div className="font-medium text-gray-900">أحمد العراقي</div>
                  <div className="text-gray-500">المدير العام</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 hidden lg:block" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
