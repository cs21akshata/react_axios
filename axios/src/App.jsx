import React from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import FetchData  from './FetchData'
function App() {
 
  
  return (
    <div className='App'>
        < FetchData/>
        <Table/> 
       

    </div>
    
      
  )
}

export default App;
