// Dependencies
import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

// Seed Component style		
const SeedStyle = styled.div`
	${ props => `
		color: ${props.color};
		background-color: ${props.background};
		${props.styles}
	`}
`;

// Seed Component
const Seed = (props) => {
	const { title, description, color, background, styles } = props;
	
	return (
		<SeedStyle 
			color={color}
			background={background}
			styles={styles} 
		>
		
			<h1> {title} </h1>
			<p> {description} </p>
		</SeedStyle>
	);
};


// Seed Component PropTypes
Seed.propTypes = {
	title: PropType.string,
	description: PropType.string,
	color: PropType.string,
	background: PropType.string,
	styles: PropType.string
};

// Seed Component DefaultProps
Seed.defaultProps = {
	title: 'Title!',
	description: 'description!',
	color: 'black',
	background: 'transparent',
	styles: ''
};

export default Seed;
