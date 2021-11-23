import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PublicRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}
PublicRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}
export default PublicRoute
