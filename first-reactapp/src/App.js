import './App.css';
import { useState } from 'react';
function App() {
  const [bgcolor , setColor] = useState("white")
 

  const changeColor = (color)=>{

    setColor(color)
  }
  
  const divStyle = {
    backgroundColor : bgcolor ,
  
  }
  return (
    <>
      
    <div style={divStyle}>
  <button className='red item' onClick={()=> {changeColor("red")}}>red</button>
  <button className='blue item' onClick={()=> {changeColor("blue")}}>blue</button>
  <button className='green item' onClick={()=> {changeColor("green")}}>green</button>
    </div>
    </>
  );
}

export default App;
