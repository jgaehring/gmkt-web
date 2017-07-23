import fruitIcon from "media/product-types/USQApp_Icons_Fruit_600px.png";
import veggieIcon from "media/product-types/USQApp_Icons_Veggies_600px.png";
import dairyIcon from "media/product-types/USQApp_Icons_Dairy_600px.png";
import bakedGoodsIcon from "media/product-types/USQApp_Icons_BakedGoods_600px.png";
import meatIcon from "media/product-types/USQApp_Icons_Meat_600px.png";
import seafoodIcon from "media/product-types/USQApp_Icons_Seafood_600px.png";
import honeyIcon from "media/product-types/USQApp_Icons_Honey_600px.png";
import bevsIcon from "media/product-types/USQApp_Icons_Bevs_600px.png";
import plantsIcon from "media/product-types/USQApp_Icons_Plants_600px.png";

function getTypeIcon(type) {
  switch (type) {
    case 0:
      return fruitIcon;
    case 1:
      return veggieIcon;
    case 2:
      return dairyIcon;
    case 3:
      return bakedGoodsIcon;
    case 4:
      return meatIcon;
    case 5:
      return seafoodIcon;
    case 6:
      return honeyIcon;
    case 7:
      return bevsIcon;
    case 8:
      return plantsIcon
    default:
      return veggieIcon;
  }
}

export default getTypeIcon;
