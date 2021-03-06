import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import {Container} from '@material-ui/core';

function App() {
  return (
    <>
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar/>
        <Switch>
          <Route path ='/' exact component={Home}/>
          <Route path ='/auth' exact component={Auth}/>
        </Switch>
      </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
