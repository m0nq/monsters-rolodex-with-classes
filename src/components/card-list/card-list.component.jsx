import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map(monster => {
                return (
                    <Card monster={monster} key={monster.id}/>
                );
            })}
        </div>
    );
};

// class CardList extends Component {
//     render = () => {
//         console.log(this.props.monsters);
//         console.log('render from card list');
//         const { monsters } = this.props;
//
//         return (
//             <div className="card-list">
//                 {monsters.map(monster => {
//                     return (
//                         <Card monster={monster} key={monster.id}/>
//                     );
//                 })}
//             </div>
//         );
//     };
// }

export default CardList;
