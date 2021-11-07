import React, { useState } from "react";
import {
    accList,
    Hair,
    Ears,
    Eyes,
    Mouth,
    Neck,
    Leg,
    Accessories,
    Backgrounds,
} from "../data/list";
import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    const [style, setStyle] = useState(Hair);
    const [hair, setHair] = useState("/alpaca/hair/default.png");
    const [ears, setEars] = useState("/alpaca/ears/default.png");
    const [eyes, setEyes] = useState("/alpaca/eyes/default.png");
    const [mouth, setMouth] = useState("/alpaca/mouth/default.png");
    const [neck, setNeck] = useState("/alpaca/neck/default.png");
    const [leg, setLeg] = useState("/alpaca/leg/default.png");
    const [accessories, setAccessories] = useState("");
    const [backgrounds, setBackgrounds] = useState(
        "/alpaca/backgrounds/blue50.png"
    );

    const handleStyle = url => {
        switch (style) {
            case Hair:
                setHair(url);
                break;
            case Ears:
                setEars(url);
                break;
            case Eyes:
                setEyes(url);
                break;
            case Mouth:
                setMouth(url);
                break;
            case Neck:
                setNeck(url);
                break;
            case Leg:
                setLeg(url);
                break;
            case Accessories:
                setAccessories(url);
                break;
            case Backgrounds:
                setBackgrounds(url);
                break;
            default:
                break;
        }
    };

    const randomArray = list => {
        return Math.floor(Math.random() * list.length);
    };

    const handleRandom = () => {
        setHair(Hair[randomArray(Hair)].url);
        setEars(Ears[randomArray(Ears)].url);
        setEyes(Eyes[randomArray(Eyes)].url);
        setMouth(Mouth[randomArray(Mouth)].url);
        setNeck(Neck[randomArray(Neck)].url);
        setLeg(Leg[randomArray(Leg)].url);
        setAccessories(Accessories[randomArray(Accessories)].url);
        setBackgrounds(Backgrounds[randomArray(Backgrounds)].url);
    };
    console.log(randomArray(Hair));
    return (
        <Container>
            <h1>ALPACA GENERATOR</h1>
            <Row xs="1" md="2" className="d-flex justify-content-center">
                <Col>
                    <div
                        className="img-container"
                        style={{ backgroundImage: `url(${backgrounds})` }}
                    >
                        <img src={hair} alt="" className="hair__img" />
                        <img src={ears} alt="" className="ears__img" />
                        <img src={eyes} alt="" className="eyes__img" />
                        <img src={mouth} alt="" className="mouth__img" />
                        <img src={neck} alt="" className="neck__img" />
                        <img src={leg} alt="" className="leg__img" />
                        <img
                            src={accessories}
                            alt=""
                            className="accessories__img"
                        />
                        <img
                            src="/alpaca/nose.png"
                            alt=""
                            className="nose__img"
                        />
                    </div>
                    <Row>
                        <Col>
                            <Button onClick={handleRandom}>Random</Button>
                        </Col>
                        <Col>
                            <Button>Download</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <div>
                        <h4>Accessories The ALPACA</h4>
                        <Row xs="2" md="2" lg="3" className="g-4 mt-3">
                            {accList.map(item => {
                                return (
                                    <div key={item.id}>
                                        <Button
                                            variant="outline-primary"
                                            size="lg"
                                            onClick={() => setStyle(item.url)}
                                        >
                                            {item.text}
                                        </Button>
                                    </div>
                                );
                            })}
                        </Row>
                    </div>
                    <div className="mt-4">
                        <h4>Style</h4>
                        <Row xs="2" md="2" lg="3" className="g-4 mt-3">
                            {style.map(item => {
                                return (
                                    <div key={item.id}>
                                        <Button
                                            variant="outline-secondary"
                                            size="lg"
                                            onClick={() =>
                                                handleStyle(item.url)
                                            }
                                        >
                                            {item.text}
                                        </Button>
                                    </div>
                                );
                            })}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
