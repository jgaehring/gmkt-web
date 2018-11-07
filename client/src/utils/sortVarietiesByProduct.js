export default function sortVaritiesByProduct(unsortedProducts) {
  let varietiesByProduct = [];
  unsortedProducts.forEach(product => {
    if (!product.variety_of_id && varietiesByProduct.indexOf(product) === -1) {
      varietiesByProduct.push({
        ...product,
        varieties: []
      })
    } else if (product.variety_of_id) {
      varietiesByProduct.forEach(parentProduct => {
        if (product.variety_of_id === parentProduct.id) {
          parentProduct.varieties.push({...product})
        }
      })
    }
  });
  return varietiesByProduct;
}
