import { Navigate, Route, Routes } from 'react-router-dom'

import AuthRoutes from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks'
import JournalRoutes from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/'

const RootRouter = () => {
  const status = useCheckAuth()

  if (status === 'checking') return <CheckingAuth />

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path='/*' element={<JournalRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}

      <Route
        path='*'
        element={
          status === 'authenticated' ? <Navigate to='/journal' /> : <Navigate to='/auth/login' />
        }
      />
    </Routes>
  )
}

export default RootRouter
