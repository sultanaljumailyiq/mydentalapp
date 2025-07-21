import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/lib/i18n";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Accounts from "./pages/Accounts";
import Stocks from "./pages/Stocks";
import Reservations from "./pages/Reservations";
import Treatments from "./pages/Treatments";
import Staff from "./pages/Staff";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import CustomerSupport from "./pages/CustomerSupport";
import PaymentMethods from "./pages/PaymentMethods";
import Peripherals from "./pages/Peripherals";
import PatientDetail from "./pages/PatientDetail";
import LandingPage from "./pages/LandingPage";
import Community from "./pages/Community";
import Jobs from "./pages/Jobs";
import PlatformAdmin from "./pages/PlatformAdmin";
import Auth from "./pages/Auth";
import PatientMarketplace from "./pages/PatientMarketplace";
import DentalSupplyMarket from "./pages/DentalSupplyMarket";
import MarketplaceAdmin from "./pages/MarketplaceAdmin";
import SuperAdminSettings from "./pages/SuperAdminSettings";
import BrandDetail from "./pages/BrandDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <I18nProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/community" element={<Community />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/marketplace" element={<PatientMarketplace />} />
            <Route path="/dental-supply" element={<DentalSupplyMarket />} />
            <Route path="/brand/:id" element={<BrandDetail />} />

            {/* Auth Routes */}
            <Route
              path="/auth"
              element={<Auth mode="signin" userType="dentist" />}
            />
            <Route
              path="/signin"
              element={<Auth mode="signin" userType="dentist" />}
            />
            <Route
              path="/signup"
              element={<Auth mode="signup" userType="dentist" />}
            />
            <Route
              path="/auth/dentist"
              element={<Auth mode="signin" userType="dentist" />}
            />
            <Route
              path="/auth/provider"
              element={<Auth mode="signin" userType="provider" />}
            />
            <Route
              path="/auth/admin"
              element={<Auth mode="signin" userType="admin" />}
            />

            {/* Admin Dashboard Routes */}
            <Route
              path="/admin"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              path="/admin/reservations"
              element={
                <Layout>
                  <Reservations />
                </Layout>
              }
            />
            <Route
              path="/admin/patients"
              element={
                <Layout>
                  <Patients />
                </Layout>
              }
            />
            <Route
              path="/admin/patients/:id"
              element={
                <Layout>
                  <PatientDetail />
                </Layout>
              }
            />
            <Route
              path="/admin/treatments"
              element={
                <Layout>
                  <Treatments />
                </Layout>
              }
            />
            <Route
              path="/admin/staff"
              element={
                <Layout>
                  <Staff />
                </Layout>
              }
            />
            <Route
              path="/admin/accounts"
              element={
                <Layout>
                  <Accounts />
                </Layout>
              }
            />
            <Route
              path="/admin/sales"
              element={
                <Layout>
                  <Sales />
                </Layout>
              }
            />
            <Route
              path="/admin/purchases"
              element={
                <Layout>
                  <div className="p-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-600">
                      Purchases - Coming Soon
                    </h2>
                  </div>
                </Layout>
              }
            />
            <Route
              path="/admin/payment-methods"
              element={
                <Layout>
                  <PaymentMethods />
                </Layout>
              }
            />
            <Route
              path="/admin/stocks"
              element={
                <Layout>
                  <Stocks />
                </Layout>
              }
            />
            <Route
              path="/admin/peripherals"
              element={
                <Layout>
                  <Peripherals />
                </Layout>
              }
            />
            <Route
              path="/admin/reports"
              element={
                <Layout>
                  <Reports />
                </Layout>
              }
            />
            <Route
              path="/admin/support"
              element={
                <Layout>
                  <CustomerSupport />
                </Layout>
              }
            />
            <Route
              path="/admin/platform-admin"
              element={
                <Layout>
                  <PlatformAdmin />
                </Layout>
              }
            />
            <Route
              path="/admin/marketplace-admin"
              element={
                <Layout>
                  <MarketplaceAdmin />
                </Layout>
              }
            />
            <Route
              path="/admin/super-admin-settings"
              element={
                <Layout>
                  <SuperAdminSettings />
                </Layout>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
