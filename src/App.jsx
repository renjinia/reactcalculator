
import { useState } from 'react'
import './App.css'



function App() {

//   function displayContent(content){
//   const result= result.value += content
//  }

 const [displayContent,setAllDisplayConent]=useState([])
 const {content,arith}=displayContent
 console.log(displayContent);
 try{
  
 }catch(err){
  console.log(err);
  
 }
 

  return (
    <>
      <div className='container body'>
        <div className='text-center mb-4 calculator'>
          <h3 className='text-black mb-2'>CALCULATOR</h3>
          {/* display */}
          <input className='display' type="text"  placeholder='0' readOnly/>

          <div className='row g-2 mt-4 '>
           
            <div className='col-3'><button onClick={e=>setAllDisplayConent({...displayContent,content:e.target.value})} className='btn text-black'>7</button></div>
            <div className='col-3'><button className='btn text-black'>8</button></div>
            <div className='col-3'><button className='btn text-black'>9</button></div>
            <div className='col-3'><button className='btn text-black'>/</button></div>

            <div className='col-3'><button className='btn text-black'>4</button></div>
            <div className='col-3'><button className='btn text-black'>5</button></div>
            <div className='col-3'><button className='btn text-black'>6</button></div>
            <div className='col-3'><button className='btn text-black'>*</button></div>

            <div className='col-3'><button className='btn text-black'>1</button></div>
            <div className='col-3'><button className='btn text-black'>2</button></div>
            <div className='col-3'><button className='btn text-black'>3</button></div>
            <div className='col-3'><button className='btn text-black'>-</button></div>

            <div className='col-3'><button className='btn text-black'>0</button></div>
            <div className='col-3'><button className='btn text-black'>C</button></div>
            <div className='col-3'><button className='btn text-black'>+</button></div>
            <div className='col-3'><button className='btn text-black'>=</button></div>

            {/* <div className='col-12 equal'><button className='btn'></button></div> */}

          </div>  
          </div>
      </div>
    </>
  )
}

export default App


