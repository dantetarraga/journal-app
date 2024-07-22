import { checkingCredentials, login, logout } from '.'
import {
  loginWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailAndPassword,
  signInWithGoogle
} from '../../firebase/providers'

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await signInWithGoogle()

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }))

    dispatch(login(result))
  }
}

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  firstName,
  lastName
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const displayName = `${firstName} ${lastName}`
    const result = await registerUserWithEmailAndPassword({
      email,
      password,
      displayName
    })

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }))

    dispatch(login(result))
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const result = await loginWithEmailAndPassword({ email, password })

    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }))

    dispatch(login(result))
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase()

    dispatch(logout())
  }
}
