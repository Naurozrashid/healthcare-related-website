import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
import Notfound from './components/Notfound/Notfound';
import SingleService from './components/Singleservice/SingleService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Doctor from './components/Doctor/Doctor';
import About from './components/About/About';

function App() {
  return (
    <div>
    
     <Router>
     <AuthProvider>
        <Header></Header>
        <Switch>
          <Route exact  path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/doctor">
            <Doctor></Doctor>
          </Route>
          <PrivateRoute path="/singleService/:id">
            <SingleService></SingleService>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
        </AuthProvider>
      </Router>
     
    </div>
  );
}

export default App;
