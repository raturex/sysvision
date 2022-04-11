import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import { SocietyPage } from '../pages/society/Society'
import { DepartmentPage } from '../pages/department/Department'
import { DirectionPage } from '../pages/direction/Direction'
import { SupervisionPage } from '../pages/supervision/Supervision'
import { GroupAgentPage } from '../pages/group/GroupAgent'
import { TeamPage } from '../pages/team/Team'
import { ProgramPage } from '../pages/program/Program'
import { ProgramQuartPage } from '../pages/program/ProgramQaurt'


export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/companies' component={SocietyPage} />
        <Route path='/directions' component={DirectionPage} />
        <Route path='/departments' component={DepartmentPage} />
        <Route path='/supervisions' component={SupervisionPage} />
        <Route path='/groups' component={GroupAgentPage} />
        <Route path='/teams' component={TeamPage} />
        <Route path='/program' component={ProgramPage} />
        <Route path='/program-quart' component={ProgramQuartPage} />
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
