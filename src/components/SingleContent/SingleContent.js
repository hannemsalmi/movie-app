import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../config/config";
import './SingleContent.css';

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {

    const releaseDate = new Date(date);

    const formattedDate = releaseDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });


    return (
        <div className="media">
            <Badge badgeContent={vote_average} color={vote_average > 7 ? "primary" : "secondary"} />
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className="subTitle">
                {media_type === "tv" ? "TV Series" : "Movie"}
            </span>
            <span className="subTitle">{formattedDate}</span>
        </div>
    )
}

export default SingleContent;