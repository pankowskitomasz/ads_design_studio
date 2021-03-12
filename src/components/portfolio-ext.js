import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class PortfolioExt extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path} className="btn btn-outline-dark rounded-pill">
                {this.props.backLink.name}
            </Link>;
        }
        return(        
            <Container fluid className={"about-desc p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Print collateral
                            </h3>
                            <p className="initialism">
                                Joining strategy with creative is what we do best, as our goal is to create 
                                tools that engage your audience and entice them to act.
                            </p>  
                            <ul className="list-unstyled pl-3 initialism font-weight-bold">
                                <li className="mb-2">Business Card</li>
                                <li className="mb-2">Letterhead</li>
                                <li className="mb-2">Brochures and Fliers</li>
                                <li className="mb-2">Folders</li>
                                <li className="mb-2">Signage</li>
                            </ul>
                            <div className="text-center">
                                {linking}  
                            </div>                        
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/portfolio/portfolio-ext-1.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/portfolio/portfolio-ext-2.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Web design
                            </h3>
                            <p className="initialism">
                                We help our clients to craft websites that fit the sales and marketing 
                                objectives. Not only beautifully displayed, our team of insights-driven 
                                leaders will make sure the websites are intuitively built and highly 
                                functional.
                            </p>  
                            <ul className="list-unstyled pl-3 initialism font-weight-bold">
                                <li className="mb-2">Website Domain and Hosting</li>
                                <li className="mb-2">E-Commerce Website</li>
                                <li className="mb-2">Responsive Mobile Website</li>
                                <li className="mb-2">Content Management Systems</li>
                                <li className="mb-2">Customized System</li>
                            </ul>
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
                                Photo retouching
                            </h3>
                            <p className="initialism">
                                Whether you’re struggling to produce the best possible images for your website, 
                                online store or social media, or simply trying to capture your most precious 
                                memories in the most artistic way; you can either spend a lot of money hiring 
                                a professional photographer or a little bit of money on a photo retouching 
                                service.
                            </p>  
                            <ul className="list-unstyled pl-3 initialism font-weight-bold">
                                <li className="mb-2">Portrait or Product Photo Retouching</li>
                                <li className="mb-2">Body Slimming</li>
                                <li className="mb-2">Photo Restoration</li>
                                <li className="mb-2">Colour Replacement</li>
                                <li className="mb-2">Remove Background</li>                                
                            </ul>
                            <div className="text-center">
                                {linking}  
                            </div>                        
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/portfolio/portfolio-ext-3.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/portfolio/portfolio-ext-4.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Interactive design
                            </h3>
                            <p className="initialism">
                                Interaction Design is an interdisciplinary field merging design skills with 
                                programming to create meaningful experiences between the user and technology. 
                                We deliver WOW to your audiences.
                            </p>  
                            <ul className="list-unstyled pl-3 initialism font-weight-bold">
                                <li className="mb-2">User Experience</li>
                                <li className="mb-2">User Interface</li>
                                <li className="mb-2">Graphic Design</li>
                            </ul>
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

export default PortfolioExt;