import {useState,useEffect} from 'react';
//import './App.css';
import Blogs from './blogCardsitems'
import {useFetch} from './useFetch';
import {ConstDisplay} from './navbar';

function App() {
 
  
  return (
    <div className="App">
     {/* <Blogs></Blogs> */}
      <ConstDisplay></ConstDisplay>
    </div>
  );
}

export default App;
