import { useState } from "react";
import { GraduationCap, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP login logic (replace with API later)
    if (email === "admin@campusbot.com" && password === "admin123") {
      navigate("/chat"); // admin enters dashboard
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0518] text-white px-4">
      <div className="w-full max-w-md bg-[#120b2e]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-cyan-500 p-3 rounded-xl mb-3">
            <GraduationCap size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-purple-300">
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
                placeholder="admin@campusbot.com"
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
            className="w-full bg-cyan-600 hover:bg-cyan-500 transition py-2 rounded-lg font-medium"
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
