import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Header from "./assets/components/Header";

// import Restaurant from "./assets/components/Restaurant";
// import Menu from "./assets/components/Menu";

import dishImage from "./assets/images/dish-image.jpg";
import restaurantImage from "./assets/images/header-image.jpg";

function App() {
  // State qui contiendra le data (la réponse du serveur)
  const [data, setData] = useState();
  // State qui me permet de savoir si la réponse du serveur est arrivée ou pas encore.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // La fonction du useEffect ne peut pas être asynchrone, je déclare donc une fonction asynchrone à l'intérieur et je l'appelle immédiatement
    const fetchData = async () => {
      const response = await axios.get(
        // Je fais une requête axios et j'attend que le résultat arrive
        "https://site--deliveroo-backend--vm2w9vyj7r62.code.run/"
      );
      setData(response.data); // Je stocke le résultat dans mon state data
      setIsLoading(false); // Je fais paser isLoading à false
    };
    // J'apelle immédiatement ma fonction fetchData
    fetchData();
  }, []);

  return (
    <>
      {/* Si isLoading === true, c'est que la réponse du serveur n'est pas encore arrivée, donc j'affiche Chargement... afin d'éviter d'avoir une erreur car data est undefined. */}
      {isLoading ? (
        <p>Chargement ...</p>
      ) : (
        <div className="main">
          <Header />

          {/* <Restaurant /> */}
          <div className="container">
            <section className="restaurant">
              <div className="left">
                <h1 className="restaurant-name">{data.header.title}</h1>
                <p className="restaurant-description">
                  {data.meta.metatags.descriptionSocial}
                </p>
              </div>
              <div className="right">
                <img
                  src={data.header.image.url}
                  alt="Photo of the restaurant"
                />
              </div>
            </section>
          </div>

          {/* <Menu /> */}
          <div className="menu">
            <div className="container">
              {data.meta.categories.map((categorie, index) => {
                const productsInCategory = data.items.filter(
                  (product) => product.categoryId === categorie.id
                );
                return (
                  <div key={categorie.id}>
                    <h2>{categorie.name}</h2>
                    {productsInCategory.map((product) => {
                      return (
                        <div className="card" key={product.id}>
                          <div className="dish">
                            <div className="dish-title">{product.name}</div>
                            <div className="dish-desc">
                              {product.description}
                            </div>
                            <div className="dish-price">
                              {product.price.formatted}
                            </div>
                            {/* {console.log(product.image.url)} */}
                            {product.image && product.image.url && (
                              <img src={product.image.url} alt="Dishes image" />
                            )}{" "}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
