import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductView from '../../components/ProductView';
import MassageComponent from '../../components/MassageComponent';

import { getCategoryByProduct } from '../../store/actions/products'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import CategoryBannerImg from '../../assets/img/categoryBanner.jpg';
import { getAllWishlist, getUserWishlist } from '../../store/actions/wishlist'
import { getUserCart } from '../../store/actions/cart'

const CategoryProduct = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { categoryByProducts } = useSelector(state => state.products)
    const { logedInUser } = useSelector(state => state.users);
    const [openMsg, setOpenMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(false);

    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({})


    const onSubmit = (data, type) => {
        setLoading(true)
        if (type === "View") {
            setSelectedProduct(data)
            handleDialogOpen()
            setLoading(false)
        }
        else if (type === "Wishlist") {
            if (Object.keys(logedInUser).length !== 0) {
                setTimeout(() => {
                    dispatch(getUserWishlist(data, logedInUser?.id))
                    setOpenMsg(true)
                    setLoading(false)
                    setMsg('Product Added in Wishlist Successfully')
                }, 1000)
            }
            else {
                setOpenMsg(true)
                setLoading(false)
                setMsg('Plese Login')
            }

        }
        else if (type === "AddToCart") {
            if (Object.keys(logedInUser).length !== 0) {
                setTimeout(() => {
                    dispatch(getUserCart(data, logedInUser?.id))
                    setOpenMsg(true)
                    setLoading(false)
                    setMsg('Product Added into Cart Successfully')
                }, 1000)
            }
            else {
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
    const handleClose = () => {
        setOpenMsg(false);
    }

    useEffect(() => {
        const fetchCategroyProduct = async () => {
            if (params.name.toLowerCase().includes('men')) {
                setLoading(true)
                const [success, error] = await dispatch(getCategoryByProduct(params.name + ' clothing'))
                if (success) {
                    console.log("sucess")
                    setLoading(false)

                }
                if (error) {
                    setLoading(false)
                    console.log("error")
                }

            }
            else {
                dispatch(getCategoryByProduct(params.name))
            }
        }
        fetchCategroyProduct()
        console.log(params.name, 'params')
    }, [params.name])
    return (
        <>
            <div className='container-fluid px-0'>
                <img className='img-fluid' src={CategoryBannerImg} height="200" />
                <div className="category-banner-txt d-flex justify-content-center">
                    <div className="mx-auto">
                        <h4>Extra</h4>
                        <h3>20% off</h3>
                        <h3 className="mb-2 heading-border">- Accessories -</h3>
                        <h2 className="text-transform-none text-center">Summer Sale</h2>
                        <a href="category.html" className="btn btn-block btn-dark">Shop All Sale</a>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="mb-4 mt-3">
                    <div className="section-title">{params.name} Category</div>
                    <div className="section-subtitle">Special Offer</div>
                </div>
                <div className='row'>
                    {categoryByProducts.length ? categoryByProducts.map(product => {
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
                    <ProductView selectedProduct={selectedProduct} open={open} addToCartHandler={onSubmit} handleDialogClose={handleDialogClose} />
                ) : null
            }
            <MassageComponent duration={1000} loading={loading} open={openMsg} msg={msg} handleClose={handleClose} />

        </>
    )
}

export default CategoryProduct