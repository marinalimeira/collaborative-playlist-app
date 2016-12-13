import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  renderContent() {
    if (localStorage.getItem("name") === null) {
      return (
        <div>
          <Link to="/login">login</Link> &#9733; <Link to="/register">cadastro</Link>  
        </div>
      );
    } else {
      return this.renderUserInfo();
    }
  }

  renderUserInfo() {
    const name = localStorage.getItem("name");
    return (<div>{name}</div>);
  }

  render() {
    return(
        <div id="header">
          <h1>{this.renderContent()}</h1>
        </div>
    );
  }
}

export default Header;
