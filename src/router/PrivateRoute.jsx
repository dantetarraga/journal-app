import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouter = ({ status }) => {
  console.log('status', status)
  return status === 'authenticated' ? <Outlet /> : <Navigate to='/auth/login' />
}

export default ProtectedRouter
