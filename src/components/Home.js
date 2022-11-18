import React, { useState,useEffect } from 'react'
import {useNavigate} from 'react-router'

const Home = () => {
    const navigate=useNavigate();
    const [enterUserName,setEnterUserName]= useState('');
    const userNameChange=(event)=>
     {
    setEnterUserName(event.target.value)
     }
    const loginHandler=(event) =>{
        event.preventDefault();
        
        //validtion
        if(enterUserName.trim().length===0)
          return alert("user name is unvalid");
              
        setEnterUserName('')
        navigate('/search')
    }
    return ( <div>
        
 <form onSubmit={loginHandler}>

<label htmlFor='username'><h1><u>Enter User Name  </u>  </h1></label>
<input   id="username" type="text" value={enterUserName} onChange={userNameChange}/><br/>

<Button type='submit'>   היכנס לאתר   </Button>
</form>
        
        </div> )
};