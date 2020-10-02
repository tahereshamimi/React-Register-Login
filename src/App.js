import React from 'react';
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Register from './pages/Register'
import OtpComponent from './pages/Otp'
import UserInfo from './pages/UserInfo';
import Login from './pages/Login'
import {Provider} from 'react-redux';
import store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
      <Switch>
        <Route exact path="/" component={Register}/>
        <Route path="/otp" component={OtpComponent}/>
        <Route path="/info" component={UserInfo}/>
        <Route path="/login" component={Login}/>
      </Switch>
      </Router>



      
      {/* <div className="App"> */}
      {/* <Register/> */}
      {/* <br/> */}
      {/* <br/> */}
      {/* <br/> */}
      {/* <OtpComponent/> */}
      {/* <br/> */}
      {/* <br/> */}
      {/* <br/> */}
      {/* <UserInfo/> */}
    {/* </div> */}
    </Provider>
  );
}

export default App;
