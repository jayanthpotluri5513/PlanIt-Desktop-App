import { useEffect, useState, useRef } from 'react';
import { projectAuth, projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();
  const isCancelled = useRef(false); // Use useRef to keep track of cancellation

  const logout = async () => {
    console.log("Logout initiated..."); // Debugging step
    setError(null);
    setIsPending(true);

    try {
      if (user) {
        console.log("User authenticated:", user); // Debugging user data
        const { uid } = user;
        
        if (uid) {
          console.log("User UID:", uid); // Debugging UID

          const userDoc = projectFirestore.collection('users').doc(uid);
          const docSnapshot = await userDoc.get();
          
          if (docSnapshot.exists) {
            console.log("User document found. Updating online status...");
            await userDoc.update({ online: false });
          } else {
            console.error(`User document with UID ${uid} does not exist.`);
          }
        } else {
          console.error("No UID found for the user.");
        }
      } else {
        console.error("User not authenticated."); // Debugging when no user exists
      }

      // Sign the user out
      console.log("Signing out user...");
      await projectAuth.signOut();

      // Dispatch logout action
      console.log("Dispatching logout action...");
      dispatch({ type: 'LOGOUT' });

      if (!isCancelled.current) {
        setIsPending(false);
        setError(null);
        console.log("Logout successful.");
      }
    } catch (err) {
      console.error("An error occurred during logout:", err.message); // Debugging error message
      if (!isCancelled.current) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    isCancelled.current = false; // Ensure reset on every mount
    console.log("useLogout mounted. isCancelled reset to false.");

    return () => {
      isCancelled.current = true; // Set isCancelled to true only during cleanup
      console.log("useLogout unmounted. isCancelled set to true.");
    };
  }, []);

  return { logout, error, isPending };
};
