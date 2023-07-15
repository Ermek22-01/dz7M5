import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { fetchProducts } from "../store/productsReducer.js";

const NavBar = () =>
{
    const dispatch = useDispatch()
    const { count } = useSelector(state => state.cart)

    useEffect(() =>
    {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <>
            <div className={'navbar'}>
                <NavLink to={'/'}><h3>Главная</h3></NavLink>
                <NavLink to={'/cart'}><h3>Корзина ({count})</h3></NavLink>
            </div>
            <Outlet />
        </>
    );

};

export default NavBar;


