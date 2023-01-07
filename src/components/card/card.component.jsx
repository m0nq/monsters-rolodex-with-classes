import './card.styles.css';

const Card = ({ monster: { id, name, email } }) => {
    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://www.robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

// class Card extends Component {
//     render = () => {
//         const { name, email, id } = this.props.monster;
//         return (
//             <div className="card-container" key={id}>
//                 <img alt={`monster ${name}`} src={`https://www.robohash.org/${id}?set=set2&size=180x180`}/>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         );
//     };
// }

export default Card;
