import {useState, useEffect} from 'react';
import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navigation from './Navigation';
import Burger from './Burger';
import Pizza from './Pizza';
import Home from './Home';
export const FoodContext = React.createContext();

function App() {

  let [data, setData] = useState([]);
  let baseURL = "https://fod-app.herokuapp.com/food";

  useEffect(() => {
    axios.get(baseURL).then((response)=>{
      setData(response.data);
    });
  }, [])

  return (
    <Router>
      <Navigation />
      <FoodContext.Provider value={{data}}>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/Home' element={<Home/>} />
          <Route exact path='/Pizza' element={<Pizza/>} />
          <Route exact path='/Burger' element={<Burger/>} />
        </Routes>
      </FoodContext.Provider>
    </Router>
  );
}

export default App;
