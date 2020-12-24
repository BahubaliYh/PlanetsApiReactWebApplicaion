import React, { useEffect, useState } from "react";
import Planet from "./components/Planet";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { ToastProvider, useToasts } from "react-toast-notifications";

const PLANETS_API = "https://assignment-machstatz.herokuapp.com/planet";

function App() {
  const [planets, setPlanets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const { addToast } = useToasts();
  useEffect(() => {
    getPlanets(PLANETS_API);
  }, []);

  const getPlanets = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlanets(data);
      });
  };

  const handleFavorite = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
      addToast(`Added ${id} To Favorites`, { appearance: "success" });
    }
  };

  const handleRemoveFavorite = (id) => {
    let fav = id;
    setFavorites(favorites.filter((id) => id !== fav));
    addToast(`Removed ${id} from Favorites`, { appearance: "error" });
  };

  return (
    <Container fluid>
      <div className="text-center p-5 text-white bg-dark">
        <h1>My Planets</h1>
      </div>
      <Container>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
        >
          <Tab eventKey="home" title="All Planets">
            <Row className="justify-content-md-center mt-5">
              {planets.length > 0 &&
                planets.map((planet) => (
                  <Planet
                    key={planet.id}
                    {...planet}
                    handleFavorite={handleFavorite}
                  />
                ))}
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Favorite Planets">
            <Row className="justify-content-md-center mt-5">
              {favorites.length > 0 &&
                favorites.map((favorite) => (
                  <Col sm={12} md={4}>
                    <div className="card mb-5 p-2">
                      <h2> {favorite} </h2>
                      <BsHeartFill
                        className="ml-auto my-auto"
                        size={32}
                        style={{ fill: "red" }}
                      />
                      <ImCross
                        className="del-icon"
                        size={32}
                        onClick={() => handleRemoveFavorite(favorite)}
                      />
                    </div>
                  </Col>
                ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
}

export default App;
