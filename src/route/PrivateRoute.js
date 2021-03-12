import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      localStorage.getItem('user login') ? (
      <Component {...props} /> 
      )
      : (
      <Redirect to={{
        pathname: "/login",
        state: {from: props.location}
      }}
      
      />
      )
  )} />
  )
}

export default PrivateRoute;
