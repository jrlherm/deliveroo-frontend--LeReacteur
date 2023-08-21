import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import Header from "./assets/components/Header";

// import Restaurant from "./assets/components/Restaurant";
// import Menu from "./assets/components/Menu";

// import dishImage from "./assets/images/dish-image.jpg";
// import restaurantImage from "./assets/images/header-image.jpg";

function App() {
  // State qui contiendra le data (la réponse du serveur)
  const [data, setData] = useState();
  // State qui me permet de savoir si la réponse du serveur est arrivée ou pas encore.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // La fonction du useEffect ne peut pas être asynchrone, je déclare donc une fonction asynchrone à l'intérieur et je l'appelle immédiatement
    const fetchData = async () => {
      const response = axios.get(
        // Je fais une requête axios et j'attend que le résultat arrive
        "https://site--deliveroo-backend--vm2w9vyj7r62.code.run/"
      );
      setData(response.data); // Je stocke le résultat dans mon state data
      setIsLoading(false); // Je fais paser isLoading à false
      console.log(response);
    };
    // J'apelle immédiatement ma fonction fetchData
    fetchData();
  }, []);
  return (
    <>
      <Header />
      {console.log(data)}

      {/* Si isLoading === true, c'est que la réponse du serveur n'est pas encore arrivée, donc j'affiche Chargement... afin d'éviter d'avoir une erreur car data est undefined. */}
      {isLoading ? "Chargement ..." : data}
    </>
  );
  // return (

  // <div className="main">
  //   <Header />

  //   {/* <Restaurant /> */}
  //   <div className="container">
  //     <section className="restaurant">
  //       <div className="left">
  //         <h1 className="restaurant-name">Restaurant Name</h1>
  //         <p className="restaurant-description">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //           Consequatur, perferendis dignissimos. Nobis recusandae
  //           exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
  //           elit.
  //         </p>
  //       </div>
  //       <div className="right">
  //         <img src={restaurantImage} alt="Photo of the restaurant" />
  //       </div>
  //     </section>
  //   </div>
  //   {/* <Menu /> */}
  //   <div className="menu">
  //     <div className="container">
  //       <h2>Brunchs</h2>
  //       <div className="card">
  //         <div className="dish">
  //           <div className="dish-desc">Brunch authentique 1 personne</div>
  //           <div className="price">00,00€</div>
  //         </div>
  //         <img src={dishImage} alt="Dish image" className="dish-photo" />
  //       </div>
  //     </div>
  //   </div>
  // </div>

  // );
}

export default App;
