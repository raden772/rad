import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/image/superhero/antman.jpg"
import avengersImage from "../assets/image/superhero/avengers.jpg"
import blackwidowImage from "../assets/image/superhero/blackwidow.jpg"
import nwyImage from "../assets/image/superhero/nwy.jpg"
import thorImage from "../assets/image/superhero/thor.jpg"
import venomImage from "../assets/image/superhero/venom.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPERHERO MOVIE</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero" >
                    <Card className="movieImage">
                    <Image src={antmanImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>ANTMAN</h6></button>
                    </a></div>
                    
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col>
                    <Col md={4}  className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={avengersImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>AVENGERS <br />END GAME</h6></button>
                    </a></div>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col> <Col md={4}   className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={blackwidowImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>BLACK WIDOW</h6></button>
                    </a></div>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={thorImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>THOR THE DARK WORLD</h6></button>
                    </a></div>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={venomImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>VENOM LET THERE BE CARNAGE</h6>
                        </button>
                    </a></div>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={nwyImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>SPIDERMAN NO WAY HOME</h6></button>
                    </a></div>
                    <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero