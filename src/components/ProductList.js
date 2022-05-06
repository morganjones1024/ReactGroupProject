import Product from "./Product";

function ProductList() {
  let productArray = [
    {
      name: "Biscotti Cookies",
      price: 40,
      description:
        "Biscotti actually means “twice baked” and the cookie is indeed baked twice, resulting in its hard and crunchy texture.",
      image: "https://cdn.buttercms.com/UqbFGAJLTGqtYqF2UajV",
    },
    {
      name: "Biscotti Cookies",
      price: 50,
      description:
        "Biscotti actually means “twice baked” and the cookie is indeed baked twice, resulting in its hard and crunchy texture.",
      image: "https://cdn.buttercms.com/UqbFGAJLTGqtYqF2UajV",
    },
    {
      name: "Biscotti Cookies",
      price: 40,
      description:
        "Biscotti actually means “twice baked” and the cookie is indeed baked twice, resulting in its hard and crunchy texture.",
      image: "https://cdn.buttercms.com/UqbFGAJLTGqtYqF2UajV",
    },
    {
      name: "Game",
      price: 100,
      description:
        "Biscotti actually means “twice baked” and the cookie is indeed baked twice, resulting in its hard and crunchy texture.",
      image: "https://cdn.buttercms.com/UqbFGAJLTGqtYqF2UajV",
    },
    {
      name: "Nintendo Switch Lite - Coral",
      price: "$28.60",
      description:
        "	Handheld Nintendo Switch gaming at a great price\n For every member of your family, there’s a member of ours\nOptimized for personal, handheld play, Nintendo Switch Lite is a small and light Nintendo Switch system\nFeatures a sleek, unibody design with fully integrated controls and a built-in plus Control Pad\nCompatible with all physical and digital Nintendo Switch games that support Handheld mode",

      image: "https://m.media-amazon.com/images/I/41zSn74fPuL._AC_.jpg",
    },
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
