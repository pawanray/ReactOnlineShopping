import React from 'react';
import {
    NavLink
} from "react-router-dom";

const Navbar = () => {
    return (
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
    )
}

export default Navbar