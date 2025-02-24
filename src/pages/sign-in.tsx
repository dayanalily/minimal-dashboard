import { useAuth } from '@workos-inc/authkit-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Page() {
  const { user, isLoading, signIn } = useAuth();
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
      navigate('/sign-in');
    }
  }, [user, isLoading, navigate]);


  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {!user &&  <p>Loading...</p>}
    </>
  );
}
