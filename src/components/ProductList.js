import Product from "./Product";

function ProductList() {
  let productArray = [
    {
      name: "Mushroom Cat-Scratching Post",
      price: 29.99,
      description:
        "The package contains 2 mushrooms (with screws), 2 sisal posts, 1 platform. Include assembly accessories. Scratching Post Size: 14x12inches , design for standard size cats from kitten to adults, except huge cats.",      
      image: "https://m.media-amazon.com/images/I/81y+lNz36OL._AC_SX679_.jpg",
    },
    {
      name: "Hello Kitty Cup Noodles Nissin Boxed Ceramic Ramen Noodle Bowl with Chopsticks",
      price: 27.99,
      description:
        "Our kawaii Sanrio Hello Kitty Top Ramen ceramic ramen bowl with chopsticks holds 20 ounces of your favorite noodles.",      image: "https://cdn.buttercms.com/UqbFGAJLTGqtYqF2UajV",
      image: "https://m.media-amazon.com/images/I/71z76VRBhGL._AC_SX679_.jpg",
    },
    {
      name: "Urban Decay Naked Reloaded Eyeshadow Palette",
      price: 28.60,
      description:
        "Every shade in our paraben-free, sulfate-free, and phthalate-free eye shadow palettes features our proprietary ingredient blend that supplies velvety texture, rich color, and extreme blendability.",
      image: "https://m.media-amazon.com/images/I/91xP-3wsv+S._SX679_.jpg",
    },
    {
      name: "Nintendo Switch Lite - Coral",
      price: 199.00,
      description:
        "	Handheld Nintendo Switch gaming at a great price\n For every member of your family, there’s a member of ours\nOptimized for personal, handheld play, Nintendo Switch Lite is a small and light Nintendo Switch system\nFeatures a sleek, unibody design with fully integrated controls and a built-in plus Control Pad\nCompatible with all physical and digital Nintendo Switch games that support Handheld mode",

      image: "https://m.media-amazon.com/images/I/41zSn74fPuL._AC_.jpg",
    },
    {
      name: "FUNLAB Switch Controller - Pink",
      price: 34.99,
      description: 
        "Wireless & Stable Performance: With Bluetooth,this switch pro controller can be quickly and stably connected with switch console. High-performance wireless technology provides reliable signals within 32ft without delay.\nErgonomic: The gamepad's shape fits your hands naturally. The handle has a texture design to increase friction and prevent hand sweat.Comfortable even for the extended gaming session!",
      image: "https://m.media-amazon.com/images/I/71K-8nz+GzL._AC_SX679_.jpg",
    }
  ];
  let productElements = productArray.map((product) => (
    <div>
      {/* <img src={product.image} alt={product.name} />
      name={product.name}
      {product.price}
      {product.description} */}
      <Product
        name={product.name}
        price={product.price}
        image={product.image}
        alt={product.name}
        description={product.description}
      />
    </div>
  ));
  return <>{productElements}</>;
}

export default ProductList;
