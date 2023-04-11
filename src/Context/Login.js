import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';
import { stateContext } from './StateContext';

const Login = (e) => {
    const[userName,setUserName]=useState('')
    const[passWord,setPassWord]=useState('')
    const state =useContext(stateContext);
    console.log("state", state);
    const users=[
        {
            userName:"aaa",
            passWord:111
        },
        {
            userName:"bbb",
            passWord:222
        },
        {
            userName:"ccc",
            passWord:333
        },
        {
            userName:"ddd",
            passWord:444
        },
        {
            userName:"eee",
            passWord:555
        }
    ]

    const userNameInput=(e)=>{
        setUserName(e.target.value)
    }

    const passWordInput=(e)=>{
        setPassWord(e.target.value)
    }

    let Navigate=useNavigate();

    let submiting=(e)=>{
        e.preventDefault()
        let Logindata =users.some((e)=>e.userName===userName)
        console.log(Logindata);
        if(Logindata){
            Navigate('/Home')
        }
    }
    
  return (
    <div id='login-sec'>
        <h1 className='login-h'>login</h1>
      <div className='login-container'>
        <form className='login-form' onSubmit={submiting}>
            <input
                className='input'
                type={'text'}
                value={userName}
                placeholder={'Enter UserName'}
                onChange={userNameInput}
            />
            <input
                className='input'
                type={'text'}
                value={passWord}
                placeholder={'Enter PassWord'}
                onChange={passWordInput}
            />
            <button  type={'submit'}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
