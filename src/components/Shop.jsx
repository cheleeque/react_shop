import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from '../config'
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShown, setCartShown] = useState(false);
    const [alertName, setAlertName] = useState('');

    const addToCart = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name)
    };

    const addQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    const removeQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    const removeFromCart = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };

    const handleCartShow = () => {
      setCartShown(!isCartShown)
    }

    const closeAlert = () => {
      setAlertName('');
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        });
    }, []);

    return (
        <main className="container content">
            <Cart quantiy={order.length} handleCartShow={handleCartShow}></Cart>
            {
                loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart}/>
            }
            {
                isCartShown && <CartList order={order} handleCartShow={handleCartShow} removeFromCart={removeFromCart} removeQuantity={removeQuantity} addQuantity={addQuantity}></CartList>
            }
            {
                alertName ? <Alert name={alertName} closeAlert={closeAlert}></Alert> : null
            }
        </main>

    );
};

export default Shop;