import {React, useEffect, useState} from 'react';
import Billing from './Billing';

import './Login.css';

const Login=()=>{

    const[page,update_page]=useState(false);


    useEffect(()=>{

        let username=window.localStorage.getItem('username');
        let password=window.localStorage.getItem('password');

        if(username=='user123' && password=='password'){
            update_page(true);
        }


    },[]);

    const sub=(event)=>{
        event.preventDefault();
        if(event.target.username.value=='user123' && event.target.password.value=='password'){
            update_page(true);
            window.localStorage.setItem('username',event.target.username.value);
            window.localStorage.setItem('password',event.target.password.value);
        }       
    }

    return (
        <div className='cbody'>
{!page &&  <div class="container">
	<div class="screen">
        <h1>RVS AGENCY</h1>
		<div class="screen__content">
			<form class="login" onSubmit={sub}>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input"  name={'username'} placeholder="User name / Email"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" name={'password'} placeholder="Password"/>
				</div>
				<input class="button login__submit" type={'submit'} value='Log in'>
					
				</input>				
			</form>
			
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
}


{page && <Billing></Billing>}

        </div>
    );
}



export default Login;