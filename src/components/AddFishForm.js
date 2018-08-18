import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createFish = event => {
		event.preventDefault();

		const fish = {
			name: this.name.value,
			price: this.price.value,
			status: this.status.value,
			desc: this.desc.value,
			image: this.image.value
		};

		this.props.addFish(fish);
		event.currentTarget.reset();
	};

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input ref={this.nameRef} type="text" placeholder="Fish Name" />
				<input ref={this.priceRef} type="text" placeholder="Fish Price" />
				<select ref={this.statusRef}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea ref={this.descRef} placeholder="Fish Desc" />
				<input ref={this.imageRef} type="text" placeholder="Fish Image" />
				<button type="submit">+ Add Item</button>
			</form>
		);
	}
}

AddFishForm.propTypes = {
	addFish: PropTypes.func.isRequired
};

export default AddFishForm;
