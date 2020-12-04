import React, { useState, useEffect} from 'react';
import './App.css';



function Newapi() {
  const [name, setItems] = useState(null)
  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=London&appid=262a6057c6af41b33c36ab814ab89604")
      .then(res => res.json())
      .then(data => setItems(data.base));
        
  }, []);

  return (
    <div className="App">
     

       {name}

        
      
    </div>
  );
}

export default Newapi;
