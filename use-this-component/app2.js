var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
    return <button onClick={this.scream}></button>;
  }
});
ReactDOM.render(
	<Button />, 
	document.getElementById('app')
);
