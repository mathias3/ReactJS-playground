var React = require('react');

var Sibling = React.createClass({
  render: function () {
var name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is Frarthur!</h1>
        <h2>Don't you think Frarthur is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked Frarthur!</h2>
      </div>
    );
  }
});

module.exports = Sibling;
