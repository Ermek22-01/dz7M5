import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct';

function CartPage()
{

    const { items  } = useSelector(state => state.cart)
    return (
        <div className='cartPage'>
            <h2>Корзина</h2>
            <div className="cartProducts">
                {
                    items.map((item) => <CartProduct key={item.id} data={item} />)
                }
            </div>
        </div>
    )
}

export default CartPage