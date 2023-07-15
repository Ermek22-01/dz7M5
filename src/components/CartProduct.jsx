import React from 'react'
import { useDispatch } from 'react-redux';
import { minusCount, plusCount } from '../store/cartReducer';

function CartProduct({ data })
{
    const dispatch = useDispatch()
    console.log(data);
    return (
        <div className='cartProduct'>
            <h3>{data.name}</h3>
            <p>Цена: {Number(~~data.price) * Number(data.quantity)} сом</p>
            <h4>Количество: </h4>
            <div className='countOf'>
                {/*<button onClick={() => dispatch(minusCount(data.id))}>-</button>*/}
                <span>{data.quantity}</span>
                {/*<button onClick={() => dispatch(plusCount(data.id))}>+</button>*/}
            </div>

        </div>
    )
}

export default CartProduct