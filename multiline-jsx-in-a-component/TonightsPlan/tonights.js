var React = require('react');
var ReactDOM = require('react-dom');

var fiftyFifty = Math.random() < 0.5;


var TonightsPlan = React.createClass({
render: function () {
var task;
if (fiftyFifty) {
task = "Tonight I'm going out WOOO"
} else {
task = "Tonight I'm going to bed WOOO"
}

return <h1>{task}</h1>;
}
});

ReactDOM.render(<TonightsPlan />
,
document.getElementById('app')
);
