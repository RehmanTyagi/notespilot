import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='login' element={<h1>login page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
