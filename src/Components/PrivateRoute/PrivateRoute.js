import React, {useContext} from 'react';
import { Redirect, Route } from 'react-router';
import {useHistory} from 'react-router-dom';
// import userContext from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const history = useHistory();
    // const [loggedInInfo, setLoggedInInfo]=useContext(userContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
       (  sessionStorage.getItem('token')) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;