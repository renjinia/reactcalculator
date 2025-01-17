
import { useState } from 'react'
import './App.css'



function App() {

  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setDisplay(''); 
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString()); 
      } catch (err) {
        setDisplay('Error'); 
      }
    } else {
      setDisplay((prev) => prev + value); 
    }
  };

  return (
    <>
      <div className='container body'>
        <div className='text-center mb-4 calculator'>
          <h3 className='text-black mb-2'>CALCULATOR</h3>
          {/* display */}
          <input className='display' type="text" value={display}  placeholder='0' readOnly/>

          <div className='row g-2 mt-4 '>
           
            <div className='col-3'><button onClick={() => handleButtonClick('7')} className='btn text-black'>7</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('8')} className='btn text-black'>8</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('9')} className='btn text-black'>9</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('/')} className='btn text-black'>/</button></div>

            <div className='col-3'><button onClick={() => handleButtonClick('4')} className='btn text-black'>4</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('5')} className='btn text-black'>5</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('6')} className='btn text-black'>6</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('*')} className='btn text-black'>*</button></div>

            <div className='col-3'><button onClick={() => handleButtonClick('1')} className='btn text-black'>1</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('2')} className='btn text-black'>2</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('3')} className='btn text-black'>3</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('-')} className='btn text-black'>-</button></div>

            <div className='col-3'><button onClick={() => handleButtonClick('0')} className='btn text-black'>0</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('C')} className='btn text-black'>C</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('+')} className='btn text-black'>+</button></div>
            <div className='col-3'><button onClick={() => handleButtonClick('=')} className='btn text-black'>=</button></div>

            {/* <div className='col-12 equal'><button className='btn'></button></div> */}

          </div>  
          </div>
      </div>
    </>
  )
}

export default App


