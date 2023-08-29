import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Series.css';
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres/Genres";

const Series = () => {
        const [page, setPage] = useState(1);
        const [content, setContent] = useState([]);
        const [genres, setGenres] = useState([]);
        const [selectedGenres, setSelectedGenres] = useState(['all']);
        const media_type = 'tv';

        useEffect(() => {
            fetchGenres();
            fetchSeries();
        }, [page, selectedGenres]);

        const fetchGenres = async () => {

            const { data } = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            );
            console.log(data);
            setGenres(data.genres);
        };

        useEffect(() => {
            fetchGenres();
        }, [])

    
        const fetchSeries = async () => {
            let apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
            
            if (selectedGenres.length > 0) {
                const selectedGenresString = selectedGenres.join(',');
                apiUrl += `&with_genres=${selectedGenresString}`;
            }
        
            const { data } = await axios.get(apiUrl);
            setContent(data.results);
        };   
    
        const handleGenreClick = (genreId) => {
            setSelectedGenres([genreId]);
            setPage(1);
        };
    
        return (
            <div>
                <span className='pageTitle'>Series</span>
                <div className="genres">
                    <Genres
                        key="all"
                        id="all"
                        name="All"
                        onGenreClick={handleGenreClick}
                        selected={selectedGenres.includes('all')}
                    />

                    {genres && genres.map((g) => (
                        <Genres
                            key={g.id}
                            id={g.id}
                            name={g.name}
                            onGenreClick={handleGenreClick}
                            selected={selectedGenres.includes(g.id)}
                        />
                    ))}
                </div>
                <div className="series">
                {
                    content && content.map((c) => (
                        <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={media_type} vote_average={c.vote_average}/>
                    ))
                }
                </div>
                <CustomPagination setPage={setPage}/>
            </div>
        )
    }

export default Series;