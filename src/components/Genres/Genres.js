import './Genres.css';

const Genres= ({id, name}) => {
    return ( 
        <div className="single_genre">
           <b className="genre_name">{name}</b>
        </div>
    )
}

export default Genres