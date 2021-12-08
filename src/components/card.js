import React from "react"
import pin from "../assets/pin.png"

export default function Card(props) {
    
    
    return (
        <div className="card">
            <img className="card-image" src={props.item.imageUrl}></img>
            <div className="card-details">
                <div className="card-1st-line">
                    <img className="card-pin" src={pin}></img>
                    <h5 className="country">{props.item.location}</h5>
                    <h6 className="viewgoogle"> view on Google Map</h6>
                </div>
                <h2 className="card-location"> {props.item.title} </h2>
                <h5 className="card-schedule">{props.item.startDate} - {props.item.endDate}</h5>
                <h6 className="card-description">{props.item.description} </h6>
            </div>
        </div>
    )
}


// {badgeText && <div className="card--badge">{badgeText}</div>}
//             <img src={`../images/${props.item.coverImg}`} className="card--image" />
//             <div className="card--stats">
//                 <img src="../images/star.png" className="card--star" />
//                 <span>{props.item.stats.rating}</span>
//                 <span className="gray">({props.item.stats.reviewCount}) • </span>
//                 <span className="gray">{props.item.location}</span>
//             </div>
//             <p className="card--title">{props.item.title}</p>
//             <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>