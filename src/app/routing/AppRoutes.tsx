/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC, Suspense, lazy} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {Logout} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {RootState} from '../../setup'
import {Login} from '../modules/auth/components/Login'
import {Registration} from '../modules/auth/components/Registration'
import {ForgotPassword} from '../modules/auth/components/ForgotPassword'
import {FallbackView} from '../../_metronic/partials'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { MenuTestPage } from '../pages/MenuTestPage'

const AppRoutes: FC = () => {
  const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)

  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
    <Routes>
      {/* PUBLIC ROUTES */}
      {!isAuthorized && (
        <>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/registration' element={<Registration />} />
          <Route path='/auth/forgot-password' element={<ForgotPassword />} />
          <Route path='/auth' element={<Navigate to='/v1/auth/login' />} />
          <Route path='*' element={<Navigate to='/v1/auth/login' />} />
        </>
      )}

      {/* {isAuthorized && ( */}
        <>
            <Route path='/dashboard' element={<DashboardWrapper />} />
            <Route path='/builder' element={<BuilderPageWrapper />} />
            <Route path='/crafted/pages/profile' element={<ProfilePage />} />
            <Route path='/crafted/pages/wizards' element={<WizardsPage />} />
            <Route path='/crafted/widgets' element={<WidgetsPage />} />
            <Route path='/crafted/account' element={<AccountPage />} />
            <Route path='/apps/chat' element={<ChatPage />} />
            <Route path='/menu-test' element={<MenuTestPage />} />
        </>

      {/* PRIVATE ROUTES */}
      {/* <MasterLayout>
        <PrivateRoutes />
      </MasterLayout> */}

      <Route path='/error' element={<ErrorsPage />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
    </Suspense>
  )
}

export {AppRoutes}
