import React from 'react'
import axios from 'axios';

function Memory() {
    const headers = {
        'Authorization': 'Bearer 1-NyJzzvYO4C4bKY7Lvzm9OxeeaOSPQWIZqVYIBLqpHEAifmDwaewfRgpfRkZwTEHx',
    };
   const getFunction = () => {   
      axios.get('http://172.172.172.101/api/v2.0/disk/get_unused',{headers}).then((response)=>{
       console.log(response.data);
       console.log("HEllo");
    })
   }
   
  return (
    <div>      
      <button
      onClick={getFunction()}
      >Click Me </button>
      </div>
  )}
  export default Memory;