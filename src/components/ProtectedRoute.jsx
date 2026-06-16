import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (!auth) {
    return <Navigate to="/" />;
  }

  if (Date.now() > auth.expiredAt) {
    localStorage.removeItem("auth");
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;