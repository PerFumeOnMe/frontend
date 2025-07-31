// ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // localStorage에 "accessToken"이 "true"로 저장되어 있으면 로그인 상태로 간주
  const isLoggedIn = localStorage.getItem("accessToken") !== null;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
