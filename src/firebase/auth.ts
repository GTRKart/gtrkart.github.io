import { FirebaseError } from 'firebase/app';
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './config';

type SignInFormData = {
  email: string;
  password: string;
};

const authErrorCode = {
  IN_USE: 'auth/email-already-in-use',
  INVALID: 'auth/invalid-email',
  WEAK_PASSWORD: 'auth/weak-password',
  USER_NOT_FOUND: 'auth/user-not-found',
  MISSING_PASSWORD: 'auth/missing-password',
  WRONG_PASSWORD: 'auth/wrong-password',
};

const authErrorMessage = {
  [authErrorCode.IN_USE]: 'O e-mail já está em uso.',
  [authErrorCode.INVALID]: 'Informe um e-mail válido.',
  [authErrorCode.WEAK_PASSWORD]: 'A senha deve ter 6 caracteres ou mais.',
  [authErrorCode.USER_NOT_FOUND]: 'Usuário não encontrado.',
  [authErrorCode.MISSING_PASSWORD]: 'Informe a senha.',
  [authErrorCode.WRONG_PASSWORD]: 'Senha incorreta.',
};

const getErrorMessage = (error: FirebaseError | null) => {
  if (!error) {
    return null;
  }

  return authErrorMessage[error.code] || error.message;
};

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<FirebaseError | null>(null);

  const signIn = async ({ email, password }: SignInFormData) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = async ({ email, password }: SignInFormData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      sendEmailVerification(userCredential.user);
      setError(null);
      return userCredential;
    } catch (error) {
      if (!(error instanceof FirebaseError)) {
        throw error;
      }

      setError(error);
    }
  };

  const signInOrCreateUser = async ({ email, password }: SignInFormData) => {
    try {
      const userCredential = await signIn({ email, password });
      setError(null);
      return userCredential;
    } catch (error) {
      if (!(error instanceof FirebaseError)) {
        throw error;
      }

      if (error.code === authErrorCode.USER_NOT_FOUND) {
        return await createUser({ email, password });
      } else {
        setError(error);
      }
    }
  };

  const updateUserData = async ({
    displayName,
    photoURL,
    ...userData
  }: Partial<User>) => {
    if (!user) {
      return;
    }

    try {
      await updateProfile(user, { displayName, photoURL });
      // TODO: save user data to firestore
      setError(null);
    } catch (error) {
      if (!(error instanceof FirebaseError)) {
        throw error;
      }

      setError(error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setError(null);
    } catch (error) {
      if (!(error instanceof FirebaseError)) {
        throw error;
      }

      setError(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return {
    user,
    error,
    signInOrCreateUser,
    updateUserData,
    signOutUser,
  };
};

export type { SignInFormData };

export { authErrorCode, getErrorMessage, useAuth };
