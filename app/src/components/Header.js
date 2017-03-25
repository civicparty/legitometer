import React from 'react';

//stateless functional component... i think?
const Header = (props) => {
  return (
    <header>
      <img className="header logo"src="./images/logo_ss.png" alt="logo"/>
      <h6 className="header header-name">Name</h6>
      <h6 className="header avatar">Avatar</h6>
      <br/><br/>
      <hr/>
    </header>
)
}
export default Header;
