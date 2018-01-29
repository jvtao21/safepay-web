import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppContainer from '../containers/AppContainer'
import HomeContainer from '../containers/HomeContainer'
import Terms from '../components/content/tos/tos'

const Routes = () => (
  <AppContainer>
    <Switch>
      <Route path='/home' component={HomeContainer} />
      <Route path='/terms' component={Terms} />
      <Route path="/" component={HomeContainer} />
    </Switch>
  </AppContainer>
)

export default Routes
