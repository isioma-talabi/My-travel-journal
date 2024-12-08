import "./App.css";
import Header from "./components/Header";
import Card from "./components/Cards";
import data from "./data";

function App() {
  const dataEntry = data.map((cards) => {
    return (
      <Card
        key={cards.id}
        img={{ src: cards.img.src, alt: cards.img.alt }}
        title={cards.title}
        country={cards.country}
        googleMapsLink={cards.googleMapsLink}
        dates={cards.dates}
        text={cards.text}
      />
    );
  });

  return (
    <>
      <Header />
      <main>{dataEntry}</main>
    </>
  );
}

export default App;
