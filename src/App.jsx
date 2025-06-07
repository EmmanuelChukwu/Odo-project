import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';

function App() {

  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </div>
    </>
  )
}

export default App
