import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartReducer.js";

const ProductsList = () =>
{
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products)

    const handleButton = (product) =>
    {
        dispatch(addToCart(product))
    }


    if (loading) return <h3>Данные загружаются</h3>
    if (error) return <h3>{error}</h3>

    return (
        <div className={'products'}>
            {products.map(product => (
                <div key={product.id} className={'product'}>
                    <h3>{product.name}</h3>
                    <p>Цена: {product.price} $</p>
                    <button onClick={() => handleButton(product)}>Добавить в корзину</button>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
