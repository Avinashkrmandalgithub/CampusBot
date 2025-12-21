import {
  Settings as SettingsIcon,
  Globe,
  Bell,
  ShieldCheck,
  Palette,
  Save,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

const Toggle = ({ enabled, onChange }) => (
  <button
    onClick={onChange}
    className={`w-11 h-6 rounded-full relative transition ${
      enabled ? "bg-purple-600" : "bg-white/10"
    }`}
  >
    <span
      className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${
        enabled ? "left-6" : "left-1"
      }`}
    />
  </button>
);

const Card = ({ icon: Icon, title, desc, children }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-purple-600/20">
        <Icon size={18} className="text-purple-400" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
    {children}
  </div>
);

const SettingsPage = () => {
  const [language, setLanguage] = useState("English");
  const [multiLang, setMultiLang] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [dailyReports, setDailyReports] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [animations, setAnimations] = useState(true);
  const [compact, setCompact] = useState(false);

  return (
    <div className="p-4 sm:p-6 z-10 max-w-3xl space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-purple-600/20">
          <SettingsIcon className="text-purple-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-400 text-sm">
            Configure CampusBot preferences
          </p>
        </div>
      </div>

      {/* Language */}
      <Card
        icon={Globe}
        title="Language Settings"
        desc="Configure chatbot language preferences"
      >
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Default Language</span>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#0a0518] border border-white/10 rounded-lg px-3 py-1.5 text-sm"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Bengali</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Multi-language Support</span>
          <Toggle
            enabled={multiLang}
            onChange={() => setMultiLang(!multiLang)}
          />
        </div>
      </Card>

      {/* Notifications */}
      <Card
        icon={Bell}
        title="Notifications"
        desc="Manage notification preferences"
      >
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Email Alerts</span>
          <Toggle
            enabled={emailAlerts}
            onChange={() => setEmailAlerts(!emailAlerts)}
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Daily Reports</span>
          <Toggle
            enabled={dailyReports}
            onChange={() => setDailyReports(!dailyReports)}
          />
        </div>
      </Card>

      {/* Security */}
      <Card
        icon={ShieldCheck}
        title="Security"
        desc="Security and access settings"
      >
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">
            Two-Factor Authentication
          </span>
          <Toggle enabled={twoFA} onChange={() => setTwoFA(!twoFA)} />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Session Timeout</span>
          <select className="bg-[#0a0518] border border-white/10 rounded-lg px-3 py-1.5 text-sm">
            <option>15 minutes</option>
            <option selected>30 minutes</option>
            <option>60 minutes</option>
          </select>
        </div>
      </Card>

      {/* Appearance */}
      <Card
        icon={Palette}
        title="Appearance"
        desc="Customize the look and feel"
      >
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Compact Mode</span>
          <Toggle enabled={compact} onChange={() => setCompact(!compact)} />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Animations</span>
          <Toggle
            enabled={animations}
            onChange={() => setAnimations(!animations)}
          />
        </div>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
        <button className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-sm hover:bg-white/5 transition">
          <RotateCcw size={16} /> Reset to Defaults
        </button>
        <button className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-purple-600 to-cyan-500 rounded-lg text-sm font-medium shadow-lg shadow-purple-500/30">
          <Save size={16} /> Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
