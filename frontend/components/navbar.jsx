var React = require('react');
var PropTypes = React.PropTypes;

var Navbar = React.createClass({

  render: function() {
    return (
      <div className="fixed">
        <nav className="top-bar" data-topbar>
          <ul className="title-area">
            <li className="name">
              <h1><a href="">Home</a></h1>
            </li>
            <li className="toggle-topbar menu-icon">
              <a href="#"><span></span></a>
            </li>
          </ul>
          <div className="top-bar-section">
            <ul className="right">
              <li><a href="">About</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

});

module.exports = Navbar;
