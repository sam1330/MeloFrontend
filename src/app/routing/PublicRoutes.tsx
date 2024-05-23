import {Route, Routes} from 'react-router-dom'
import {AuthPage} from '../modules/auth'

export function PublicRoutes() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthPage/>} />
    </Routes>
  )
}
