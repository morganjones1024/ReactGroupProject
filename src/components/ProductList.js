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
      price: 40,
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
      name: "Biscotti Cookies",
      price: 40,
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
  ];
  let productElements = productArray.map((product) => (
    <div>
      <img src={product.image} alt={product.name} />
      {product.name}
      {product.price}
      {product.description}
    </div>
  ));
  return <>{productElements}</>;
}

export default ProductList;
