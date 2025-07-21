import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Heart,
  Calendar,
  TrendingUp,
  Settings,
  MessageCircle,
  Play,
  Users,
  Store,
  GraduationCap,
  Award,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const menuItems = [
  { icon: Home, label: "الرئيسية", href: "/dental-supply", active: true },
  { icon: Heart, label: "المفضلة", href: "/favorites" },
  { icon: Calendar, label: "القادم قريباً", href: "/coming" },
  { icon: TrendingUp, label: "الأكثر رواجاً", href: "/trending" },
  { icon: Users, label: "الموردين", href: "/suppliers" },
  { icon: Store, label: "العلامات التجارية", href: "/brands" },
  { icon: GraduationCap, label: "قسم الطلاب", href: "/students" },
  { icon: Settings, label: "الإعدادات", href: "/settings" },
  { icon: MessageCircle, label: "الدعم", href: "/support" },
];

const continueWatching = [
  {
    title: "أحدث تقنيات طب الأسنان",
    subtitle: "تعلم الجديد",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
    progress: 65,
    type: "تعليمي",
  },
  {
    title: "معدات التعقيم الحديثة",
    subtitle: "دلي�� شامل",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&h=200&fit=crop",
    progress: 30,
    type: "تقني",
  },
  {
    title: "إدارة العيادة الرقمية",
    subtitle: "نصائح وحلول",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
    progress: 85,
    type: "إداري",
  },
];

export default function ModernSidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn("w-80 bg-gray-900 text-white min-h-screen p-6", className)}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
          <Package className="w-6 h-6 text-gray-900" />
        </div>
        <span className="text-xl font-bold">قسم الخدمات</span>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2 mb-8">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
              item.active
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800",
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Continue Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Play className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-semibold text-gray-300">
            متابعة التعلم
          </span>
        </div>

        {continueWatching.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:bg-gray-750 transition-colors"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>

              {/* Type Badge */}
              <div className="absolute top-3 left-3 bg-black bg-opacity-60 px-2 py-1 rounded-full">
                <span className="text-xs text-white">{item.type}</span>
              </div>
            </div>

            <div className="p-4">
              <h4 className="font-semibold text-sm mb-1 line-clamp-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-400 mb-3">{item.subtitle}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">
                <div
                  className="bg-yellow-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-400">
                {item.progress}% مكتمل
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="space-y-3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 justify-center">
            <MessageCircle className="w-4 h-4" />
            طلب استشارة
          </button>
          <button className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 justify-center">
            <Calendar className="w-4 h-4" />
            حجز موعد
          </button>
        </div>
      </div>
    </div>
  );
}
