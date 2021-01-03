import React, { useEffect, useState } from 'react';
import { getLogedInUser } from '../../../store/actions/users';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MassageComponent from '../../../components/MassageComponent'

function Login() {
    const dispatch = useDispatch();
    const history = useHistory()
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [msg, setMsg] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        setLoading(true)
        const [success,error] = await dispatch(getLogedInUser(data));
        if(success){
            console.log("sucess")
            setOpen(true)
            setLoading(false)
            setMsg('Login successfully');
            setTimeout(()=>{
                history.push('/')
            },2000)
        }
        if(error){
            setOpen(true)
            setLoading(false)
            setMsg('Something went wrong?')
            console.log("error")
        }
       
    };
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <div className='container my-4'>
            <h3 className='text-center mb-4'>ALREADY REGISTERED?</h3>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className='card' style={{height:'272px'}}>
                        <div className='card-body'>
                        <h5>NEW CUSTOMER</h5>
                        <p className='mb-3'>By creating an account with our store, you will be able to move through the
                        checkout process faster, store multiple shipping addresses,
                        view and track your orders in your account and more.</p>
                        <Button variant='outlined' color='primary'>CREATE AN ACCOUNT</Button>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5>LOGIN</h5>
                            <p>If you have an account with us, please log in.</p>
                            <div className="form-group">
                                <TextField  variant="outlined"  name="username" inputRef={register} className="form-control" label="Username/E-mail *"  />
                            </div>
                            <div className="form-group">
                                <TextField name="password" variant="outlined" inputRef={register} className="form-control" label="Password *"/>
                            </div>
                            <div className="form-group">
                            <Button variant='outlined' color='primary' onClick={handleSubmit(onSubmit)}>LOGIN</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <MassageComponent duration={1500} loading={loading} open={open} msg={msg} handleClose={handleClose}/>

        </div>
        
    )
}


export default Login