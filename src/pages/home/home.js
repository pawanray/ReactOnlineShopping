import React, { useEffect, useState } from 'react';
import homeBanner from '../../assets/img/homeBanner.webp';
import menCard from '../../assets/img/menCard.webp';
import womenCard from '../../assets/img/womenCard.png';

import ProductCard from '../../components/ProductCard';
import { FaShippingFast } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../store/actions/products'
// import { getAllWishList, getUserWishList  } from '../../store/actions/wishlist'

import DialogComponent from '../../components/DialogComponent';
import { Button, TextField } from '@material-ui/core';
const Home = () => {
    const { allProducts } = useSelector(state => state.products)
    const { logedInUser } = useSelector(state => state.users);

    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()
    useEffect(() => {
        fetchAllProducts();
    }, [])
    const fetchAllProducts = () => {
        dispatch(getAllProducts())
    }

    const onSubmit = (data, type) => {
        if (type === "View") {
            setSelectedProduct(data)
            handleDialogOpen()
        }
        else if(type === "Wishlist"){
            // dispatch(getUserWishList(data,logedInUser?.id))
        }
        console.log("pro", data, type)
    }
    const handleDialogOpen = () => {
        setOpen(true)
    }
    const handleDialogClose = () => {
        setOpen(false)
    }
    const handleAddQuantity = () => {
        setQuantity(quantity + 1)
    }
    const handleMinusQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
        else{
            return
        }
    }
    const handleChange = (e)=>{
        const {name, value} = e.target
        setQuantity(+value)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="position-relative">
                        <img src={homeBanner} className="bannerImg" /> 
                        <div className="banner-txt">
                            <h2>BEST EXCITING DEAL</h2>
                            <p>30 skins, powerful features, great support, exclusive offer</p><p></p><h3>
                                <button class="btn btn-primary">SHOP NOW</button>
                            </h3></div>
                    </div>
                </div>
            </div>
            <div className='container bg-white mt-3'>
                <div className='row pt-4'>
                    <div class="col-4">
                        <div className='d-flex align-items-center'>
                            <FaShippingFast size='2rem' />
                            <div class="info-box-content ml-2">
                                <h6 className='mb-0'>FREE SHIPPING &amp; RETURN</h6>
                                <p class="text-muted mb-0">Free shipping on all orders over $99.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex align-items-center'>
                            <AiOutlineDollarCircle size='2rem' />
                            <div class="info-box-content ml-2">
                                <h6 className='mb-0'>MONEY BACK GUARANTEE</h6>
                                <p class="text-muted mb-0">100% money back guarantee</p>
                            </div>

                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex align-items-center'>
                            <BiSupport size='2rem' />
                            <div class="info-box-content ml-2">
                                <h6 className='mb-0'>ONLINE SUPPORT 24/7</h6>
                                <p class="text-muted mb-0">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div className='position-relative category-card'>
                            <img src={menCard} className="img-fluid" />
                            <div class="content-box">
                                <p class="sub-title">
                                    <span>Men's Collection</span>
                                </p>

                                <h3 class="banner-title">
                                    <span>Mens</span>
                                    <span class="border-bt-hover"></span>
                                </h3>

                                <div class="content">
                                    <span>Quisque destibulum risus cosmopolis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='position-relative category-card'>
                            <img src={womenCard} className="img-fluid" />
                            <div class="content-box">
                                <p class="sub-title">
                                    <span>Women's Collection</span>
                                </p>

                                <h3 class="banner-title">
                                    <span>Women</span>
                                    <span class="border-bt-hover"></span>
                                </h3>

                                <div class="content">
                                    <span>Quisque destibulum risus cosmopolis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div className='position-relative category-card'>
                            <img src={menCard} className="img-fluid" />
                            <div class="content-box">
                                <p class="sub-title">
                                    <span>Jewelery's Collection</span>
                                </p>

                                <h3 class="banner-title">
                                    <span>Jewelery</span>
                                    <span class="border-bt-hover"></span>
                                </h3>

                                <div class="content">
                                    <span>Quisque destibulum risus cosmopolis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='position-relative category-card'>
                            <img src={menCard} className="img-fluid" />
                            <div class="content-box">
                                <p class="sub-title">
                                    <span>Electronics's Collection</span>
                                </p>

                                <h3 class="banner-title">
                                    <span>Electronics</span>
                                    <span class="border-bt-hover"></span>
                                </h3>

                                <div class="content">
                                    <span>Quisque destibulum risus cosmopolis</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4 mt-5">
                    <div className="section-title text-center">TOP COLLECTIONS</div>
                    <div className="section-subtitle text-center">Special Offer</div>
                </div>
                <div className='row'>
                    {allProducts.length ? allProducts.map(product => {
                        return (

                            <div className='col-3'>
                                <ProductCard handleClick={onSubmit} data={product} />
                            </div>
                        )
                    }) : null}
                </div>

            </div>
            {
                open ? (
                    <DialogComponent title='' size='md' dialogClose={handleDialogClose} show={open}>
                        <div className="row">
                            <div className="col-6">
                                <img src={selectedProduct?.image} className='img-fluid' />
                            </div>
                            <div className='col-6'>
                                <div>Category: <span className='text-muted'>{selectedProduct?.category}</span></div>
                                <h4 className='mt-3'>{selectedProduct?.title}</h4>
                                <h3 className='text-primary mt-4'>${(selectedProduct?.price * quantity)}</h3>
                                <p className='mb-4'>{selectedProduct?.description}</p>
                                <div className='row'>
                                    <div className="col-6">
                                    <div className="product-quantity-box d-flex">
                                        <Button variant='contained' onClick={handleMinusQuantity}>-</Button>
                                        <TextField value={quantity} name='quantity' label="Quantity" variant="outlined" onChange={handleChange}/>
                                        <Button variant='contained' onClick={handleAddQuantity}>+</Button>
                                    </div>
                                    </div>
                                    <div className='col-6'>
                                        <Button variant='contained' color='primary'>Add To Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </DialogComponent>) : null
            }

        </>
    )
}

export default Home;

