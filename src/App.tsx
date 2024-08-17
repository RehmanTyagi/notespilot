import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmEmail from "./pages/ConfirmEmail";
import ResetPassword from "./pages/ResetPassword";

// App component
import Notification from "./components/Notification";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
const App = () => {
  return (
    <Router>
      <Notification />
      <Routes>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <h1 className="bg-default">dashboard</h1>
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="confirmemail"
          element={
            <PublicRoute>
              <ConfirmEmail />
            </PublicRoute>
          }
        />
        <Route
          path="forget"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          path="resetpassword/:resetToken"
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
