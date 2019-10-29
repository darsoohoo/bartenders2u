import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import EditDashboard from '../dashboard/EditDashboard1';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Packages from '../../components/Packages';
import Company from '../Company';


const Routes = () => {
  return (
    <section >
      <Alert />
      <Switch>
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/edit-dashboard" component={EditDashboard} />
        <Route exact path="/company" component={Company} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
