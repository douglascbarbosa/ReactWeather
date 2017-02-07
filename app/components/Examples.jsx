var React = require('react');

var {Link} = require('react-router');

// var Examples = React.createClass({
// 	render : function (){
// 		return (
// 			<h3>Examples component</h3>
// 		);
// 	}
// });

var Examples = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">Examples</h1>
			<p>Here are a few exemple location to try out:</p>
			<ol>
				<li><Link to='/?location=Recife'>Recife, BR</Link></li>
				<li><Link to='/?location=Rio'>Rio, BR</Link></li>
			</ol>
		</div>
	);

};

module.exports = Examples;