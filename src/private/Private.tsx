import { Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import useAuth from "../useHooks/useAuth";
import Spinner from "../shared/spinner/Spinner";
import { ReactNode } from "react";

export default function Private({ children }: { children: ReactNode }) {
  const location = useLocation();

  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (user) return children;

  return <Navigate to="/login" state={location.pathname} replace={true} />;
}
