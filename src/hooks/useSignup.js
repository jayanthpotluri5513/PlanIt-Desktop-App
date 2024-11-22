import { useState, useEffect } from 'react';
import { projectAuth, projectStorage,projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  let isCancelled = false; // Simplify to a regular variable

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      // Sign up user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password);
      if (!res) throw new Error('Could not complete signup');
      
      // Upload user thumbnail
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();

      // Add display name and photoURL to user profile
      await res.user.updateProfile({ displayName, photoURL: imgUrl });
      // create a user document

      await projectFirestore.collection('users').doc(res.user.uid).set({
        online: true,
        displayName,
        photoURL: imgUrl
      })
      // Dispatch login action

      dispatch({ type: 'LOGIN', payload: res.user });

      // Update state if component is mounted
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } 
    catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      isCancelled = true;
    };
  }, []);

  return { signup, error, isPending };
};
