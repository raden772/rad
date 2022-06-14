import { Card, Container, Row, Col, Image, button } from "react-bootstrap"
import kknImage from "../assets/image/trending/kkn.jpg"
import kuntilanakImage from "../assets/image/trending/kuntilanak.jpg"
import doctorstrangeImage from "../assets/image/trending/doctorstrange.jpg"
import garagaraImage from "../assets/image/trending/garagara.jpg"
import dollImage from "../assets/image/trending/doll.jpg"
import jurasicImage from "../assets/image/trending/jurasic.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIE</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending" >
                    <Card className="movieImage">
                    <Image src={kknImage}
                    alt="KKN MOVIES" 
                    className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                            <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>KKN DESA PENARI</h6></button>
                    </a></div>
                    
                    <Card.Text className="text-left">
                    film ini menceritakan mengenai sejumlah mahasiswa yang menjalani KKN (Kuliah Kerja Nyata) di sebuah desa yang disebut sebagai Desa B, yang mana di sesa tersebut memiliki banyak aturan. Hingga kejadian janggal pun dirasakan.
                    </Card.Text>
                    <br />
                    <Card.Text className="text-left">Last updated 14 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col>
                    <Col md={4}  className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={kuntilanakImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>KUNTILANAK 3</h6></button>
                    </a></div>
                    <Card.Text className="text-left">
                    Kuntilanak 3 berkisah tentang petualangan Dinda di Sekolah Mata Hati. Seusai pulang dari Ujung Sedo, Dinda merasa berbeda dari sebelumnya, seakan ada kekuatan di dalam dirinya yang terlepas tiap kali amarah menguasai.
                    </Card.Text>
                    <br />
                    <Card.Text className="text-left">Last updated 32 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col> <Col md={4}   className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={doctorstrangeImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>DOCTOR STRANGE MULTIVERES OF MADNESS</h6></button>
                    </a></div>
                    <Card.Text className="text-left">
                    Film Doctor Strange in the Multiverse of Madness disutradarai oleh Sam Raimi dan menceritakan tentang dampak dari mantra terlarang yang diucapkan oleh Doctor Strange.
                    </Card.Text>
                    
                    <Card.Text className="text-left">Last updated 29 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={garagaraImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>GARA GARA WARISAN</h6></button>
                    </a></div>
                    
                    <Card.Text className="text-left">
                     persaingan tiga bersaudara untuk merebutkan warisan dari milik Dahlan (Yayu Unru), ayah mereka. Sebuah tantangan pun diajukan oleh Dahlan untuk menguji kemampuan anak-anaknya mengurus GH
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col> <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={dollImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                        <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>THE DOLL 3</h6></button>
                    </a></div>
                    <Card.Text className="text-left">
                    The Doll 3 merupakan film horor Indonesia dengan cerita teror boneka yang dirasuki arwah. Film ini digarap Rocky Soraya, sutradara yang juga menggarap dua seri The Doll sebelumnya.
                    </Card.Text>
                    <br />
                    <Card.Text className="text-left">Last updated 40 mins ago</Card.Text>
                    </div>
                    </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                    <Image src={jurasicImage} alt="KKN MOVIES" className="images" />
                    <div className="bg-dark">
                        <div className="p-2 m-1 text-white"> <div className="introButton mt-6 text-center">
                    <a href="https://www.youtube.com/watch?v=Jo-iywg-9-4">
                        <button><h6>JURASSIC WORLD DOMINION</h6></button>
                    </a></div>
                    
                    <Card.Text className="text-left">
                    Jurassic World Dominion menceritakan petualangan baru yang membuat dunia berputar. Dari sutradara Colin Trevorrow, Dominion berkisah empat tahun setelah Isla Nublar hancur.
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

export default Trending