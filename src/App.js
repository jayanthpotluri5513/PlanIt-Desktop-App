import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';
import LandingPage from './pages/landingpage/LandingPage';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
            {/* Show the landing page for unauthenticated users */}
            <Route path="/" element={user ? <Dashboard /> : <LandingPage />} />
            <Route 
              path="/create" 
              element={user ? <Create /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/projects/:id" 
              element={user ? <Project /> : <Navigate to="/login" />} 
            />
            
            {/* Redirect to dashboard if user is logged in */}
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
          </div>
          {user && <OnlineUsers/>}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
