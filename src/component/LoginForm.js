import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'
import AttendanceWrapper from './AttendanceWrapper';

const LoginForm = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [success, setsuccess] = useState(false)
    const [errmsg, seterrmsg] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        setemail('')
        setpassword('')
        setsuccess(true) //manually setting it to true for successful login 
        if (!success)
            seterrmsg('Invalid Login Credentials')

    }
    return (
        <>
            {
                success ? (<AttendanceWrapper />) : (<div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
                    <div className='login'>
                        <p className='text-danger text-center'>{errmsg}</p>
                        <h2 className='mb-3'>Login Form</h2>
                        <form onSubmit={handleSubmit} className='needs-validation'>
                            <div className='form-group mb-2 was-validated'>
                                <label htmlFor='email' className='form-label'>Email Address</label>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} required></input>
                                <div className='invalid-feedback'>
                                    Please Enter Email Address
                                </div>

                            </div>
                            <div className='form-group mb-2 was-validated'>
                                <label htmlFor='password' className='form-label'>Password</label>
                                <input type="password" className='form-control' onChange={(e) => setpassword(e.target.value)} required ></input>
                                <div className='invalid-feedback'>
                                    Please Enter Passowrd
                                </div>
                            </div>
                            <button type="submit" className='btn btn-success mt-2 w-100'>Login</button>
                        </form>
                    </div>
                </div>

                )
            }
        </>

    )
}

export default LoginForm