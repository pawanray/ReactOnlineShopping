import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ProductQuantity from '../components/ProductQuantity';
const CartCard = ({data,handleClick})=>{
    const {productQuantity} = useSelector(state=>state.products);
    return(
        <div className='wishlist-card'>
        <div className="product-card">
            <div className="card product-card-body">
                <div className='row'>
                    <div className='col-sm-3'>
                        <img src={data?.image} width="200" height="200" className='mx-auto' />
                    </div>
                    <div className='col-sm-9'>
                        <h6 className="text-muted mt-2">{data?.category}</h6>
                        <h6 className='product-title'>{data?.title}</h6>
                        <p>{data?.description}</p>
                        <h5 className="price">${data?.price}</h5>
                        <div class="product-action d-flex">
                        <ProductQuantity/>
                            <Button variant="contained" class="mr-2" onClick={() => handleClick(data, 'Delete')}>Delete</Button>
                            <Button variant="contained" color="primary"  onClick={() => handleClick(data, 'PlaceOrder')}>Place Your Order</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
export default CartCard