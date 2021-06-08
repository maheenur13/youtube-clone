import './_app.scss';
import Header from './Components/Header/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import { useEffect, useState, createContext } from 'react';
// import { useSelector} from 'react-redux';
import LoginScreen from './Screen/LoginScreen/LoginScreen';
// import {useHistory} from 'react-router-dom';
// import { userContext} from ''
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";



const Home = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggleSidebar = () => {
    // console.log('entered then ', toggleSidebar)
    setToggleSidebar(value => !value)
  };
  return (
    <>
    
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app-container ">
        <Sidebar toggleSidebar={toggleSidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app-main">
          {children}
        </Container>
      </div>
    </>
  )
}

export const userContext=createContext();
const App = () => {
const [loggedInInfo, setLoggedInInfo] = useState([]);
console.log('logged in user info',loggedInInfo);
  const history = useHistory();
  return (
    <>
    <userContext.Provider value={[loggedInInfo,setLoggedInInfo]}>
      <Switch>
        <Route exact path="/">
          <Home>
            <HomeScreen />
          </Home>
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/search">
          <Home>
            <h1>Search results</h1>
          </Home>
        </Route>
        <Route>
          <Redirect to="/"/>
        </Route>
      </Switch>
    {/* // <LoginScreen/> */}
    </userContext.Provider>
    </>
  );
}

export default App;
