import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='login' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
