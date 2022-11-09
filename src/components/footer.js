import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        let menuContent = this.props.menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            return <li key={idx}>
                <Link to={item.path} className="text-light">
                    {item.name}
                </Link>
            </li>;
        });
        return(      
            <footer>
                <Container fluid className="align-items-center bg-dark border-top border-secondary p-3 text-light">
                    <Row>
                        <Col xs={12} sm={6}>
                            <img src="/img/navbar_logo.png" alt="logo" className="mr-2 filter-grayscale"/>
                            <ul className="list-unstyled text-center text-sm-left">
                                <li className="font-logo">ADS Studio</li>
                                <li>ul. Street 1</li>
                                <li>00-123 City</li>
                                <li>(00) 123 456 789 </li>
                                <li>Mon-Fri 11:00-19:00</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6}>
                            <ul className="list-unstyled text-center text-sm-right">
                                <li className="font-logo">Menu</li>
                                {menuContent}
                            </ul>
                        </Col>
                    </Row>
                    <Row className="mx-auto text-center d-flex w-100 border-top pt-1">
                        <Col xs={10} className="mx-auto text-shadow">
                            <small className="my-0 text-white">
                                Copyright &copy; 2020-2022 Tomasz Pankowski. All rights reserved.
                                <Link to={this.props.privacyLink.href} className="text-white">
                                    {this.props.privacyLink.name}
                                </Link>
                            </small>
                        </Col>
                    </Row>
                </Container> 
            </footer> 
        );
    }
}

export default Footer;