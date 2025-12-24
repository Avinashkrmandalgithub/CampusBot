import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.model.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    //  Only official admins
    const allowedAdmins = ["admin@brainwareuniversity.ac.in"];

    if (!allowedAdmins.includes(email)) {
      return res.status(403).json({ error: "Not authorized as admin" });
    }

    //  Find admin WITH password
    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    //  Compare password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    //  Create JWT
    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    //  Cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    //  Response (no password)
    res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        avatar: admin.avatar,
      },
    });
  } catch (error) {
    console.error("Admin Auth Error:", error);
    res.status(500).json({ error: "Admin authentication failed" });
  }
};

export const adminMe = async (req, res) => {
  res.json({
    admin: {
      id: req.admin.id,
      role: "admin",
    },
  });
};

export const adminLogout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.json({ success: true });
};
