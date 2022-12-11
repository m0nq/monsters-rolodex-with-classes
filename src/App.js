import { Component } from 'react';

import './App.css';

class App extends Component {

    monsters = [];

    constructor() {
        super();

        this.state = {
            monsters: []
        };
    }

    componentDidMount = async () => {
        try {
            this.monsters = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
            this.setState(
                () => ({ monsters: this.monsters }),
                () => console.log(this.state)
            );
        } catch (e) {
            console.log('Error', e.message);
        }
    };

    filterMonsters = event => {
        const filteredMonsters = this.monsters.filter(monster => monster.name.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState(() => ({ monsters: filteredMonsters }));
    };

    render = () => (
        <div className="App">
            <input type="search" className="search-box" placeholder="Search..." onChange={this.filterMonsters}/>
            {this.state.monsters.map(monster => (
                <div key={monster.id}>
                    <h1>{monster.name}</h1>
                </div>
            ))}
        </div>
    );
}

export default App;
