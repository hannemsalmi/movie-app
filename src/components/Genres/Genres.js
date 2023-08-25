import './Genres.css';

const Genres= ({id, name}) => {
    return ( 
        <div className="genres">
           <b className="genre_name">{name}</b>
        </div>
    )
}

export default Genres