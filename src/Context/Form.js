import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import './Form.css';
import { stateContext } from './StateContext';

let a = [];
const Form = () => {
    const {state,dispatch}=useContext(stateContext);
    console.log(state);
    const [inpName,setName]=useState(state.edit? state.edit[0]?.Name:" ");
    const [inpDescription,setDescription]=useState(state.edit? state.edit[0]?.Description:" ");
    const [isCompleted,setIsCompleted]=useState(false)
    const [formSub,setFormsub]=useState(false)
    
  const inputData=(e)=>{
    if(e.target.name==="name"){
      setName(e.target.value);
    }
    else{
      setDescription(e.target.value);
    }
  }

    const checked=(e)=>{
        setIsCompleted(e.target.checked?"true":"false")
    }

    const sub=(e)=>{
        e.preventDefault();
        setFormsub('true')
         if(inpName==='' || inpDescription=== '')return
          const linga={
            Name:inpName, 
            Description:inpDescription,
             Answer:isCompleted
            }
            if(state.edit?.length > 0){
              a[state.edit[1]]=linga
            }
            else{
              a.push(linga);
            }
      }

  return (
    <div id='form-sec'>
      <h1 className='form-h'>form</h1>
      <div className='form-container'>   
        <div className='form-row'>
          <div className='form-link'>
              <Link className="form-link-1" to={"/Home"}>home</Link>
          </div> 
          <div className='form-link'>
              <Link className="form-link-2" to={"/"}>login</Link>
          </div>
        </div>
        <form className='form-form' onSubmit={sub}>
            <input className="form-input" name='name' value={inpName} onChange={inputData} />
            {inpName==="" && formSub && <div className='errorMsg'>The Name Is Required</div>}<br/><br/>
            <input className="form-input" name='des' value={inpDescription} onChange={inputData} />    
            {inpDescription==="" && formSub &&<div className='errorMsg'>The Des Is Required</div>}<br/><br/>      
            <input className='form-checkbox' type='checkbox' value={isCompleted} onChange={checked}  id='checkbox'/>
            <label name='checkbox'>Its Completed</label><br/><br/>
            <input className="form-btn" onClick={()=>dispatch({type:"PUSH",payload:a})} type={"submit"}></input><br/><br/>
        </form>
        </div>
    </div>
  )
}

export default Form