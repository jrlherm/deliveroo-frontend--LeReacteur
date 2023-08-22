const Menu = ({
  data,
  cart,
  setCart,
  cartTotal,
  setCartTotal,
  cartFullTotal,
  setCartFullTotal,
}) => {
  return (
    <div className="menu">
      {data.meta.categories.map((categorie, index) => {
        const productsInCategory = data.items.filter(
          (product) => product.categoryId === categorie.id
        );
        return (
          <div key={categorie.id}>
            <h2>{categorie.name}</h2>
            <div className="card">
              {productsInCategory.map((product) => {
                return (
                  <div
                    className="dish"
                    key={product.id}
                    onClick={() => {
                      const newCart = [...cart];
                      newCart.push(product);
                      setCart(newCart);
                      const newCartTotal = cartTotal + product.price.fractional;
                      const newCartFullTotal =
                        cartFullTotal + product.price.fractional + 290;
                      setCartTotal(newCartTotal);
                      setCartFullTotal(newCartFullTotal);
                    }}
                  >
                    <div className="left">
                      <h3 className="dish-title">{product.name}</h3>
                      <div className="dish-desc">
                        {product.description && product.description.length > 55
                          ? product.description.slice(0, 55) + "..."
                          : product.description}
                      </div>
                      <div className="dish-price">
                        <span>{product.price.formatted}</span>
                        <span className="popular">
                          {product.popular ? "⭐️ Populaire" : ""}
                        </span>
                      </div>
                    </div>

                    <div className="right">
                      {product.image && product.image.url && (
                        <img
                          className="dish-image"
                          src={product.image.url}
                          alt="Dishes image"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
