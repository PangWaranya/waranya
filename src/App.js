import logo from './logo.svg';
import './App.css';
import Pofile from './components/Pofile'
import Slideimg from './components/Slideimg'
import Conteat from './components/Conteat'
import Education from './components/Education'
import React, { useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import New from './components/New'
import 'weather-icons/css/weather-icons.min.css';

function App() {
  const [data, setItems] = useState(null)
  console.log(data)
  useEffect(() => {
    fetch(" https://5ed5b9428769250016e63743.mockapi.io/users")
      .then(res => res.json())
      .then(data => setItems(data));
        
  }, []);
  
  
  

  return (
    <div className="App">
        
        <Pofile />
        <Slideimg />
         <i class="wi wi-day-lightning"></i>
        <div>
        
          {data && data.map((item,index) =>
          (<div className='api'key={index}>{item?.id} {item?.name} {item?.phone} <img className='pp'src={item?.avatar}/> </div> ))}
           
        </div>  
        
        <Button type="primary">Primary Button</Button>
        <Conteat />
        <Education />
        
        
    </div>
  );
}

export default App;
