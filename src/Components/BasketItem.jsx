import React from "react";

function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    changeQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {displayName}{" "}
      <span
        className="plumin-button grey lighten-2"
        onClick={() => changeQuantity("minus", mainId)}
      >
        -
      </span>
      x{quantity}
      <span
        className="plumin-button grey lighten-2"
        onClick={() => changeQuantity("plus", mainId)}
      >
        +
      </span>{" "}
      = {price.regularPrice * quantity} руб
      <span
        className="secondary-content"
        onClick={() => removeFromBasket(mainId)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export default BasketItem;
