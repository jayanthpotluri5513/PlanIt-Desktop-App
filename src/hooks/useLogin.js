import { useEffect, useState } from 'react';
import { projectAuth, projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  let isCancelled = false;  // Using regular variable

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // Log in the user
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // Update online status
      await projectFirestore.collection('users').doc(res.user.uid).update({ online: true });

      // Dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user });

      // Update states only if not cancelled
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      isCancelled = true;  // Set isCancelled to true in cleanup
    };
  }, []);

  return { login, isPending, error };
};
