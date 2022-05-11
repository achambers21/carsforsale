import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';

import CarForm from './components/CarForm';
import AllCars from './components/AllCars';
import OneCar from './components/OneCar';
import UpdateCar from './components/UpdateCarForm';
import Navigation from './components/Navigation';
import Home from './components/Home';

import { BrowserRouter,Link,Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <Navigation/>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/cars' component={AllCars}>
              <AllCars>formSubmitted={formSubmitted}</AllCars>
            </Route>
            <Route exact path='/new' component={CarForm}>
              <CarForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></CarForm>
            </Route>
            <Route exact path="/cars/:_id">
              <OneCar></OneCar>
            </Route>
            <Route exact path="/cars/update/:_id">
              <Link to="/" className='btn btn-info'>Home</Link>
              <UpdateCar setFormSubmitted={setFormSubmitted}></UpdateCar>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
