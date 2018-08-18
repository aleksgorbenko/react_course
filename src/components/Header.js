import React from "react";

// stateless functional component:
// Does not extend from React.Component - its purely presentational

const Header = (props) => (
	<header className="top">
		<h1>
			Catch
			<span className="ofThe">
				<span className="of">of</span>
				<span className="the">the</span>
			</span>
			Day
		</h1>
		<h3 className="tagline">
			<span>{props.tagline}</span>
		</h3>
	</header>
);

export default Header;
