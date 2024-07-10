import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

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
