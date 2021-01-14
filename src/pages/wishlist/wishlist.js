import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WishlistCard from '../../components/WishlistCard';
import MassageComponent from '../../components/MassageComponent';

import {deleteWishlistProduct} from '../../store/actions/wishlist';
import {deleteUserCart, getUserCart} from '../../store/actions/cart';

const Wishlist = () => {
    const dispatch = useDispatch();
    const { userWishlist } = useSelector(state => state.wishlist)
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [msg, setMsg] = useState(false);
    const onSubmit = (data,type)=>{
        if(type === "Delete"){
            dispatch(deleteWishlistProduct(data.id))
            setOpen(true)
            setLoading(false)
            setMsg('Deleted successfully');
            console.log(data)
        }
        if(type === "AddToCart"){
            dispatch(getUserCart(data,data?.id))
            setOpen(true)
            setLoading(false)
            setMsg('Product Added into Cart Successfully')
            console.log(data)
        }
    }
    const handleClose = ()=>{
        setOpen(false);
    }
    return (
        <div className='container my-3'>

            <h3 className='mb-3'>My Wishlist ({userWishlist?.products.length})</h3>
            <hr/>
            <div className='row'>
                {
                    userWishlist?.products.length ? userWishlist.products.map(product => {
                        return (
                            <div className='col-sm-12' key={product.id}>
                                <WishlistCard handleClick={onSubmit} data={product} />
                            </div>
                        )
                    }) : <div className='col-sm-12'><h5>Wishlist Data not available</h5></div>
                }
            </div>
           <MassageComponent duration={1500} loading={loading} open={open} msg={msg} handleClose={handleClose}/>
        </div>
    )
}
export default Wishlist