var React = require('react');
var PropTypes = React.PropTypes;

var Home = React.createClass({

  render: function() {
    return (
      <div className="home-img">
        <section>
            <div className="form-centered">
              <h1>Stay in touch!</h1>
              <div className="row">
                <div className="large-12 columns">
                  <div className="row collapse">
                    <div className="small-10 columns">
                      <input type="text" placeholder="Hex Value"></input>
                    </div>
                    <div className="small-2 columns">
                      <a href="#" className="button postfix">Go</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    );
  }

});

module.exports = Home;
