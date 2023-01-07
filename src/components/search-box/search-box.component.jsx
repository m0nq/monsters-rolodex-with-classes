import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
    return (
        <input type="search"
            className={`${className}`}
            placeholder={placeholder}
            onChange={onChangeHandler}/>
    );
};

// class SearchBox extends Component {
//     render = () => {
//         const { onChangeHandler } = this.props;
//         const { placeholder } = this.props;
//         const { className } = this.props;
//
//         return (
//             <input type="search"
//                 className={`${className}`}
//                 placeholder={placeholder}
//                 onChange={onChangeHandler}/>
//         );
//     };
// }
export default SearchBox;
