import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutExt extends Component{
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
                                Creativity
                            </h3>
                            <p className="initialism">
                                We combine the need for advertising direction, marketing and media planning 
                                with the creative ability to execute our recommendations. We do this through 
                                exceptional creative design, meticulous technical ability, detailed planning 
                                and old-fashioned hard work.
                            </p>  
                            <p className="initialism">
                                We do all our own pre-press work in-house on mac computers saving both valuable 
                                time and money while giving us complete creative freedom and quality control. 
                                By networking with top professional printers, illustrators, photographers and 
                                video production experts, we can match the subcontractor to our client’s 
                                specific needs and budget.
                            </p>  
                            <div className="text-center">
                                {linking}  
                            </div>                        
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-ext-1.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-ext-2.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Passion
                            </h3>
                            <p className="initialism">
                                We don’t just produce eye catching advertising – we make sure every piece we 
                                work on enhances your brand; we make sure it speaks to your target market; 
                                and we make sure it is delivered on time and on budget. Once you sign off 
                                on a project we make sure it gets to where it needs to go (to the media, 
                                the printer, etc) and we handle the final proofing for you.
                            </p>  
                            <p className="initialism">
                                Successful business in the new millennium will revolve around teamwork. The 
                                Creative Effects network consists of top professionals in the industry 
                                – research specialists, quality printers, SEO consultants, awards winning 
                                photographers, illustrators and video producers.
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

export default AboutExt;