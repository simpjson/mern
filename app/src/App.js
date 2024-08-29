import './App.css';
import Home from './Home';
import {useState} from 'react';

function App() {
  let firstname = "subasree ";
  const[email,setEmail]= useState('youremail');
  const[mobile,setMobile]= useState('your mobile');
  const validate =()=>{
    if(email === " "){
      alert("email is empty");
    }else if(mobile === " "){
      alert("mobile is empty");
    }else{
      alert("everythins is fine");
    }
  }
  return (
    <div className="Container">
      <h1>This is React App</h1>
      { firstname }
      {email}
      <Home/>
<div><input type = "text" onChange={(e)=>setEmail(e.target.value)}/></div>
{mobile}
<div><input type="text" onChange={(e)=>setMobile(e.target.value)}/></div>
<button onClick={()=> validate()}>Click</button>
    </div>
  );
}

export default App;