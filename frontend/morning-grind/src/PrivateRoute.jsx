import { Navigate } from "react-router";
import { useAuth } from "./context/useAuth";

export function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/auth" />;

  return children;
}
