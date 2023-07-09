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
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from './config';

type SignInFormData = {
  email: string;
  password: string;
};

type UserPermissions = {
  admin?: boolean;
};

type UserProfile = {
  cpf?: string;
};

type UserData = Pick<User, 'displayName'> & UserProfile;

const defaultUserPermissions: UserPermissions = {
  admin: false,
};

const defaultUserProfile: UserProfile = {
  cpf: undefined,
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

const getErrorMessage = (error: { code: string; message: string } | null) => {
  if (!error?.code || !error?.message) {
    return null;
  }

  return authErrorMessage[error.code] || error.message;
};

const userPermissionsRef = (uid: string) => doc(db, 'userPermissions', uid);
const userProfileRef = (uid: string) => doc(db, 'userProfiles', uid);

const getUserProfile = async (user: User | null) => {
  if (!user) {
    return defaultUserProfile;
  }

  const docResponse = await getDoc(userProfileRef(user.uid));
  const docData = docResponse.data();
  return docData ?? defaultUserProfile;
};

const getUserPermissions = async (user: User | null) => {
  if (!user) {
    return defaultUserPermissions;
  }

  const docResponse = await getDoc(userPermissionsRef(user.uid));
  const docData = docResponse.data();
  return docData ?? defaultUserPermissions;
};

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userPermissions, setUserPermissions] =
    useState<UserPermissions | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<unknown>(null);

  const signIn = async ({ email, password }: SignInFormData) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = async ({ email, password }: SignInFormData) => {
    try {
      setError(null);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      sendEmailVerification(userCredential.user);
      return userCredential;
    } catch (error) {
      setError(error);
    }
  };

  const signInOrCreateUser = async ({ email, password }: SignInFormData) => {
    try {
      setError(null);
      const userCredential = await signIn({ email, password });
      return userCredential;
    } catch (error) {
      if ((error as FirebaseError)?.code === authErrorCode.USER_NOT_FOUND) {
        return await createUser({ email, password });
      } else {
        setError(error);
      }
    }
  };

  const updateUserData = async ({ displayName, ...userData }: UserData) => {
    if (!user) {
      return;
    }

    try {
      setError(null);
      await updateProfile(user, { displayName });
      await setDoc(userProfileRef(user.uid), userData);
    } catch (error) {
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
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (!user) {
        setUserProfile(null);
        setUserPermissions(null);
        return;
      }

      try {
        const userProfile = await getUserProfile(user);
        setUserProfile(userProfile);
      } catch (error) {
        setError(error);
        setUserProfile(defaultUserProfile);
      }

      try {
        const userPermissions = await getUserPermissions(user);
        setUserPermissions(userPermissions);
      } catch (error) {
        console.error(error);
        setUserPermissions(defaultUserPermissions);
      }
    });

    return unsubscribe;
  }, []);

  return {
    user,
    userProfile,
    userPermissions,
    error,
    signInOrCreateUser,
    updateUserData,
    signOutUser,
  };
};

export type { SignInFormData, UserData };

export { authErrorCode, getErrorMessage, useAuth };
