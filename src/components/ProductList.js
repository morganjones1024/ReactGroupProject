import Product from "./Product";
import productArray from "../model";


function ProductList(props) {
  
  let productElements = productArray.map((product) => (
    <div>
     
      <Product
        name={product.name}
        price={product.price}
        image={product.image}
        alt={product.name}
        description={product.description}
        id={product.id}
        key={product.id}
      />
    </div>
  ));
  return <>{productElements}</>;
}

export default ProductList;
