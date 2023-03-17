import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = JSON.parse(localStorage.getItem("Auth"));
  return auth ? <Outlet context={auth} /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
