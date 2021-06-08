import './_app.scss';
import Header from './Components/Header/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import { useEffect, useState } from 'react';
// import { useSelector} from 'react-redux';
import LoginScreen from './Screen/LoginScreen/LoginScreen';
// import {useHistory} from 'react-router-dom';

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
    console.log('entered then ', toggleSidebar)
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

const App = () => {
const [loggedInInfo, setLoggedInInfo] = useState([]);

  const history = useHistory();
  return (
    <>
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
    </>
  );
}

export default App;
