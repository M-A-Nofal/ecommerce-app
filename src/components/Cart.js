import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clear, deletFromCart } from '../rtk/slices/cart-slice';

function Cart() {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity ;
    return acc;
  }, 0)

  return (
    <div className='cart container mt-5 pt-5'>
      <div className='row'>
        <div className='col-12 mb-5'>
          <h1 className='display-6 fw-bolder text-center'>Welcome to Cart</h1>
          <hr/>
          <button className='btn btn-outline-dark' onClick={()=> dispatch(clear())}>Clear Cart</button>
          <p className='display-6 fw-normal my-4' >Total Price: $ {totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className='row'>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Img</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td> <img src={product.thumbnail} alt={product.id} style={{width:'100px', height:'100px'}}/> </td>
                  <td>$ {product.price}</td>
                  <td>{product.quantity}</td>
                  <td><button className='btn btn-outline-danger' onClick={()=> dispatch(deletFromCart(product))}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart