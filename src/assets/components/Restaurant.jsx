import restaurantImage from "../images/header-image.jpg";

const Restaurant = (data) => {
  return (
    <div className="container">
      <section className="restaurant">
        <div className="left">
          <h1 className="restaurant-name">{data.header.title}</h1>
          <p className="restaurant-description">
            {data.meta.metatags.descriptionSocial}
          </p>
        </div>
        <div className="right">
          {console.log(data.header.image.url)}
          <img src={data.header.image.url} alt="Photo of the restaurant" />
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
