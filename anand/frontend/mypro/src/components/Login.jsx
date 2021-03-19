import React,{useState,useEffect} from "react"
import {useHistory} from 'react-router-dom'
import '../App.css';

const Login=()=>{

    

    return (
        <div>
            <div>
                Email
                <input type='text' className='Login' />


            </div>

            <div>
                Password 
                <input type='text' className='Login' />


            </div>
        </div>
    )
}

export default Login