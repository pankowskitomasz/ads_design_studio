import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class ServicesExt extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-dark" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/services/services-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Creative projects
                            </h3>
                            <p className="initialism">
                                Building and maintaining excellent working relationships is the cornerstone 
                                of our business. We aim to please with our 3D Visualisation and Animation 
                                skills and the following testimonials show how happy we make our clients 
                                through our service and attention to detail.
                            </p>  
                            <div className="text-center">
                                {linking}  
                            </div>                        
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Redesign
                            </h3>
                            <p className="initialism">
                                We offer a broad range of services for both the domestic and commercial sector. 
                                We specialise in refurbishment and alterations as well as new build projects.
                            </p>  
                            <p className="initialism">
                                We possess a wide range of skills and are fully committed to design excellence. 
                                We can provide a comprehensive range of services tailored to your individual 
                                needs. The flexibility of our team enables projects of all sizes to be 
                                undertaken.
                            </p>  
                            <div className="text-center">
                                {linking}  
                            </div>                        
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/services/services-ext-2.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ServicesExt;