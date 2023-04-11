import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Form from './Form';
import { stateContext } from './StateContext';
import { initialState, stateReducer } from './Reducer';

const Router = () => {
  const [state,dispatch] = useReducer(stateReducer,initialState);
  return (
    <div>
      <stateContext.Provider value={{state,dispatch}}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Login/>}></Route>
                  <Route path='/Form' element={<Form/>}></Route>
                  <Route path='/Home' element={<Home/>}></Route>     
              </Routes>
          </BrowserRouter>
        </stateContext.Provider>
    </div>
  )
}

export default Router
