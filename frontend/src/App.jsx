import { Routes, Route, Navigate } from "react-router-dom";

import CampusBotLayout from "./layouts/CampusBotLayout";
import AdminLoginPage from "./pages/AdminLoginPage";

import ChatPage from "./pages/ChatPage";
import DashboardPage from "./pages/DashboardPage";
import FaqPage from "./pages/FaqPage";
import NewsPage from "./pages/NewsPage";
import EventsPage from "./pages/EventsPage";
import SettingsPage from "./pages/SettingsPage";
import UniversityInfoPage from "./pages/UniversityInfoPage";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/admin-login" element={<AdminLoginPage />} />

      {/* App Layout */}
      <Route path="/" element={<CampusBotLayout />}>
        <Route index element={<Navigate to="/chat" replace />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/university" element={<UniversityInfoPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );      
}

export default App;
