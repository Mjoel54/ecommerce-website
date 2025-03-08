import bergamontCandle from "./images/bergamontCandle.jpg";
import soyCandle from "./images/soyCandle.jpg";
import setOfFourSoyCandles from "./images/setOfFourSoyCandles.jpg";
import smokeyWoodCandle from "./images/smokeyWoodCandle.jpg";
import nycCandle from "./images/nycCandle.jpg";
import mahoganySmall from "./images/mahoganySmall.jpg";
import blueFlecks from "./images/blueFlecks.jpg";
import blackVase from "./images/blackVase.jpg";
import stoneMug from "./images/stoneMug.jpg";
import roundVase from "./images/roundVase.jpg";

const productsData = [
  {
    name: "Bergamont Candle",
    detail: "Candle",
    price: 45,
    image: bergamontCandle,
  },
  {
    name: "Soy Candle",
    detail: "Candle",
    price: 55,
    image: soyCandle,
  },
  {
    name: "Set of 4 - Soy Candles",
    detail: "Candles",
    price: 130,
    image: setOfFourSoyCandles,
  },
  {
    name: "Smokey Wood",
    detail: "Scented Candle",
    price: 40,
    image: smokeyWoodCandle,
    imageUrl:
      "https://unsplash.com/photos/black-round-ceramic-bowl-on-brown-wooden-table-QagIzHwsy4A",
  },
  {
    name: "New York City",
    detail: "Soy Candle",
    price: 40,
    image: nycCandle,
    imageUrl:
      "https://unsplash.com/photos/white-new-york-city-votive-candle-KURRbHLdHkQ",
  },
  {
    name: "Mahogany",
    detail: "Small scented candle",
    price: 20,
    image: mahoganySmall,
    imageUrl:
      "https://unsplash.com/photos/a-person-lighting-a-candle-on-a-shelf-fmZOrvf2po0",
  },
  {
    name: "Blue Flecks",
    detail: "Hand made",
    price: 55,
    image: blueFlecks,
    imageUrl:
      "https://unsplash.com/photos/white-and-blue-candle-holder-XVzkhMwJFWs",
  },
  {
    name: "Vase",
    detail: "Super Elton Robot",
    price: 130,
    image: blackVase,
    imageUrl:
      "https://unsplash.com/photos/black-ceramic-figurine-on-white-concrete-table-uUc-NWeDJxk",
  },
  {
    name: "Stone mug",
    detail: "Super Elton Robot",
    price: 25,
    image: stoneMug,
    imageUrl:
      "https://unsplash.com/photos/white-ceramic-mug-on-wooden-table-top-n42ogaQn32o",
  },
  {
    name: "Round Vase",
    detail: "Super Elton Robot",
    price: 130,
    image: roundVase,
    imageUrl:
      "https://unsplash.com/photos/a-white-vase-sitting-on-top-of-a-table-giRMqme_f-Q",
  },
];

const productsDataObjects = productsData.map((product, index) => {
  return {
    id: index,
    name: product.name,
    detail: product.detail,
    price: product.price,
    image: product.image,
  };
});

export default productsDataObjects;
