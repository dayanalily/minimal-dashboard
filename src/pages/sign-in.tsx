import { useAuth } from '@workos-inc/authkit-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Page() {
  const { user, isLoading, signIn, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");

      if (!code) {
        signIn();
      }
    }
  }, [user, signIn]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!user && !isLoading) {
      console.log("Usuario deslogueado, redirigiendo a Sign In...");
      navigate('/sign-in');
    }
  }, [user, isLoading, navigate]);


  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <button 
            type="button" 
            onClick={() => {
              console.log("Ejecutando logout...");
              signOut();
            }}
          >
         tu   Sign Out
          </button>
        </>
      ) : (
        <button 
          type="button" 
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </>
  );
}
