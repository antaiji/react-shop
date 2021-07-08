import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

import { API_KEY, API_URL } from "../config.js";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShown, setBasketShown] = useState(false);
  const [alertName, setAlertName] = useState("");

  function handleBasketShow() {
    setBasketShown(!isBasketShown);
  }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  function addToOrder(itemObj) {
    const isInOrder = order.find((item) => item.mainId === itemObj.mainId);

    if (!isInOrder) {
      const newItem = {
        ...itemObj,
        quantity: 1,
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem) => {
        if (orderItem.mainId === itemObj.mainId) {
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
    setAlertName(itemObj.displayName);
  }

  function removeFromBasket(mainId) {
    const newOrder = order.filter((el) => el.mainId !== mainId);
    setOrder(newOrder);
  }

  function changeQuantity(value, mainId) {
    const newOrder = order.map((el) => {
      if (el.mainId === mainId) {
        if (value === "minus" && el.quantity > 0) {
          el.quantity -= 1;
        } else if (value === "plus") {
          el.quantity += 1;
        }
      }

      return el;
    });

    setOrder(newOrder);
  }

  function closeAlert() {
    setAlertName("");
  }

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToOrder={addToOrder} />
      )}
      {isBasketShown && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          changeQuantity={changeQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop;
