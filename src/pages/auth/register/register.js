import React, { useEffect, useState } from 'react';
import { userRegister } from '../../../store/actions/users';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import MassageComponent from '../../../components/MassageComponent'
import { useForm } from "react-hook-form";

function Register() {
    const dispatch = useDispatch();
    const history = useHistory()
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [msg, setMsg] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => {
        const registerObj = {
            email:data.email,
            username:data.username,
            password:data.password,
            name:{
                firstname:data.firstname,
                lastname:data.lastname
            },
            address:{
                city:data.city,
                street:data.street,
                number:data.number,
                zipcode:data.zipcode,
                geolocation:{
                    lat:'-37.3159',
                    long:'81.1496'
                }
            }
        }
        setLoading(true)
        const [success,error] = await dispatch(userRegister(registerObj));
        if(success){
            console.log("sucess")
            setOpen(true)
            setLoading(false)
            setMsg('Register successfully');
            setTimeout(()=>{
                history.push('/login')
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
            <h3 className='text-center mb-4'>CREATE AN ACCOUNT</h3>

            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <div className="col-6">
                            <h5>PERSONAL INFORMATION</h5>
                            <div className="form-group">
                                <TextField variant="outlined" inputRef={register} name="firstname" className="form-control" label="First Name*" />
                            </div>
                            <div className="form-group">
                                <TextField name="lastname" inputRef={register} variant="outlined" className="form-control" label="Lastname *" />
                            </div>
                            <div className="form-group">
                                <TextField name="email" inputRef={register} variant="outlined" className="form-control" label="Email *" />
                            </div>
                            <div className="form-group">
                                <TextField name="username" inputRef={register} variant="outlined" className="form-control" label="Username *" />
                            </div>
                            <div className="form-group">
                                <TextField name="password" inputRef={register} variant="outlined" className="form-control" label="Password *" />
                            </div>
                            
                        </div>
                        <div className="col-6">
                        <h5>ADDRESS</h5>
                        <div className="form-group">
                                <TextField variant="outlined" inputRef={register} name="city" className="form-control" label="City *" />
                            </div>
                            <div className="form-group">
                                <TextField variant="outlined" inputRef={register} name="street" className="form-control" label="Street *" />
                            </div>
                            <div className="form-group">
                                <TextField variant="outlined" inputRef={register} name="number" className="form-control" label="Street Number*" />
                            </div>
                            <div className="form-group">
                                <TextField variant="outlined" inputRef={register} name="zipcode" className="form-control" label="Zipcode *" />
                            </div>
                        </div>
                        <div className='col-12'>
                        <div className="form-group">
                                <Button variant='outlined' onClick={handleSubmit(onSubmit)} color='primary'>Create</Button>  or Return to Store
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <MassageComponent duration={1500} loading={loading} open={open} msg={msg} handleClose={handleClose}/>

        </div>
    )
}


export default Register