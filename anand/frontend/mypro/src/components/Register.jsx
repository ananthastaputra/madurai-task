import React,{useState,useEffect} from "react"
import {useHistory} from 'react-router-dom'


const Register=()=>{



    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')



    return (
        <React.Fragment>
            <div className="container">
                First Name
                <input type="text" className='input-group' />
            </div>
            <div className='container'>
                Last Name 
                <input type='text' className='input-group' />
            </div>
            <div className='container' >
                Age 
                <input type='text' className='input-group' />

            </div>
            <div className='container'>
                Email 
                <input type='text' className='input-group' onChange={(e)=>setEmail(e.target.value) }/>

            </div>
            <div className='container'>
                password
                <input type='text' className='input-group' onChange={(e)=>setPassword(e.target.value)}/>

            </div>
            <div>
                <button>
                    Register
                </button>
            </div>


        </React.Fragment>
    )
}


export default Register