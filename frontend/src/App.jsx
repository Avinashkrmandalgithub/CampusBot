import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAdminAuthStore } from "./store/useAdminAuthStore";

import CampusBotLayout from "./layouts/CampusBotLayout";
import AdminLoginPage from "./pages/AdminLoginPage";

import ChatPage from "./pages/ChatPage";
import DashboardPage from "./pages/DashboardPage";
import FaqPage from "./pages/FaqPage";
import NewsPage from "./pages/NewsPage";
import EventsPage from "./pages/EventsPage";
import SettingsPage from "./pages/SettingsPage";
import UniversityInfoPage from "./pages/UniversityInfoPage";

import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";

function App() {
  const checkAuth = useAdminAuthStore((s) => s.checkAuth);

  useEffect(() => {
    checkAuth(); //  restores admin session on refresh
  }, []);

  return (
    <Routes>
      {/* Public */}
      <Route path="/admin-login" element={<AdminLoginPage />} />

      {/* Shared layout */}
      <Route path="/" element={<CampusBotLayout />}>
        <Route index element={<Navigate to="/chat" replace />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="settings" element={<SettingsPage />} />

        {/* Admin-only */}
        <Route element={<ProtectedAdminRoute />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="faqs" element={<FaqPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="university" element={<UniversityInfoPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
