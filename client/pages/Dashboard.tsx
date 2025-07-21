import React from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Package,
  Star,
  Clock,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SupplyPromoCard from "@/components/SupplyPromoCard";

const Dashboard = () => {
  const { language, isRTL, t } = useI18n();

  const currentDate = new Date().toLocaleDateString(
    language === "ar" ? "ar-IQ" : "en-IQ",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className={`space-y-6 ${isRTL ? "font-arabic" : ""}`}>
      {/* Welcome Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          {language === "ar" ? "صباح الخير، أحمد!" : "Good morning, Ahmed!"}
        </h2>
        <p className="text-gray-600">{currentDate}</p>
      </div>

      {/* Promotional Supply Card */}
      <SupplyPromoCard className="mb-6" />

      {/* Cashflow Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {language === "ar" ? "التدفق النقدي" : "Cashflow"}
              </h3>
              <p className="text-sm text-gray-600">
                {language === "ar" ? "إجمالي رأس المال" : "Total Capital"}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-bold text-gray-900">
                  {language === "ar" ? "13,232 د.ع" : "$13,232"}
                </span>
                <span className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  4.31%
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                {language === "ar" ? "آخر 12 شهر" : "Last 12 month"}
              </p>
              <p className="text-sm text-gray-600">
                {language === "ar"
                  ? "يناير 2022 - ديسمبر 2022"
                  : "January 2022 - December 2022"}
              </p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-gray-600">Chart visualization would be here</p>
              <p className="text-sm text-gray-500">
                Trending upward with total $710,897
              </p>
            </div>
          </div>
        </div>

        {/* Expenses Card */}
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">المصروفات</h3>
            <span className="text-sm text-gray-600">آخر 6 أشهر</span>
          </div>

          {/* Donut Chart Placeholder */}
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-24 h-24">
              <div className="w-24 h-24 rounded-full border-6 border-blue-100"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">
                    80,832 د.ع
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Rental Cost</span>
              </div>
              <span className="text-sm font-medium">30%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Wages</span>
              </div>
              <span className="text-sm font-medium">22%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Medical Cost</span>
              </div>
              <span className="text-sm font-medium">20%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Supplies</span>
              </div>
              <span className="text-sm font-medium">16%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Promotion Cost</span>
              </div>
              <span className="text-sm font-medium">10%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Other</span>
              </div>
              <span className="text-sm font-medium">2%</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 mb-2">TOP EXPENSE</div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Rental Cost</span>
              <span className="text-sm font-bold">$24,000</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-medium">Medical Equipment</span>
              <span className="text-sm font-bold">$16,840</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm font-medium">Supplies</span>
              <span className="text-sm font-bold">$13,594</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Income & Expense */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Income & Expense
          </h3>
          <div className="text-sm text-gray-600 mb-2">Last 6 months</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm">TOTAL INCOME</span>
              </div>
              <span className="text-sm font-bold text-green-600">
                $1,412 ↗ 11%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-red-500" />
                <span className="text-sm">TOTAL EXPENSE</span>
              </div>
              <span className="text-sm font-bold text-red-600">
                $612.34 ↗ 2%
              </span>
            </div>
          </div>
        </div>

        {/* Patients */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Patients</h3>
          <div className="text-sm text-gray-600 mb-2">This month</div>
          <div className="text-2xl font-bold text-gray-900 mb-2">21</div>
          <div className="text-sm text-gray-600 mb-4">142</div>
          <div className="bg-blue-100 rounded-full h-2 mb-2">
            <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
          </div>
          <div className="text-xs text-gray-500">
            36.10% from last month | 67.41% Returning patients
          </div>
        </div>

        {/* Popular Treatment */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Treatment
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Scaling Teeth</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm">4.7</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Tooth Extraction</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm">4.4</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">General Checkup</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm">4.6</span>
              </div>
            </div>
          </div>
          <button className="text-blue-600 text-sm mt-4 hover:underline">
            View all
          </button>
        </div>

        {/* Stock Availability */}
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Stock availability
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">TOTAL ASSET</span>
              <span className="text-sm font-bold">$53,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">TOTAL PRODUCT</span>
              <span className="text-sm font-bold">442</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Low Stock</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Out of stock</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 mb-2">LOW STOCK</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Dental brush</span>
                <span className="text-sm">Qty: 3</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                  Order
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Chlorhexidine Regular</span>
                <span className="text-sm">Qty: 2</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                  Order
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
