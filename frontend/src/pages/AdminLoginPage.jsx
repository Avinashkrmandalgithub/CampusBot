import { useState } from "react";
import { GraduationCap, Lock, Mail, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAdminAuthStore } from "../store/useAdminAuthStore";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { loginAdmin, loading, error } = useAdminAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await loginAdmin({ email, password });

    if (success) {
      navigate("/chat");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0a0518] via-[#120b2e] to-[#020617] text-white px-4">
      <div className="w-full max-w-md bg-[#120b2e]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-3">
            <div className="bg-linear-to-br from-cyan-400 to-purple-600 p-3 rounded-xl">
              <GraduationCap size={32} />
            </div>
            <Sparkles
              size={14}
              className="absolute -top-1 -right-1 text-cyan-300 animate-pulse"
            />
          </div>

          <h1 className="text-2xl font-extrabold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            CampusBot Admin
          </h1>

          <p className="text-xs text-gray-400 mt-1">
            Secure administrator access
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-xs text-gray-400">Admin Email</label>
            <div className="flex items-center gap-2 mt-1 bg-[#0a0518] border border-white/10 rounded-lg px-3">
              <Mail size={16} className="text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@brainwareuniversity.ac.in"
                className="flex-1 bg-transparent py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-400">Password</label>
            <div className="flex items-center gap-2 mt-1 bg-[#0a0518] border border-white/10 rounded-lg px-3">
              <Lock size={16} className="text-gray-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="flex-1 bg-transparent py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-cyan-500 to-purple-600 py-2.5 rounded-lg font-medium disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login as Admin"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="text-xs text-red-400 text-center mt-4">{error}</p>
        )}

        <p className="text-[10px] text-gray-500 text-center mt-6">
          Authorized administrators only
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
