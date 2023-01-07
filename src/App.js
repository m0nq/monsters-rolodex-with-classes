import { useMemo } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const monsters = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
                setMonsters(monsters);
            } catch (e) {
                console.log('Error: ', e.message);
            }
        })();
    }, []);

    const onSearchChange = useCallback(event => {
        const searchField = event.target.value.toLocaleLowerCase();
        setSearchField(searchField);
    }, []);

    const filteredMonsters = useMemo(() => {
        return monsters.filter(monster => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
    }, [monsters, searchField]);

    return (
        <div className="App">
            <h1 className="app-title">Monsters Rolodex</h1>
            <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters..." className="search-box"/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
};

// class App extends Component {
//
//     constructor() {
//         super(undefined);
//
//         this.state = {
//             monsters: [],
//             searchField: ''
//         };
//     }
//
//     componentDidMount = async () => {
//         try {
//             const monsters = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
//             this.setState(() => ({ monsters }));
//         } catch (e) {
//             console.log('Error', e.message);
//         }
//     };
//
//     onSearchChange = event => {
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => ({ searchField }));
//     };
//
//     render = () => {
//         const { onSearchChange } = this;
//         const { monsters } = this.state;
//         const { searchField } = this.state;
//
//         const filteredMonsters = monsters.filter(monster => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         });
//
//         return (
//             <div className="App">
//                 <h1 className="app-title">Monsters Rolodex</h1>
//                 <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters..." className="search-box"/>
//                 <CardList monsters={filteredMonsters}/>
//             </div>
//         );
//     };
// }

export default App;
