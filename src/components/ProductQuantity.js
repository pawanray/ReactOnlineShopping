import React, { useEffect, useState, useMemo } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {getProductQuantity} from '../store/actions/products';

const ProductQuantity = ({productId}) => {
    const dispatch = useDispatch();
    const [count,setCount] = useState(1)
    const {productQuantity} = useSelector(state=>state.products);
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setCount(count +value)
        //dispatch(getProductQuantity({productId:productId,quantity: count}))
        // dispatch(getProductQuantity(+value))
        // setQuantity(+value)
    }
    const handleAddQuantity = () => {
        // setQuantity(quantity + 1)
        setCount(count + 1)

        // dispatch(getProductQuantity({productId:productId,quantity: count}))
    }
    const handleMinusQuantity = () => {
        if(count > 1){
            setCount(count - 1)
            //dispatch(getProductQuantity(productQuantity - 1))
        }
        else{
            return
        }
    }
    useMemo(()=>{
        dispatch(getProductQuantity({productId:productId,quantity: count}))
        // if(productQuantity){
        //     setQuantity(productQuantity)
        // }
        
        // getQuantityHandler(quantity)
    },[count])
    return (
        <div className="product-quantity-box d-flex mr-2">
            <Button variant='contained' onClick={handleMinusQuantity}>-</Button>
            <TextField value={count} name='quantity' label="Quantity" variant="outlined" onChange={handleChange} />
            <Button variant='contained' onClick={handleAddQuantity}>+</Button>
        </div>
    )
}
export default  React.memo(ProductQuantity)