import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Logo deliveroo" className="logo" />
      </div>
    </header>
  );
};
export default Header;
