import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import CartCard from '../../components/CartCard';
import { deleteUserCart } from '../../store/actions/cart';
import MassageComponent from '../../components/MassageComponent';
const Cart = () => {
    const dispatch = useDispatch();
    const {userCart} = useSelector(state=>state.cart);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(false);
    const onsubmit = (data,type)=>{
        if(type === "Delete"){
            dispatch(deleteUserCart(data.id))
            setOpen(true)
            setLoading(false)
            setMsg('Deleted successfully');
            console.log(data)
        }
       
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    return (
        <div className='container my-3'>

            <h3 className='mb-3'>My Cart ({userCart?.products.length})</h3>
            <hr/>
            <div className='row'>
        {
            userCart?.products?.length ? userCart?.products.map(product=>{
                debugger
                   return  (
                   <div className="col-12"><CartCard data={product} handleClick={onsubmit}/></div>
                   )
            }):<h5>Cart Data not Available</h5>
        }
        </div>
        <MassageComponent duration={1500} loading={loading} open={open} msg={msg} handleClose={handleClose}/>
        </div>
    )
}

export default Cart;