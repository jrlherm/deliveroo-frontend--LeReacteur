const Cart = ({ cart, cartTotal, cartFullTotal }) => {
  return (
    <div className="cart">
      <button>Valider mon panier</button>
      <div className="products">
        {cart.map((product) => {
          return (
            <div className="product flex-cart-items" key={product.id}>
              <span>{product.name}</span>
              <span>{product.price.formatted}</span>
            </div>
          );
        })}
      </div>

      <div className="price-calcul">
        <div className="sous-total flex-cart-items">
          <p>Sous-Total</p>
          <p>{cartTotal}</p>
        </div>
        <div className="frais-livraison flex-cart-items">
          <p>Frais de livraison</p>
          <p>2,90 €</p>
        </div>
      </div>
      <div className="total flex-cart-items">
        <p>Total</p>
        <p>{cartFullTotal}</p>
      </div>
    </div>
  );
};
export default Cart;
