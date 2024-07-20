import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { auth } from '../firebase/config'
import { login } from '../store/auth'

const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return dispatch({ type: 'auth/logout' })

      const { uid, displayName, email, photoURL } = user
      dispatch(login({ uid, displayName, email, photoURL }))
    })
  }, [])

  return {
    status
  }
}

export default useCheckAuth
