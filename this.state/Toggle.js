var React = require('react');
var ReactDOM = require('react-dom');

var green = '#39D1B4';
var yellow = '#FFD712';

var Toggle = React.createClass({
  getInitialState: function () {
    return {
      color: green    
    };
  },
  changeColor: function(){
    var color = this.state.color == yellow ? green : yellow;
    this.setState({color:color});
  },
  render: function () {
    return (
      <div style={{background: this.state.color}} >
        <h1>
         
        </h1>
        <button>
           Change color
        </button>
      </div>
    );
  }
});

ReactDOM.render(<Toggle />, document.getElementById('app'));
