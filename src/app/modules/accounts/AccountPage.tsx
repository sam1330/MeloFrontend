import React from 'react'
import {Navigate, Route} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Settings} from './components/settings/Settings'
import {AccountHeader} from './AccountHeader'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Account',
    path: '/crafted/account/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const AccountPage: React.FC = () => {
  return (
    <>
      <AccountHeader />
        <Route path='/crafted/account/overview'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
          <Overview />
        </Route>
        <Route path='/crafted/account/settings'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
          <Settings />
        </Route>

        <Navigate to='/crafted/account/overview' />
        <Navigate to='/crafted/account/overview' />
    </>
  )
}

export default AccountPage
