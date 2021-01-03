import React, { useState } from 'react';
import { CgShoppingCart, CgTrash } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import ProductQuantity from '../components/ProductQuantity'
const WishlistCard = ({ data, handleClick }) => {
    const {productQuantity} = useSelector(state=>state.products);
    return (
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
                                    <ProductQuantity productId={data.id}/>
                                <button class="btn mr-2" onClick={() => handleClick(data, 'Delete')}><CgTrash size='1.2rem'/></button>
                                <button class="btn" onClick={() => handleClick(data, 'AddToCart')}><CgShoppingCart size='1.2rem'/></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default WishlistCard