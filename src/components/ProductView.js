import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import DialogComponent from '../components/DialogComponent'
import ProductQuantity from './ProductQuantity';
import { useSelector } from 'react-redux';

const ProductView = ({selectedProduct, open, handleDialogClose, addToCartHandler})=>{
    const {productQuantity} = useSelector(state=>state.products);
//     const filterQuntity = null
//     useEffect(()=>{
//         filterQuntity = productQuantity.length ? productQuantity.find(product=>{
//             return product.productId === selectedProduct.id
// }):{}
//     },[productQuantity])
   

    return(
        <DialogComponent title='' size='md' dialogClose={handleDialogClose} show={open}>
                        <div className="row">
                            <div className="col-6">
                                <img src={selectedProduct?.image} className='img-fluid' />
                            </div>
                            <div className='col-6'>
                                <div>Category: <span className='text-muted'>{selectedProduct?.category}</span></div>
                                <h4 className='mt-3'>{selectedProduct?.title}</h4>
                                <h3 className='text-primary mt-4'>${(selectedProduct?.price)}</h3>
                                <p className='mb-4'>{selectedProduct?.description}</p>
                                <div className='row'>
                                    <div className="col-6">
                                    <ProductQuantity productId={selectedProduct.id}/>
                                    </div>
                                    <div className='col-6'>
                                        <Button variant='contained' color='primary' onClick={()=>addToCartHandler(selectedProduct,'AddToCart')}>Add To Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </DialogComponent>
    )
}

export default ProductView