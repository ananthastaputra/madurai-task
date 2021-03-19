import React,{useState,useEffect} from "react"
import {useHistory} from 'react-router-dom'
import '../App.css';


const Students=()=>{
    const history=useHistory()
    
    
    
    return (
        <React.Fragment>
            <div className='welcome-page'>
                welcome to my page
            </div>
            <div className='nav-bar'>
                <div className='nav-elements'>
                <button className='nav-elements' onClick={()=>{
                    history.push('/Register')
                }}>
                Register

                </button>
                    

                </div>
                <div className='nav-elements'>
                <button className='nav-elements' onClick={()=>{
                    history.push('/Login')

                }}> Login

                </button>
                </div>


            </div>
        </React.Fragment>
    )

}


export default Students