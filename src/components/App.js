import React from 'react';

import sampleFishes from '../sample-fishes';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            fishes: {},
            order: {}
        }
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
    }

    addFish(fish){
        const fishes = {...this.state.fishes};
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        this.setState({ fishes });
    }

    loadSamples(){
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder(key){
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="list-of-fishes">
                        {
                            Object
                            .keys(this.state.fishes)
                            .map(key => <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]}/>)
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory loadSamples={this.loadSamples} addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;