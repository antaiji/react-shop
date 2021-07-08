import React from "react";
import GoodsItem from "./GoodsItem";

function GoodsList(props) {
  const { goods = [], addToOrder } = props;

  if (!goods.length) {
    return <h3>Nothing found</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} addToOrder={addToOrder} {...item} />
      ))}
    </div>
  );
}

export default GoodsList;
