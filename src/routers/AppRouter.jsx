import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../components/LoginScreen";
import DashboardRouter from "./DashboardRouter";

const AppRouter = () => {
  return (
    <HashRouter>
      <div className='container'>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route path='/' component={DashboardRouter} />
          <Redirect to='/login' />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default AppRouter;
