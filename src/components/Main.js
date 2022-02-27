import React from 'react'
import Home from '../pages/Home';
import Search from '../pages/Search';
import Library from '../pages/Library';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


export default function Main() {
  return (
    <Router>
    <div className='main'>Main</div>
          <Routes>
                 <Route exact path='/Home' element={< Home />}></Route>
                 <Route exact path='/Search' element={< Search />}></Route>
                 <Route exact path='/Library' element={< Library />}></Route>
          </Routes>
    </Router>
  )
}
