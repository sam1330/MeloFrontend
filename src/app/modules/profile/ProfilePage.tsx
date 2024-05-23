import React from 'react'
import {Navigate, Route} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Projects} from './components/Projects'
import {Campaigns} from './components/Campaigns'
import {Documents} from './components/Documents'
import {Connections} from './components/Connections'
import {ProfileHeader} from './ProfileHeader'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/crafted/pages/profile/overview',
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

const ProfilePage: React.FC = () => {
  return (
    <>
      <ProfileHeader />
        <Route path='/crafted/pages/profile/overview' element={<Overview />}>
          {/* <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle> */}
          
        </Route>
        <Route path='/crafted/pages/profile/projects' element={<Projects />}>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
        </Route>
        <Route path='/crafted/pages/profile/campaigns'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
          <Campaigns />
        </Route>
        <Route path='/crafted/pages/profile/documents'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
          <Documents />
        </Route>
        <Route path='/crafted/pages/profile/connections'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
          <Connections />
        </Route>
        <Navigate to='/crafted/pages/profile/overview' />
    </>
  )
}

export default ProfilePage
