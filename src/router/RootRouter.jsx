import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'

const RootRouter = () => {
  return (
    <Routes>
      <Route path='auth/*' element={<AuthRoutes />} />

      <Route path='/*' element={<JournalRoutes />} />
    </Routes>
  )
}

export default RootRouter
