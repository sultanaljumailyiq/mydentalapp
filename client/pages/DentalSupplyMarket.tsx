import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Star,
  Heart,
  Bell,
  User,
  Menu,
  Grid3X3,
  List,
  ArrowRight,
  Plus,
  Zap,
  Gift,
  Clock,
  Eye,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import MainPromoHero from "@/components/MainPromoHero";
import FeaturedOffers from "@/components/FeaturedOffers";
import ModernSidebar from "@/components/ModernSidebar";
import ModernCategories from "@/components/ModernCategories";
import ModernBrands from "@/components/ModernBrands";
import ModernProductCards from "@/components/ModernProductCards";
import ModernSuppliers from "@/components/ModernSuppliers";
import MedicalServicesMap from "@/components/MedicalServicesMap";
import AIConsultations from "@/components/AIConsultations";

export default function DentalSupplyMarket() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-80 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <ModernSidebar />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Modern Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Logo and Title */}
              <Link to="/admin" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-gray-900">
                    قسم الخدمات
                  </h1>
                  <p className="text-xs text-gray-500">
                    منصة الخدمات الطبية المتكاملة
                  </p>
                </div>
              </Link>

              {/* Search Bar */}
              <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="ابحث عن المعدات والمستلزمات..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-12 pl-4 py-3 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-right"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                </button>
                <Link
                  to="/admin"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
                >
                  لوحة التحكم
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-12 overflow-y-auto">
          {/* Hero Section */}
          <section>
            <MainPromoHero className="rounded-2xl overflow-hidden shadow-2xl" />
          </section>

          {/* Categories Section */}
          <section>
            <ModernCategories />
          </section>

          {/* Medical Services Map Section */}
          <section>
            <MedicalServicesMap />
          </section>

          {/* AI Consultations Section */}
          <section>
            <AIConsultations />
          </section>

          {/* Featured Offers */}
          <section>
            <FeaturedOffers />
          </section>

          {/* Brands Section */}
          <section>
            <ModernBrands />
          </section>

          {/* Products Section */}
          <section>
            <ModernProductCards
              title="المنتجات الجديدة"
              products={[]}
              showCarousel={true}
            />
          </section>

          {/* Suppliers Section */}
          <section>
            <ModernSuppliers />
          </section>

          {/* Additional Products Section */}
          <section>
            <ModernProductCards
              title="الأكثر مبيعاً"
              products={[]}
              showCarousel={false}
            />
          </section>

          {/* Trending Section */}
          <section>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">
                    الأكثر طلباً هذا الأسبوع
                  </h2>
                </div>
                <p className="text-lg opacity-90 mb-6">
                  اكتشف المنتجات الأكثر شعبية في المجتمع الطبي
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
                    استكشف الآن
                  </button>
                  <button className="border border-indigo-300 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500 transition-colors">
                    عرض التفاصيل
                  </button>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            </div>
          </section>

          {/* Quick Stats */}
          <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "10K+", label: "منتج متوفر", icon: "📦" },
                { number: "500+", label: "مورد موثق", icon: "🏢" },
                { number: "50K+", label: "عميل راضي", icon: "😊" },
                { number: "24/7", label: "دعم فني", icon: "🎧" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center max-w-md mx-auto">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  ابق على اطلاع بأحدث العروض
                </h3>
                <p className="text-gray-600 mb-6">
                  اشترك في النشرة الإخبارية لتصلك أحدث المنتجات والعروض الحصرية
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    اشتراك
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all flex items-center justify-center">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
