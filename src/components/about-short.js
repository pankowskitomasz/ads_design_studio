import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutShort extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path} className="btn btn-outline-dark rounded-pill">
                {this.props.backLink.name}
            </Link>;
        }
        return(        
            <Container fluid className={"about-short bg-light p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={10} md={8} className="mx-auto text-dark p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo text-center">
                                Who we are
                            </h3>
                            <p className="initialism">
                                ADS is a multi-disciplinary design studio. Established in 2009, formaly known 
                                as ADS Solutions. We help clients succeed in new categories by infusing a rich 
                                design language and product embodiments into their brands that instantly connect 
                                with their target consumers and enrich the brand’s meaning and positioning in 
                                the market. From the first sketches to product launch, we will remain your 
                                advertising partners. As an end-to-end service provider, we will ensure that 
                                your advertisment looks, feels and functions amazingly well. We get passionately 
                                involved in projects, ventures and brands we believe in. We mould our designs 
                                to specific business and industry needs to communicate your brand’s unique 
                                attributes in various creative and compelling ways to your prospects. We respect 
                                the worth of the resources (time, money and trust) you invest in us, and guarantee 
                                the highest returns on them. We provide a full suite of design consultancy that 
                                can be customized for short-term projects, studio brand management services or 
                                complex comprehensive brand identity and advertising design campaigns.
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

export default AboutShort;