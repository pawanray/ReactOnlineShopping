import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';
import { getCategoryByProduct } from '../../store/actions/products'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import CategoryBannerImg from '../../assets/img/categoryBanner.jpg'
const CategoryProduct = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const { categoryByProducts } = useSelector(state => state.products)
    const onSubmit = () => {

    }
    useEffect(() => {
        if (params.name.toLowerCase().includes('men')) {
            dispatch(getCategoryByProduct(params.name + ' clothing'))
        }
        else {
            dispatch(getCategoryByProduct(params.name))
        }

        console.log(params.name, 'params')
    }, [params.name])
    return (
        <>
            <div className='container-fluid px-0'>
                <img className='img-fluid' src={CategoryBannerImg} height="200" />
                <div class="category-banner-txt d-flex justify-content-center">
                    <div class="mx-auto">
                        <h4>Extra</h4>
                        <h3>20% off</h3>
                        <h3 class="mb-2 heading-border">- Accessories -</h3>
                        <h2 class="text-transform-none text-center">Summer Sale</h2>
                        <a href="category.html" class="btn btn-block btn-dark">Shop All Sale</a>
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
        </>
    )
}

export default CategoryProduct