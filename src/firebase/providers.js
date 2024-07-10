import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from 'firebase/auth'

import { auth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const { displayName, email, photoURL, uid } = result.user

    return { ok: true, displayName, email, photoURL, uid }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return { ok: false, errorCode, errorMessage }
  }
}

export const registerUserWithEmailAndPassword = async ({
  email,
  password,
  displayName
}) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)
    const { photoURL, uid } = result.user

    await updateProfile(auth.currentUser, { displayName })

    return { ok: true, displayName, email, photoURL, uid }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return { ok: false, errorCode, errorMessage }
  }
}

export const loginWithEmailAndPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    const { displayName, photoURL, uid } = result.user

    return { ok: true, displayName, email, photoURL, uid }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return { ok: false, errorCode, errorMessage }
  }
}

export const logoutFirebase = async () => await auth.signOut()
