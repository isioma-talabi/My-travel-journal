import markerImage from "../assets/marker.png"
import "../index.css";
import PropTypes from "prop-types";

export default function Card(props) {
    console.log(props);
  return (
    <article className="card-widget">
      <div className="main-image-container">
        <img className="main-image" src={props.img.src} alt={props.img.alt} />
      </div>

      <div className="info-container">
        <img className="marker" src={markerImage} alt="A marker Image" />
        <span className="country"> {props.country} </span>
        <a href={props.googleMapsLink} target="_blank">
          View on Google Maps
        </a>
        <h1 className="card-title"> {props.title} </h1>
        <p className="card-dates"> {props.dates} </p>
        <p className="card-text"> {props.text} </p>
      </div>
    </article>
  );
}

// Add PropTypes validation
Card.propTypes = {
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  country: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  googleMapsLink: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// Default props (optional)
Card.defaultProps = {
  googleMapsLink: "#",
};