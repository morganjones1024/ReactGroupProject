import Product from "./Product";
import productArray from "../model";


function ProductList(props) {
  // let [cartItems, setcartItems] = useState([]);

  let productElements = productArray.map((product) => (
    <div>
      <Product
        addCart={props.addCart}
        removeCart={props.removeCart}
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
