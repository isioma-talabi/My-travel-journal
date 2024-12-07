import globeImage from "../assets/globe.png";
import "../index.css";

export default function Header() {
  return (
    <header>
      <img src={globeImage} alt="A picture of a globe" />
      <p>my travel journal</p>
    </header>
  );
}
