import React from 'react'
import { Switch, Route } from 'react-router'
import routes from 'config/routes'
import Settings from 'pages/Settings'
import TasksList from 'pages/TasksList'

const Routes = () => (
  <Switch>
    <Route path={routes.root} exact component={TasksList} />
    <Route path={routes.setting} component={Settings} />
  </Switch>
)

export default Routes
