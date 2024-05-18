
import '../Css/App.css'
import { useRef,useState } from 'react';
import Bmi from './Bmi';
function App() {
  let nameinput=useRef();
  const [name,setnamae]=useState('')
  const [btn,setbtn]=useState(true)
  function nameHendler(){
   setnamae(nameinput.current.value);
   nameinput.current.value=''
   setbtn(false)
  }
  return (
    <div>
    <div className="container">
      <h1>Welcomr to bootcamp {name}!</h1>
     <input ref={nameinput} placeholder='enter your name' type='text'/>
     <button onClick={nameHendler} className={btn==true?'btn' :'d-none'}>submit</button>
     </div>
     <Bmi/>
     
    </div>
  );
}

export default App;
