import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import DashboardRouter from "./DashboardRouter";
import RegisterScreen from "../components/RegisterScreen";
import Start from "../components/Start";
import LoginScreen from "../components/LoginScreen";

const AppRouter = () => {
  return (
    <HashRouter>
      <div className='main-container'>
        <Switch>
          <Route exact path='/auth' component={Start} />
          <Route exact path='/auth/login' component={LoginScreen} />
          <Route exact path='/auth/register' component={RegisterScreen} />
          <Route path='/' component={DashboardRouter} />
          <Redirect to='/auth' />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
