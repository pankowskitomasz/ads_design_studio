import React,{Component} from "react";
import AboutShort from "../components/about-short";
import ContactData from "../components/contact-data";
import PortfolioShort from "../components/portfolio-short";
import ServicesShort from "../components/services-short";
import Slider from "../components/slider";
import {homeCfg} from "../config";

class Home extends Component{
    render(){
        return(
            <main className="minh-100vh bg-white">  
                <Slider/>
                <AboutShort backLink={homeCfg[0]}/>
                <ServicesShort backLink={homeCfg[3]}/>
                <PortfolioShort backLink={homeCfg[2]}/>
                <ContactData backLink={homeCfg[1]}/>
            </main>
        );
    }
}
export default Home;