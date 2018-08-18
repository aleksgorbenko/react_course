import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
	totalPrice = orderIds => {
		const total = orderIds.reduce((prevTotal, key) => {
			const fish = this.props.fishes[key];
			const amount = this.props.order[key];
			const isAvailable = fish && fish.status === "available";
			if (isAvailable) {
				return prevTotal + fish.price * amount;
			}
			return prevTotal;
		}, 0);

		return total;
	};

	renderOrder = key => {
		const fish = this.props.fishes[key];
		const amount = this.props.order[key];
		if (!fish.status === "available") {
			return <li key={key}>Sorry {fish ? fish.name : "fish"} is no longer available</li>;
		}
		return (
			<li key={key}>
				{amount} lbs {fish.name}
				{formatPrice(fish.price * amount)}
			</li>
		);
	};

	render() {
		const orderIds = Object.keys(this.props.order);

		return (
			<div className="order-wrap">
				<h2>Order</h2>
				<ul className="order">{orderIds.map(this.renderOrder)}</ul>
				<div className="total">
					Total:
					<strong>{formatPrice(this.totalPrice(orderIds))}</strong>
				</div>
			</div>
		);
	}
}

export default Order;
