import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GmailDashboard from './pages/GmailDashboard';
import NewsDashboard from './pages/NewsDashboard';
import AuthSuccess from './pages/AuthSuccess';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const [loginUrl, setLoginUrl] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/google`)
      .then(res => setLoginUrl(res.data.url))
      .catch(err => console.error('Error fetching login URL:', err));

    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="container text-center mt-5">
        <h1>📚 CampusConnect Hub</h1>
        {userName ? (
          <p className="lead">Welcome, {userName}!</p>
        ) : (
          <a href={loginUrl} className="btn btn-danger mt-3">Login with Gmail</a>
        )}
        <nav className="mt-3">
          <div className="d-flex justify-content-center">
            <Link to="/gmail" className="btn btn-primary mx-2">Gmail Inbox</Link>
            <Link to="/news" className="btn btn-success mx-2">College News</Link>
            <Link to="/privacy-policy" className="btn btn-outline-secondary mx-2">Privacy Policy</Link>
            <Link to="/terms-of-service" className="btn btn-outline-info mx-2">Terms of Service</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/auth-success" element={<AuthSuccess />} />
          <Route path="/gmail" element={<GmailDashboard />} />
          <Route path="/news" element={<NewsDashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
