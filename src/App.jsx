import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GmailDashboard from './pages/GmailDashboard';
import NewsDashboard from './pages/NewsDashboard';
import AuthSuccess from './pages/AuthSuccess';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [loginUrl, setLoginUrl] = useState('');

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/google`)
      .then(res => setLoginUrl(res.data.url))
      .catch(err => console.error('Error fetching login URL:', err));
  }, []);

  return (
    <BrowserRouter>
      <div className="container text-center mt-5">
        <h1>📚 CampusConnect Hub</h1>
        <a href={loginUrl} className="btn btn-danger mt-3">Login with Gmail</a>
        <nav className="mt-3">
          <a href="/gmail" className="btn btn-primary mx-2">Gmail Inbox</a>
          <a href="/news" className="btn btn-success mx-2">College News</a>
          <a href="/privacy" className="btn btn-success mx-2">Privacy Policy</a>
        </nav>
      </div>

      <Routes>
        <Route path="/auth-success" element={<AuthSuccess />} />
        <Route path="/gmail" element={<GmailDashboard />} />
        <Route path="/news" element={<NewsDashboard />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
