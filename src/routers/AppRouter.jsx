import React, { useEffect } from 'react'
import { HashRouter, Switch, Redirect } from 'react-router-dom'
import DashboardRouter from './DashboardRouter'
import RegisterScreen from '../components/RegisterScreen'
import Start from '../components/Start'
import LoginScreen from '../components/LoginScreen'
import PrivateRoute from '../components/PrivateRoute'
import { useDispatch, useSelector } from 'react-redux'
import PublicRoute from '../components/PublicRoute'
import { login } from '../actions/auth.action'
import { Prueba } from '../components/Prueba'

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state.auth)
  const us = JSON.parse(window.localStorage.getItem('user')) || ''
  const dispatch = useDispatch()

  useEffect(() => {
    if (us) {
      dispatch(login(us.uid, us.name))
    }
  }, [])
  return (
    <HashRouter>
      <div className="main-container">
        <Switch>
          <PublicRoute isAuth={isAuth} exact path="/auth" component={Start} />
          <PublicRoute
            isAuth={isAuth}
            exact
            path="/auth/login"
            component={LoginScreen}
          />
          <PublicRoute
            isAuth={isAuth}
            exact
            path="/auth/register"
            component={RegisterScreen}
          />
          <PrivateRoute
            isAuth={isAuth}
            exact
            path="/"
            component={DashboardRouter}
          />
          <PrivateRoute isAuth={isAuth} path="/carts" component={Prueba} />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default AppRouter
