import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import "./fonts.css";

import Loader from "./assets/components/Loader";
import Header from "./assets/components/Header";
import Restaurant from "./assets/components/Restaurant";
import Menu from "./assets/components/Menu";
import Cart from "./assets/components/Cart";
import EmptyCart from "./assets/components/EmptyCart";

import { formatPrice } from "./util";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartFullTotal, setCartFullTotal] = useState(0);

  useEffect(() => {
    // La fonction du useEffect ne peut pas être asynchrone, je déclare donc une fonction asynchrone à l'intérieur et je l'appelle immédiatement
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // Je fais une requête axios et j'attend que le résultat arrive
          "https://site--deliveroo-backend--vm2w9vyj7r62.code.run/"
        );
        setData(response.data); // Je stocke le résultat dans mon state data
        setIsLoading(false); // Je fais paser isLoading à false
      } catch (error) {
        console.log(error.message);
      }
    };
    // J'apelle immédiatement ma fonction fetchData
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="main">
          <Header />
          <Restaurant data={data} />
          <div className="grey">
            <div className="container">
              <Menu
                data={data}
                cart={cart}
                setCart={setCart}
                cartTotal={cartTotal}
                setCartTotal={setCartTotal}
                cartFullTotal={cartFullTotal}
                setCartFullTotal={setCartFullTotal}
              />
              {cart.length !== 0 ? (
                <Cart
                  cart={cart}
                  cartTotal={formatPrice(cartTotal)}
                  cartFullTotal={formatPrice(cartFullTotal)}
                />
              ) : (
                <EmptyCart />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
