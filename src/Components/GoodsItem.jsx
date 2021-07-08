import React from "react";

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToOrder,
  } = props;

  function handleAdd() {
    addToOrder({
      mainId,
      displayName,
      price,
    });
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={displayAssets[0].full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn teal darken-1" onClick={handleAdd}>
          Купить
        </button>
        <span className="right pricefont">{price.regularPrice} руб</span>
      </div>
    </div>
  );
}

export default GoodsItem;

/*
banner: null
buyAllowed: true
categories: Array(1)
  0: "Panel 18"
  length: 1
  __proto__: Array(0)
displayAssets: Array(1)
  0:
    background: "https://media.fortniteapi.io/images/cosmetics/1a85871a1f0765946cfab69cdd205bfc/v2/MI_Glider_ID_156_SummerBomber/background.png"
    displayAsset: "DAv2_Glider_ID_156_SummerBomber"
    full_background: "https://media.fortniteapi.io/images/cosmetics/1a85871a1f0765946cfab69cdd205bfc/v2/MI_Glider_ID_156_SummerBomber/info.ru.png"
    materialInstance: "MI_Glider_ID_156_SummerBomber"
    url: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Glider_ID_156_SummerBomber/MI_Glider_ID_156_SummerBomber.png"
    __proto__: Object
    length: 1
    __proto__: Array(0)
displayDescription: "Ваши пляжи принадлежат нам."
displayName: "Пляжный захватчик"
displayType: "Дельтаплан"
firstReleaseDate: "2019-07-07"
giftAllowed: true
granted: Array(1)
0:
audio: null
description: "Ваши пляжи принадлежат нам."
gameplayTags: (3) ["Cosmetics.Source.ItemShop", "Cosmetics.Set.SunshineAndRainbows", "Cosmetics.Filter.Season.9"]
id: "Glider_ID_156_SummerBomber"
images: {icon: "https://media.fortniteapi.io/images/1a85871a1f0765946cfab69cdd205bfc/transparent.png", featured: "https://media.fortniteapi.io/images/1a85871a1f0765946cfab69cdd205bfc/full_featured.png", background: "https://media.fortniteapi.io/images/cosmetics/1a85871a1f0765946cfab69cdd205bfc/v2/background.png", full_background: "https://media.fortniteapi.io/images/cosmetics/1a85871a1f0765946cfab69cdd205bfc/v2/info.ru.png"}
name: "Пляжный захватчик"
rarity: {id: "Uncommon", name: "НЕОБЫЧНЫЙ"}
series: null
set: {id: "SunshineAndRainbows", name: "Солнышко и радуга", partOf: "Входит в набор «Солнышко и радуга»."}
type: {id: "glider", name: "Дельтаплан"}
video: null
__proto__: Object
length: 1
__proto__: Array(0)
groupIndex: 0
mainId: "Glider_ID_156_SummerBomber"
mainType: "glider"
offerId: "v2:/fc6f3e992ee881865f64b3a8d3537ecf195242cd62e20f3f1ad05de316aefd1c"
previousReleaseDate: "2021-07-06"
price:
finalPrice: 500
regularPrice: 500
__proto__: Object
priority: -3
rarity:
id: "Uncommon"
name: "НЕОБЫЧНЫЙ"
__proto__: Object
section:
id: "CosmicSummer8"
landingPriority: 1
name: "Космическое лето"
__proto__: Object
series: null
storeName: "BRSpecialFeatured"
tileSize: "Normal"
*/
