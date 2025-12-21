import { useState } from "react";
import { GraduationCap, Lock, Mail, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP login logic
    if (email === "admin@campusbot.com" && password === "admin123") {
      navigate("/chat");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center
        bg-linear-to-br from-[#0a0518] via-[#120b2e] to-[#020617]
        text-white px-4
      "
    >
      <div
        className="
          w-full max-w-md
          bg-[#120b2e]/80 backdrop-blur-xl
          border border-white/10
          rounded-2xl
          shadow-2xl shadow-black/40
          p-6 sm:p-8
          animate-fade-in
        "
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-3">
            <div className="bg-linear-to-br from-cyan-400 to-purple-600 p-3 rounded-xl shadow-lg shadow-cyan-500/30">
              <GraduationCap size={32} className="text-white" />
            </div>
            <Sparkles
              size={14}
              className="absolute -top-1 -right-1 text-cyan-300 animate-pulse"
            />
          </div>

          <h1
            className="
              text-2xl font-extrabold
              bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400
              bg-clip-text text-transparent
            "
          >
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
            <div
              className="
                flex items-center gap-2 mt-1
                bg-[#0a0518]
                border border-white/10
                rounded-lg px-3
                focus-within:border-cyan-400
                transition
              "
            >
              <Mail size={16} className="text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@campusbot.com"
                className="flex-1 bg-transparent py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-400">Password</label>
            <div
              className="
                flex items-center gap-2 mt-1
                bg-[#0a0518]
                border border-white/10
                rounded-lg px-3
                focus-within:border-cyan-400
                transition
              "
            >
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
            className="
              w-full
              bg-linear-to-r from-cyan-500 to-purple-600
              hover:from-cyan-400 hover:to-purple-500
              transition-all
              py-2.5 rounded-lg
              font-medium
              shadow-lg shadow-cyan-500/25
              active:scale-[0.98]
            "
          >
            Login as Admin
          </button>
        </form>

        {/* Footer */}
        <p className="text-[10px] text-gray-500 text-center mt-6">
          Authorized administrators only
        </p>
      </div>
    </div>
  );
};

export default AdminLoginPage;
