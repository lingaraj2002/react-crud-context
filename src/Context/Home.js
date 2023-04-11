import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Home.css'
import { stateContext } from './StateContext'

const Home = () => {   
  const {state:{task},dispatch}=useContext(stateContext);
  console.log(task);

  const deleteTask=(value)=>{
        delete task[value];
        task.flat(); 
        const del = task;
        return del;
  }

  let Navigate=useNavigate();

  const editTask=(value,i)=>{
    Navigate('/Form')
    dispatch({
      type:"EDIT",
      payload:[value,i]
    })
  }

  return (
    <div id='home-sec'>
        <h1 className='home-h'>home</h1>
      <div className='home-container'>
        <div className='home-row'>
          <div className='home-link'>
              <Link className="home-link-1" to={"/Form"}>Form</Link>
          </div>
          <div className='home-link'>
            <Link className="home-link-2" to={"/"}>Login</Link>
          </div>
        </div>
        <div className='home-card'>
            <table className='home-table'>
                  <tr className='home-tr'>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Completed or Not</th>
                    <th>Edit and Delete</th>
                </tr>
                {task.map((value,i)=>{
                  return <tr key={i}>
                            <td>{value.Name}</td>
                            <td>{value.Description}</td>
                            <td>
                                <input
                                name={"output"}
                                type={"checkbox"}
                                checked={value.Answer}
                                />
                            </td>
                            <td>
                              <div className='ed-row'>
                                <div className='home-edit'>
                                <button onClick={()=>editTask(value,i)}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                </div>
                                <div className='home-del'>
                                  <button onClick={()=>dispatch({type:"DELETE",payload:deleteTask(i)})}><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                              </div>                            
                            </td>
                          </tr>
                      }
          )}                 
          </table> 
        </div>
      </div>
    </div>
  )
}

export default Home