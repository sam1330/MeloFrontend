import {Suspense, lazy} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'

<Route path='/dashboard' element={<DashboardWrapper />} />

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Routes>
        <Route path='/dashboard' element={<DashboardWrapper />} />
        <Route path='/builder' element={<BuilderPageWrapper />} />
        <Route path='/crafted/pages/profile' element={<ProfilePage />} />
        <Route path='/crafted/pages/wizards' element={<WizardsPage />} />
        <Route path='/crafted/widgets' element={<WidgetsPage />} />
        <Route path='/crafted/account' element={<AccountPage />} />
        <Route path='/apps/chat' element={<ChatPage />} />
        <Route path='/menu-test' element={<MenuTestPage />} />
        {/* <Navigate from='/auth' to='/dashboard' />
        <Navigate from='/' to='/dashboard' /> */}
        <Navigate to='error/404' />
      </Routes>
    </Suspense>
  )
}
