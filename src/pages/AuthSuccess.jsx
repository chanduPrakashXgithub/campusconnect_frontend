import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('access_token');

    if (token) {
      localStorage.setItem('token', token);
      navigate('/gmail'); // redirect to inbox
    } else {
      navigate('/'); // fallback
    }
  }, [navigate]);

  return <p>Logging you in...</p>;
};

export default AuthSuccess;
