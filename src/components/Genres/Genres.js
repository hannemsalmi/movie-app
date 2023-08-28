import './Genres.css';

const Genres = ({ id, name, onGenreClick, selected }) => {
    return (
        <button
        className={`genre_button ${selected ? "selected" : ""}`}
        onClick={() => onGenreClick(id)}> {name}</button>
    );
}

export default Genres