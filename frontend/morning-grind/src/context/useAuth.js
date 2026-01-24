import { useContext } from "react";
import { AuthContext } from "./AuthContextConfig";

export function useAuth() {
  return useContext(AuthContext);
}
