import './Genres.css';

const Genres = ({ id, name, onGenreClick, selected }) => {
    const genreButtonClasses = `genre_button ${selected ? "selected" : ""}`;

    return (
        <div className="single_genre">
            <button
                className={genreButtonClasses}
                onClick={() => onGenreClick(id)}
            >
                {name}
            </button>
        </div>
    );
}


export default Genres