import React, { useState } from 'react';
import Lamform from './bt/lamform';
import RandomGift from './bt/randomGift';
import TwoWayBinding from './bt/two-wayBinding';
import TodoList from './bt/tudoList';
import Navbar from './layout/Navbar'
import Test11 from './bt/test11'
import DOngho from './bt/Dongho'
import TimeOut from './bt/timeout'
import { Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <div>
      <li>
        <a href="/"><h1>Tudo list</h1></a>
      </li>
      <li>
      <a href="/DongHo"><h1>Dong ho</h1></a>
      </li>
      <li>
      <a href="/Dem Gio"><h1>Time Out</h1></a>
      </li>

      <Routes>
        <Route path='/' element={<TodoList/>}/>
        <Route path='/DongHo' element={<DOngho/>}/>
        <Route path='/Dem Gio' element={<TimeOut/>}/>

      </Routes>
    </div>
    
  );
}
export default App;