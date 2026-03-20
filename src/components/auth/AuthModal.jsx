/**
 * AuthModal.jsx — Secure authentication portal for BK Offset Printing.
 * Supports Google SSO, email/password login, and new account registration.
 */

import React, { useState } from "react";
import { User, Mail, Lock, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

/**
 * AuthModal — Centered overlay for managing user login/signup states.
 * 
 * @param {Object} props
 * @param {boolean} props.isDark - Theme mode for dynamic color adaptation.
 * @param {Function} props.onClose - Callback to dismiss the modal.
 */
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

  /**
   * handleGoogle — Initiates OAuth flow via Firebase.
   */
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

  /**
   * handleSubmit — Processes traditional email/password credentials.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    if (isLogin) {
      // Basic validation for existing users
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
      // Extended validation for new registration
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
        // Clear forms on successful registration
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        // Transition back to login view after short delay
        setTimeout(() => setIsLogin(true), 2000);
      }
    }
  };

  return (
    <div style={styles.backdrop}>
      <div style={styles.modalBox(isDark)}>
        {/* Close Interaction */}
        <button onClick={onClose} style={styles.closeBtn(isDark)}>
          <X size={20} />
        </button>

        {/* Brand/Identity Header */}
        <div style={styles.header}>
          <div style={styles.avatarPill}>
            <User size={32} color="#fff" />
          </div>
          <h2 style={styles.title(isDark)}>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
        </div>

        {/* Feedback Messages */}
        {success && <div style={styles.successBox}>{success}</div>}
        {error && <div style={styles.errorBox}>{error}</div>}

        {/* SSO Strategy — Google */}
        <button
          onClick={handleGoogle}
          disabled={loading}
          style={styles.googleBtn(loading)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div style={styles.divider}>
          <div style={styles.dividerLine} />
          <span style={styles.dividerText}>or</span>
          <div style={styles.dividerLine} />
        </div>

        {/* Primary Credential Form */}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input 
                type="text" placeholder="First Name" 
                value={firstName} onChange={(e) => setFirstName(e.target.value)} 
                disabled={loading} style={styles.input(isDark, loading)} required 
              />
              <input 
                type="text" placeholder="Last Name" 
                value={lastName} onChange={(e) => setLastName(e.target.value)} 
                disabled={loading} style={styles.input(isDark, loading)} required 
              />
            </>
          )}
          <input 
            type="email" placeholder="Email" 
            value={email} onChange={(e) => setEmail(e.target.value)} 
            disabled={loading} style={styles.input(isDark, loading)} required 
          />
          <input 
            type="password" placeholder="Password" 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            disabled={loading} style={styles.input(isDark, loading)} required 
          />

          {isLogin && (
            <button type="button" onClick={() => {}} style={styles.forgotBtn}>
              Forgot Password?
            </button>
          )}

          <button type="submit" disabled={loading} style={styles.submitBtn(loading)}>
            {loading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
          </button>
        </form>

        {/* Toggle between states */}
        <p style={styles.footerText(isDark)}>
          {isLogin ? "No account? " : "Have an account? "}
          <button 
            onClick={() => { setIsLogin(!isLogin); setError(""); setSuccess(""); }} 
            style={styles.toggleBtn}
          >
            {isLogin ? "Register" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}

/* ─── Consolidated Styles ────────────────────────────────── */

const styles = {
  backdrop: {
    position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
    backdropFilter: "blur(5px)", zIndex: 2000,
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: "20px",
  },
  modalBox: (isDark) => ({
    background: isDark ? "#1e293b" : "#fff",
    borderRadius: "16px", padding: "32px",
    width: "100%", maxWidth: "400px",
    position: "relative",
    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
  }),
  closeBtn: (isDark) => ({
    position: "absolute", top: "16px", right: "16px",
    background: "none", border: "none", cursor: "pointer",
    color: isDark ? "#94a3b8" : "#64748b",
    transition: "color 0.2s ease",
  }),
  header: { textAlign: "center", marginBottom: "24px" },
  avatarPill: {
    width: "64px", height: "64px", borderRadius: "50%",
    background: "linear-gradient(135deg, #0284c7, #06b6d4)",
    display: "flex", alignItems: "center", justifyContent: "center",
    margin: "0 auto 16px",
    boxShadow: "0 10px 15px -3px rgba(2, 132, 199, 0.3)",
  },
  title: (isDark) => ({ color: isDark ? "#f1f5f9" : "#0f172a", margin: 0 }),
  successBox: { background: "#d4edda", color: "#155724", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center", fontSize: "14px" },
  errorBox: { background: "#fee2e2", color: "#ef4444", padding: "12px", borderRadius: "8px", marginBottom: "16px", textAlign: "center", fontSize: "14px" },
  googleBtn: (loading) => ({
    width: "100%", padding: "12px",
    background: "#fff", border: "1px solid #cbd5e1",
    borderRadius: "8px", fontSize: "14px", fontWeight: 600,
    color: "#475569", cursor: loading ? "not-allowed" : "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    gap: "10px", marginBottom: "20px",
    opacity: loading ? 0.5 : 1,
    transition: "background 0.2s ease",
  }),
  divider: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" },
  dividerLine: { flex: 1, height: "1px", background: "#cbd5e1" },
  dividerText: { color: "#94a3b8", fontSize: "12px", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.05em" },
  input: (isDark, loading) => ({
    width: "100%", padding: "10px", border: "1px solid #cbd5e1", 
    borderRadius: "8px", marginBottom: "16px", 
    background: isDark ? "#0f172a" : "#fff", 
    color: isDark ? "#f1f5f9" : "#0f172a",
    opacity: loading ? 0.7 : 1,
  }),
  forgotBtn: { background: "none", border: "none", color: "#0284c7", cursor: "pointer", fontSize: "13px", marginBottom: "16px", display: "block", textAlign: "right", width: "100%" },
  submitBtn: (loading) => ({
    width: "100%", padding: "12px",
    background: loading ? "#cbd5e1" : "linear-gradient(135deg, #0284c7, #06b6d4)",
    color: loading ? "#64748b" : "#fff",
    border: "none", borderRadius: "8px",
    fontSize: "16px", fontWeight: 600,
    cursor: loading ? "not-allowed" : "pointer",
    marginBottom: "16px",
    transition: "transform 0.1s ease",
  }),
  footerText: (isDark) => ({ textAlign: "center", color: isDark ? "#94a3b8" : "#64748b", fontSize: "14px" }),
  toggleBtn: { background: "none", border: "none", color: "#0284c7", cursor: "pointer", fontWeight: 600, marginLeft: "4px" },
};
