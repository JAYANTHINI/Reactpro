import React from 'react'
import {BrowseRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {
  return(
    <div>
    <BrowseRouter>
    <Routes>
      <Route path = '/' element= {<Home/>}>
      <Route path = '/Contact' element ={<Contact/>}/>
      <Route path = '/About' element= {<About/>}/>
      </Route>
    </Routes>
    
    </BrowseRouter>
    </div>
  );
}
  

export default App                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
