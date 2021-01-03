import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../../store/actions/users';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Register() {
    return (
        <div className='container my-4'>
            <h3 className='text-center mb-4'>CREATE AN ACCOUNT</h3>

            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <div className="col-6">
                            <h5>PERSONAL INFORMATION</h5>
                            <div className="form-group">
                                <TextField variant="outlined" name="firstname" className="form-control" label="First Name*" />
                            </div>
                            <div className="form-group">
                                <TextField name="lastname" variant="outlined" className="form-control" label="Lastname *" />
                            </div>
                            <div className="form-group">
                                <TextField name="email" variant="outlined" className="form-control" label="Email *" />
                            </div>
                            <div className="form-group">
                                <TextField name="username" variant="outlined" className="form-control" label="Username *" />
                            </div>
                            <div className="form-group">
                                <TextField name="password" variant="outlined" className="form-control" label="Password *" />
                            </div>
                            
                        </div>
                        <div className="col-6">
                        <h5>ADDRESS</h5>
                        <div className="form-group">
                                <TextField variant="outlined" name="city" className="form-control" label="City *" />
                            </div>
                            <div className="form-group">
                                <TextField variant="outlined" name="street" className="form-control" label="Street *" />
                            </div>
                            <div className="form-group">
                                <TextField variant="outlined" name="number" className="form-control" label="Street Number*" />
                            </div>
                            <div className="form-group">
                                <TextField variant="outlined" name="zipcode" className="form-control" label="Zipcode *" />
                            </div>
                        </div>
                        <div className='col-12'>
                        <div className="form-group">
                                <Button variant='outlined' color='primary'>Create</Button>  or Return to Store
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register