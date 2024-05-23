import {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import AuthInit from './modules/auth/redux/AuthInit'
import {AppRoutes} from './routing/AppRoutes'
import { MasterLayout } from '../_metronic/layout/MasterLayout'

type Props = {
  basename: string
}

const InitApp = ({basename}: Props) => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <BrowserRouter basename={basename}>
        <I18nProvider>
          <LayoutProvider>
            <AuthInit>
              {/* <RouterProvider router={routes} /> */}
              <MasterLayout>
                <AppRoutes />
              </MasterLayout>
            </AuthInit>
          </LayoutProvider>
        </I18nProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export {InitApp}
