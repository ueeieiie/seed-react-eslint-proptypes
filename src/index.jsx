// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Seed from './components/Seed';

const appLocation = document.querySelector('.app');

const App = () => {
	const justAStyle = `
			h1 {
				text-decoration: underline;
				text-transform: uppercase;
			}
			padding: 20px;
			text-align: center;
		`;

	return (
		<div>
			<Seed 
				title="Seed Project!"
				description="This is a seed project or React, ESLint and prop-types"
				color="pink"
				background="gray"
				styles={justAStyle} 
			/>
		</div>
	);
};

ReactDOM.render(<App />, appLocation);
