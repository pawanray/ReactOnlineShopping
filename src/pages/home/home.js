import React, { useEffect, useState } from 'react';
import homeBanner from '../../assets/img/homeBanner.webp';
import menCard from '../../assets/img/menCard.webp';
import womenCard from '../../assets/img/womenCard.png';
import electronicCard from '../../assets/img/electronicCard.jpg';
import jewelleryCard from '../../assets/img/jewelleryCard.jpg';

import ProductCard from '../../components/ProductCard';
import { FaShippingFast } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../store/actions/products'
import { getAllWishlist, getUserWishlist  } from '../../store/actions/wishlist';
import { getUserCart  } from '../../store/actions/cart';

import DialogComponent from '../../components/DialogComponent';
import { Button, TextField } from '@material-ui/core';
import MassageComponent from '../../components/MassageComponent'
import ProductView from '../../components/ProductView';
const Home = () => {
    const { allProducts } = useSelector(state => state.products)
    const { logedInUser } = useSelector(state => state.users);
    const [openMsg, setOpenMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(false);

    const [open, setOpen] = useState(false)
    const [products, setProducts] = useState([])

    const [selectedProduct, setSelectedProduct] = useState({})

    const dispatch = useDispatch()
    useEffect(() => {
        fetchAllProducts();
    }, [])
    const fetchAllProducts = () => {
        dispatch(getAllProducts())
    }

    const onSubmit = (data, type) => {
        setLoading(true)
        if (type === "View") {
            setSelectedProduct(data)
            handleDialogOpen()
            setLoading(false)
        }
        else if(type === "Wishlist"){
            if(Object.keys(logedInUser).length !== 0){
                
                setTimeout(()=>{
                    //dispatch(getAllWishlist({id:Math.random(),userId:logedInUser?.id,date:new Date().toLocaleString(),products:products}))
                    dispatch(getUserWishlist(data,logedInUser?.id))
                    setOpenMsg(true)
                    setLoading(false)
                    setMsg('Product Added into Wishlist Successfully')
                },1000)
            }
            else{
                setOpenMsg(true)
                setLoading(false)
                setMsg('Plese Login')
            }
           
        }
        else if(type === "AddToCart"){
            if(Object.keys(logedInUser).length !== 0){
                setTimeout(()=>{
                    dispatch(getUserCart(data,logedInUser?.id))
                    setOpenMsg(true)
                    setLoading(false)
                    setMsg('Product Added into Cart Successfully')
                },1000)
            }
            else{
                setOpenMsg(true)
                setLoading(false)
                setMsg('Plese Login')
            }
           
        }
        console.log("pro", data, type)
    }
    const handleDialogOpen = () => {
        setOpen(true)
    }
    const handleDialogClose = () => {
        setOpen(false)
    }
  
    const handleClose = ()=>{
        setOpenMsg(false);
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
                            <img src={jewelleryCard} className="img-fluid" />
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
                            <img src={electronicCard} className="img-fluid" />
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
                    <ProductView selectedProduct={selectedProduct} open={open} addToCartHandler={onSubmit}  handleDialogClose={handleDialogClose}/>
                    ) : null
            }

           <MassageComponent duration={1000} loading={loading} open={openMsg} msg={msg} handleClose={handleClose}/>
        </>
    )
}

export default Home;

