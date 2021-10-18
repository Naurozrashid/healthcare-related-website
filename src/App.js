import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact  path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
