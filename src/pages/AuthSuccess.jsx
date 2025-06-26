import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('access_token');
    const userName = queryParams.get('user_name'); // Assuming user_name is passed

    if (token) {
      localStorage.setItem('token', token);
      if (userName) {
        localStorage.setItem('userName', userName);
      }
      navigate('/gmail'); // redirect to inbox
    } else {
      navigate('/'); // fallback
    }
  }, [navigate]);

  return <p>Logging you in...</p>;
};

export default AuthSuccess;
