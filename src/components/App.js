import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends React.Component {
	state = {
		fishes: {},
		order: {}
	};

	componentDidMount() {
		const { params } = this.props.match;
		// below is the reference to the DB
		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: `fishes`
		});
	}

	componentWillUnmount() {
		// removed the connection to the DB after the component is unmounted
		base.removeBinding(this.ref);
	}

	addFish = fish => {
		// spread the existing state
		const fishes = { ...this.state.fishes };
		// update object in state
		fishes[`fish-${Date.now()}`] = fish;
		// set state
		this.setState({ fishes });
	};

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	};

	addToOrder = key => {
		const order = { ...this.state.order };
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	};

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />

					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish
								key={key}
								fish={this.state.fishes[key]}
								addToOrder={this.addToOrder}
								index={key}
							/>
						))}
					</ul>
				</div>
				<Order order={this.state.order} fishes={this.state.fishes} />
				<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
			</div>
		);
	}
}

export default App;
