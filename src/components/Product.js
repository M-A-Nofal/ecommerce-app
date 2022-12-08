import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'


function Product() {

    const {id} = useParams();

    
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch (`https://dummyjson.com/products/${id}`)
            setProduct( await response.json());
            setLoading(false);
        };

        getProduct();
    },[]);

    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={400} />
                </div>
                <div className='col-md-6' style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100}  style={{marginLeft:6}} />
                </div>
            </>
        )
    };

    const ShowProducts = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.thumbnail} alt={product.title} height='400px' width='400px' />
                </div>
                <div className='col-md-6' >
                    <h4 className='text-uppercase text-blak-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bold my-4'>
                        Rating: {product.rating} 
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2'>
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className='btn btn-dark py-2 ms-2 px-3'>
                        Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }

  return (
    <>
        <div className='product container mt-5 pt-5'>
            <div className='row py-5'>
                {loading ? <Loading /> : <ShowProducts /> }
            </div>
        </div>
    </>
  )
}

export default Product