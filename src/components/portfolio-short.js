import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class PortfolioShort extends Component{
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
                            src="img/portfolio/portfolio-short-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                               Our Portfolio
                            </h3>
                            <p className="initialism">
                                We offer complete full service capabilities on a personalized level. With us, 
                                the only thing that will get lost in the shuffle is your competition. Whether 
                                you require a strategically planned advertising campaign or a single brochure, 
                                we can help you reach your goals.
                            </p>  
                            <p className="initialism">
                                Initial impressions are made at a glance. Your promotional material acts as 
                                your silent sales force. They need to speak direct to your consumer, generate 
                                attention and help close the deal. Most importantly, they need to strengthen 
                                your brand.
                            </p>  
                            <div className="text-center">
                                {linking}  
                            </div>                        
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default PortfolioShort;