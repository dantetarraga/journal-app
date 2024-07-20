import { Navigate, Outlet } from 'react-router-dom'

import { useCheckAuth } from '../hooks'

const PrivateRoute = () => {
  const { status } = useCheckAuth()

  return status === 'authenticated' ? <Outlet /> : <Navigate to='/auth/login' />
}

export default PrivateRoute
