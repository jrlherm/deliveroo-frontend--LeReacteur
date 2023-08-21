import restaurantImage from "../images/header-image.jpg";

const Restaurant = () => {
  return (
    <div className="container">
      <section className="restaurant">
        <div className="left">
          <h1 className="restaurant-name">Restaurant Name</h1>
          <p className="restaurant-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, perferendis dignissimos. Nobis recusandae
            exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        <div className="right">
          <img src={restaurantImage} alt="Photo of the restaurant" />
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
