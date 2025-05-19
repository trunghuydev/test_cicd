// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthStore } from '@/Store/auth';
// import Loading from '@/Components/Loading';

// const Logout: React.FC = () => {
//   const setToken = useAuthStore((state) => state.setTokens);
//   const navigate = useNavigate();
//   const [loading] = useState(true);

//   useEffect(() => {
//     setToken(token? ,refreshToken?);
//     localStorage.removeItem('isAuthenticated');

//     const timer = setTimeout(() => {
//       navigate('/');
//     }, 800);

//     return () => clearTimeout(timer);
//   }, [setToken, navigate]);

//   return <>{loading && <Loading />}</>;
// };

// export default Logout;
