function Card(props) {
    return(
        <div className="card">
        <div className="card-container">
            <img alt="place" src={props.img} className="cover-img"/>
            <p className="location"><i class="orange fa-sharp fa-solid fa-location-dot"></i> &nbsp; {props.location}</p>
            <a href={props.maps} className="maps" target="blank">view on google maps</a>
            <h1 className="place-title">{props.placeTitle}</h1>
            <h4 className="date">{props.date}</h4>
            <p className="about">{props.about}</p>
            <hr />

        </div>
        </div>
    )
}

export default Card;