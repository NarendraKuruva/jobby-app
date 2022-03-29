import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
   NOT_FOUND_PAGE_PATH,
   NOT_FOUND_PAGE
} from '../constants/NavigationConstants'
import PageNotFound404 from '../components/PageNotFound404'
import LoginPage from '../../JobbyApp/components/loginPage'
import JobsPage from '../../JobbyApp/components/Jobs'
import JobbyHome from '../../JobbyApp/components/Home'
import JobItemDetails from '../../JobbyApp/components/JobItemDetails'
import ProtectedRoute from '../../JobbyApp/components/ProtectedRoute'
import NotFoundPage from '../../JobbyApp/components/NotFound'
import CounterWithToast from './CounterWithToast'
import Home from './Home'

export const routes = (): React.ReactElement => (
   <Router>
      <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/counter' component={CounterWithToast} />
         <Route exact path='/jobby/login' component={LoginPage} />
         <ProtectedRoute exact path='/jobby/' component={JobbyHome} />
         <ProtectedRoute exact path='/jobby/jobs' component={JobsPage} />
         <ProtectedRoute
            exact
            path={`/jobby/job/:id`}
            component={JobItemDetails}
         />
         {/* <Route
            path={NOT_FOUND_PAGE_PATH}
            key={NOT_FOUND_PAGE}
            component={PageNotFound404}
         /> */}
         <Route component={NotFoundPage} />
      </Switch>
   </Router>
)
