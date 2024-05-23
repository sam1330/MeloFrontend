import React from 'react'
import {Navigate, Route} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Vertical} from './components/Vertical'
import {Horizontal} from './components/Horizontal'

const wizardsBreadCrumbs: Array<PageLink> = [
  {
    title: 'Wizards',
    path: '/crafted/pages/wizards/horizontal',
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

const WizardsPage: React.FC = () => {
  return (
    <>
      <Route path='/crafted/pages/wizards/horizontal'>
        <PageTitle breadcrumbs={wizardsBreadCrumbs}>Horizontal</PageTitle>
        <Horizontal />
      </Route>
      <Route path='/crafted/pages/wizards/vertical'>
        <PageTitle breadcrumbs={wizardsBreadCrumbs}>Vertical</PageTitle>
        <Vertical />
      </Route>
      <Navigate to='/crafted/pages/wizards/horizontal' />
    </>
  )
}

export default WizardsPage
