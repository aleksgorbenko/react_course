import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
	storeInput = React.createRef();

	goToStore = event => {
		// stops from refreshing the page
		event.preventDefault();
		// grab text from the box
		const storeId = this.storeInput.current.value;
		// we are going to transition to store/:storeId
		this.props.history.push(`/store/${storeId}`);
	};

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input
					type="text"
					required
					placeholder="Store Name"
					defaultValue={getFunName()}
					ref={this.storeInput}
				/>
				<button type="submit">Visit Store</button>
			</form>
		);
	}
}

StorePicker.propTypes = {
	history: PropTypes.object.isRequired
};

export default StorePicker;
