// import React, {useContext} from 'react';
import { Redirect, Route } from 'react-router';
// import userContext from '../../App';

const PrivateRoute = ({children,...rest}) => {
    // const [loggedInInfo,setLoggedInInfo]=useContext(userContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          
        }
      />
    );
};

export default PrivateRoute;