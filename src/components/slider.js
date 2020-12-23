import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Carousel from "../../node_modules/react-bootstrap/Carousel";
import Button from "../../node_modules/react-bootstrap/Button";

class Slider extends Component{
    render(){
        return(        
            <Container fluid className={"index-slider d-flex align-items-center p-0 bg-secondary h-100vh max-600 "+this.props.classExt}>
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={12} className="mx-auto text-shadow text-white p-0">
                        <Carousel>
                            <Carousel.Item className="bg-secondary">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh max-600 fit-cover mix-multiply"
                                    src="img/slider/slide-1.jpg"/>
                                <Carousel.Caption className="mb-5 font-weight-bold">
                                    <h1 className="font-logo font-big">
                                        WHO We Are?
                                    </h1>
                                    <p className="initialism">
                                        We are a creative agency focuses on branding, design, marketing 
                                        and digital strategy. We provide one stop platform where we develop, 
                                        analyse, design, and deliver.
                                    </p>
                                    <Link to="/about">
                                        <Button variant="outline-light" className="rounded-pill font-weight-bold">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-secondary">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh max-600 fit-cover mix-multiply"
                                    src="img/slider/slide-2.jpg"/>
                                <Carousel.Caption className="mb-5 font-weight-bold">
                                    <h1 className="font-logo font-big">
                                        WHAT We Do?
                                    </h1>
                                    <p className="initialism">
                                        We attain a competitive edge by offering visual design services, which 
                                        have become essential for any business presence. Incorporating its 
                                        branding, video production, marketing design services, digital services
                                    </p>
                                    <Link to="/services">
                                        <Button variant="outline-light" className="rounded-pill font-weight-bold">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-secondary">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh max-600 fit-cover mix-multiply"
                                    src="img/slider/slide-3.jpg"/>
                                <Carousel.Caption className="mb-5 font-weight-bold">
                                    <h1 className="font-logo font-big">
                                        HOW we Do?
                                    </h1>
                                    <p className="initialism">
                                        Check our portfolio
                                    </p>
                                    <Link to="/portfolio">
                                        <Button variant="outline-light" className="rounded-pill font-weight-bold">
                                            See more
                                        </Button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Slider;