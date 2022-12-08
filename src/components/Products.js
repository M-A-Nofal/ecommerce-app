import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart } from '../rtk/slices/cart-slice';
import { fechProducts } from '../rtk/slices/products-slice';

function Products() {

    const products = useSelector((state) => state.products);
    
    const dispatch = useDispatch()
    
    const [loading, setLoading] = useState(false);

    let componentMount = true;

    useEffect(() => {
        const getProducts = () => {

            setLoading(true);

            if (componentMount) {
                dispatch(fechProducts());
                setLoading(false);
            }
            return () => {
                componentMount = false;
            }

        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-6'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-6'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-6'>
                    <Skeleton height={350}/>
                </div>
            </>
        )
    };

    const ShowProducts = () => {
        return (
            <>
                {products.map((product) => {
                    return (
                            <div className='col-md-3 mb-4' key={product.id}>
                                <div className="card h-100 text-center p-4 " >
                                    <img src={product.thumbnail} className="card-img-top" alt={product.title} height='250px'/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.slice(0,15)}</h5>
                                        <p className="card-text lead fw-bold">${product.price}</p>
                                        <div className='f-flex'>
                                            <button className="btn btn-outline-dark px-4 py-2" onClick={() => dispatch(addToCart(product))}>Buy Now</button>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-dark py-2 ms-2 px-3">Details</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
                })}
            </>
        )

    }


  return (
    <div className='products container mt-5 pt-5'>
        <div className='row'>
            <div className='col-12 mb-5'>
                <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                <hr/>
            </div>
        </div>
        <div className='row justify-content-center'>
            {loading ? <Loading /> : <ShowProducts />}
        </div>
    </div>
  )
}

export default Products;