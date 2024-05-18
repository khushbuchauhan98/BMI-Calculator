
import '../Css/App.css'
import { useRef,useState } from 'react';
function Bmi() {
  let heightinput=useRef();
  let weighttinput=useRef();
//   const [name,setnamae]=useState('')
  const [bmi,setbmi]=useState('')
  const [bminumber,setbminumber]=useState('')
  function calculateBmiHendler(){
    let bmicaculate=(weighttinput.current.value) / (heightinput.current.value/100 * heightinput.current.value/100 )
   setbminumber(bmicaculate);
   if(bmicaculate<=18.5){
    setbmi('Underweight');
   }
    else if(bmicaculate>18.5 && bmicaculate<=24.9){
        setbmi('Normal');
    }
    else if(bmicaculate>25 && bmicaculate<=29.9){
        setbmi('Overweight');
    }
    else if(bmicaculate>30 && bmicaculate<=35){
        setbmi('Obesity');
    }
    else{
        setbmi('Severe Obesity');
    }
   
   heightinput.current.value='';
   weighttinput.current.value=''
//    setbtn(false)
  }
  return (
    <div className="container1">
       <h1>{bmi} </h1>
      <h3>Calculate your bmi💪</h3>
      <h4 className={bminumber == ''?'d-none' :""}>bmi={bminumber}</h4>
      <div className='flex'>
     <input ref={heightinput} placeholder='enter your height in cm' type='text'/>
     <input ref={weighttinput} placeholder='enter your weight' type='text'/>
     </div>
     <button onClick={calculateBmiHendler} className='btn1'>submit</button>
    </div>
  );
}

export default Bmi;
