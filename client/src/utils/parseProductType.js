import fruitIcon from "media/product-types/USQApp_Icons_Fruit_600px.png";
import veggieIcon from "media/product-types/USQApp_Icons_Veggies_600px.png";
import dairyIcon from "media/product-types/USQApp_Icons_Dairy_600px.png";
import bakedGoodsIcon from "media/product-types/USQApp_Icons_BakedGoods_600px.png";
import meatIcon from "media/product-types/USQApp_Icons_Meat_600px.png";
import seafoodIcon from "media/product-types/USQApp_Icons_Seafood_600px.png";
import honeyIcon from "media/product-types/USQApp_Icons_Honey_600px.png";
import bevsIcon from "media/product-types/USQApp_Icons_Bevs_600px.png";
import plantsIcon from "media/product-types/USQApp_Icons_Plants_600px.png";

function parseProductType(type) {
  switch (type) {
    case 0:
      return {
        name: 'Fruit',
        producer: 'Orchard',
        icon: fruitIcon,
      };
    case 1:
      return {
        name: 'Vegetables',
        producer: 'Vegetable Farm',
        icon: veggieIcon,
      };
    case 2:
      return {
        name: 'Dairy',
        producer: 'Dairy',
        icon: dairyIcon,
      };
    case 3:
      return {
        name: 'Baked Goods',
        producer: 'Bakery',
        icon: bakedGoodsIcon,
      };
    case 4:
      return {
        name: 'Meat & Poultry',
        producer: 'Livestock / Poultry Farm',
        icon: meatIcon,
      };
    case 5:
      return {
        name: 'Fish & Seafood',
        producer: 'Fishery',
        icon: seafoodIcon,
      };
    case 6:
      return {
        name: 'Honey, Syrup & Preserves',
        producer: 'Beekeeper, Sugar House or Jammer',
        icon: honeyIcon,
      };
    case 7:
      return {
        name: 'Wine & Brews',
        producer: 'Winery, Brewery or Distillery',
        icon: bevsIcon,
      };
    case 8:
      return {
        name: 'Flowers & Plants',
        producer: 'Greenhouse / Nursery',
        icon: plantsIcon,
      }
    default:
      return {
        name: 'Local Product',
        producer: 'Local Producer',
        icon: veggieIcon,
      };
  }
}

export default parseProductType;
