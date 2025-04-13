import './header.css';

import logo from '../../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <div id="header">
      <img src={logo} alt="Logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </div>
  )
};

export default Header;