import logo from "../images/logo.svg";

const Loader = () => {
  return (
    <div className="loader-block">
      <img src={logo} alt="Logo deliveroo" className="logo" />
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
