import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Usercontext';
import './Signup.css'

const Signup = () => {
    const [error, seterror] = useState(null);
    const {createuser} =useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if(password.length < 6){
            seterror('password should be 6 charchets');
            return;
        }

        if(password !== confirm){
            seterror('your password didn');
            return;
        }
        createuser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => console.error(error));



    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' required/>
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' required/>
            </div>
            <div className='form-control'>
                <label htmlFor='confirm'>Confirm Password</label>
                <input type='password' name='confirm' required/>
            </div>
            <input className='btn-submit' type='submit' value='singup'/>

        </form>
        <p>All have an Account<Link to ='/login'>Log In</Link></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default Signup;