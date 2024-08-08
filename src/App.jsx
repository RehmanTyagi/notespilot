import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmEmail from "./pages/ConfirmEmail";

// App component
import Notification from "./components/Notification";
const App = () => {
  return (
    <Router>
      <Notification />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="confirmemail" element={<ConfirmEmail />} />
        <Route path="forget" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
