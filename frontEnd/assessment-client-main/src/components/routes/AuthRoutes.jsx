import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../auth/Login"));
const Signup = lazy(() => import("../auth/Signup"));
const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/signup"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<>Loading...</>}>
            <Login />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
export default AuthRoutes;
