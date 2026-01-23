import { useEffect, useState } from "react";
import { loginUser, getCurrentUser, logoutUser } from "../api/authApi";
import { AuthContext } from "./AuthContextConfig";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check auth status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const response = await getCurrentUser();
      setUser(response.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    const response = await loginUser(email, password);
    setUser(response);
    return response;
  }

  async function logout() {
    await logoutUser();
    setUser(null);
  }

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
