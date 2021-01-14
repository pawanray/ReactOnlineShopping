import React, { useState } from 'react';
import {AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai';

const ProductCard = ({ data, handleClick }) => {
    return (
        <div>
            <div className="mb-3 product-card text-center">
                <div className="card product-card-body">
                    <img src={data?.image} width="200" height="200" className='mx-auto'/>
                    <h6 className="text-muted mt-2">{data?.category}</h6>
                    <h6 className='product-title'>{data?.title}</h6>
                    <h5 className="price">${data?.price}</h5>
                    <div className="product-action">
                        <button className="btn btn-view" onClick={()=>handleClick(data,'View')}><AiOutlineSearch size='1.3rem'/></button>
                        <button className="btn btn-icon btn-add-cart" onClick={()=>handleClick(data,'AddToCart')}>ADD TO CART</button>
                        <button className="btn btn-fav" onClick={()=>handleClick(data,'Wishlist')}><AiOutlineHeart size='1.3rem'/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard