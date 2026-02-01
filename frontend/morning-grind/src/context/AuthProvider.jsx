import { useEffect, useState } from "react";
import { loginUser, getCurrentUser, logoutUser } from "../api/authApi";
import { AuthContext } from "./AuthContextConfig";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await getCurrentUser();
          setUser(response.data);
        } catch (err) {
          console.error("Error fetching current user:", err);
          localStorage.removeItem("token");
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  async function login(email, password) {
    const response = await loginUser(email, password);
    console.log("Login response:", response);
    localStorage.setItem("token", response.token);
    setUser(response.user);
    return response;
  }

  async function logout() {
    try {
      await logoutUser();
    } catch (err) {
      console.error("Logout error:", err);
    }
    localStorage.removeItem("token");
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
