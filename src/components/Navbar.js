import React from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart, AiOutlinePoweroff } from 'react-icons/ai';

import {
    NavLink
} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import {logoutUser} from '../store/actions/users'
const Navbar = () => {
    const { logedInUser } = useSelector(state => state.users);
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        dispatch(logoutUser({}))
    }
    return (
        <div className='row'>
            <div className='col-sm-8'>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/products/men">Men</NavLink>
                    </li>

                    <li>
                        <NavLink exact activeClassName="active" to="/products/women">Women</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/products/jewelery">Jewelery</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/products/electronics">Electronics</NavLink>
                    </li>
                </ul>
            </div>
            <div className='col-sm-4'>
                <ul className='other-menu'>
                    <li>
                        {logedInUser?.name?.firstname} {logedInUser?.name?.lastname}
                        <HiOutlineUser size='1.2rem' className='ml-2' />
                        <ul>

                            {
                                logedInUser?.name ? (
                                    <>
                                        <li>
                                            <NavLink exact activeClassName="active" to="/wishlist"><AiOutlineHeart size='1rem' /> Wishlist</NavLink>
                                        </li>
                                        <li>
                                            <NavLink exact activeClassName="active" to="/cart"><CgShoppingCart size='1rem' /> View Cart</NavLink>
                                        </li>
                                        <li>
                                            <Button exact activeClassName="active" onClick={logoutHandler}><AiOutlinePoweroff size='1rem' /> Logout</Button>
                                        </li>
                                    </>
                                ) : (
                                        <>
                                            <li>
                                                <NavLink exact activeClassName="active" to="/login"><RiLockPasswordLine size='1rem' /> Login</NavLink>
                                            </li>
                                            <li>
                                                <NavLink exact activeClassName="active" to="/register"><HiOutlineUser size='1rem' /> Register</NavLink>
                                            </li>
                                        </>
                                    )
                            }
                        </ul>
                    </li>
                    {/* <li>
                    <NavLink exact activeClassName="active" to="/cart"><CgShoppingCart size='1rem' /></NavLink>
                    </li> */}
                </ul>
            </div>
        </div>

    )
}

export default Navbar