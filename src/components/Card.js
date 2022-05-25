import React from "react"
import location from "../img/location.svg"

export default function Card(props){
    return (
            <section className="note">
                <div className="image--container">
                    <img className="image--container-image" src={process.env.PUBLIC_URL+`img/${props.image}`} alt="" />
                </div>
                <div className="card--main">
                    <div className="card--header">
                        <img src={location} alt="" />
                        <p>{props.location.toUpperCase()}</p>
                        <a href="" className="card--header-location">View on Google Maps</a>
                    </div>
                    <h1 className="card--main-title">{props.title}</h1>
                    <div className="card--main-date">
                        <p>{props.date.start} - {props.date.end}</p>
                    </div>
                    <p className="card--main-desc">
                    {props.description}
                    </p>
                </div>
            </section>
    )
}