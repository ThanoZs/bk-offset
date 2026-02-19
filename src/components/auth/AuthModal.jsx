import React, { useState } from "react";
import { User, Mail, Lock, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export function AuthModal({ isDark, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { loginWithGoogle, loginWithEmail, registerWithEmail, resetPassword } = useAuth();

  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    
    const { error } = await loginWithGoogle();
    
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      onClose(); // Success - close modal
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    if (isLogin) {
      if (!email || !password) {
        setError("Enter email and password");
        setLoading(false);
        return;
      }
      
      const { error } = await loginWithEmail(email, password);
      if (error) {
        setError(error);
        setLoading(false);
      } else {
        onClose();
      }
    } else {
      if (!email || !password || !firstName || !lastName) {
        setError("Fill all fields");
        setLoading(false);
        return;
      }
      
      const { error } = await registerWithEmail(email, password, firstName, lastName);
      
      if (error) {
        setError(error);
        setLoading(false);
      } else {
        setSuccess("Account created! Check your email.");
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setTimeout(() => setIsLogin(true), 2000);
      }
    }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(5px)", zIndex: 2000,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        background: isDark ? "#1e293b" : "#fff",
        borderRadius: "16px", padding: "32px",
        width: "100%", maxWidth: "400px",
        position: "relative",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: "16px", right: "16px",
          background: "none", border: "none", cursor: "pointer",
          color: isDark ? "#94a3b8" : "#64748b",
        }}>
          <X size={20} />
        </button>

        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div style={{
            width: "64px", height: "64px", borderRadius: "50%",
            background: "linear-gradient(135deg, #0284c7, #06b6d4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 16px",
          }}>
            <User size={32} color="#fff" />
          </div>
          <h2 style={{ color: isDark ? "#f1f5f9" : "#0f172a" }}>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
        </div>

        {success && <div style={{ background: "#d4edda", color: "#155724", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>{success}</div>}
        {error && <div style={{ background: "#fee2e2", color: "#ef4444", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center" }}>{error}</div>}

        <button
          onClick={handleGoogle}
          disabled={loading}
          style={{
            width: "100%", padding: "12px",
            background: "#fff", border: "1px solid #cbd5e1",
            borderRadius: "8px", fontSize: "14px", fontWeight: 600,
            color: "#475569", cursor: loading ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "10px", marginBottom: "20px",
            opacity: loading ? 0.5 : 1,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
          <div style={{ flex: 1, height: "1px", background: "#cbd5e1" }} />
          <span style={{ color: "#94a3b8" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "#cbd5e1" }} />
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={loading} style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "8px", marginBottom: "16px", background: isDark ? "#0f172a" : "#fff", color: isDark ? "#f1f5f9" : "#0f172a" }} required />
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={loading} style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "8px", marginBottom: "16px", background: isDark ? "#0f172a" : "#fff", color: isDark ? "#f1f5f9" : "#0f172a" }} required />
            </>
          )}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "8px", marginBottom: "16px", background: isDark ? "#0f172a" : "#fff", color: isDark ? "#f1f5f9" : "#0f172a" }} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} style={{ width: "100%", padding: "10px", border: "1px solid #cbd5e1", borderRadius: "8px", marginBottom: "16px", background: isDark ? "#0f172a" : "#fff", color: isDark ? "#f1f5f9" : "#0f172a" }} required />

          {isLogin && (
            <button type="button" onClick={() => {}} style={{ background: "none", border: "none", color: "#0284c7", cursor: "pointer", fontSize: "13px", marginBottom: "16px", display: "block", textAlign: "right", width: "100%" }}>
              Forgot Password?
            </button>
          )}

          <button type="submit" disabled={loading} style={{
            width: "100%", padding: "12px",
            background: loading ? "#cbd5e1" : "linear-gradient(135deg, #0284c7, #06b6d4)",
            color: loading ? "#64748b" : "#fff",
            border: "none", borderRadius: "8px",
            fontSize: "16px", fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            marginBottom: "16px",
          }}>
            {loading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
          </button>
        </form>

        <p style={{ textAlign: "center", color: isDark ? "#94a3b8" : "#64748b" }}>
          {isLogin ? "No account? " : "Have an account? "}
          <button onClick={() => { setIsLogin(!isLogin); setError(""); setSuccess(""); }} style={{ background: "none", border: "none", color: "#0284c7", cursor: "pointer", fontWeight: 600 }}>
            {isLogin ? "Register" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
