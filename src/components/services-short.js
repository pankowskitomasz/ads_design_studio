import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class ServicesShort extends Component{
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
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Branding identity
                            </h3>
                            <p className="initialism">
                                Every business has a story to tell. We help our clients to craft the story 
                                and permeating market from establishing a new brand identity to maintain 
                                existing brand.
                            </p>  
                            <p className="initialism">
                                Our services includes:
                            </p>  
                            <ul className="list-unstyled pl-3 initialism font-weight-bold">
                                <li className="mb-2">Brand Strategy and Conceptualize</li>
                                <li className="mb-2">Logo Design</li>
                                <li className="mb-2">Corporate Identity</li>
                                <li className="mb-2">Copywriting</li>
                                <li className="mb-2">Packaging Design</li>
                            </ul>
                            <div className="text-center">
                                {linking}  
                            </div>                        
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/services/services-short-1.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ServicesShort;