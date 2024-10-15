import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import HomePage from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmEmail from "./pages/ConfirmEmail";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

// App component
import Notification from "./components/common/Notification";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Editor from "./components/Dashboard/Editor/Editor";
const App = () => {
  return (
    <Router>
      <Notification />
      <Routes>
        <Route
          index
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />
        <Route
          path="view"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <div className="grid h-full place-content-center">
                <div className="flex flex-col gap-2">
                  <h1 className="mt-10 text-5xl font-bold text-primary">
                    Welcome to NotesPilot 🙏
                  </h1>
                  <p className="ml-2 text-sm text-black/50 dark:text-gray-300">
                    Click on any note to view or edit from sidebar
                  </p>
                </div>
              </div>
            }
          />
          <Route path="note/:noteid" element={<Editor />} />
          <Route path="profile" element={<Profile />} />
        </Route>
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
        <Route path="*" element={<h1>404 | Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
