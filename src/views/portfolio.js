import React,{Component} from "react";
import PortfolioExt from "../components/portfolio-ext";
import PortfolioShort from "../components/portfolio-short";

class Portfolio extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white"> 
                <PortfolioShort/>
                <PortfolioExt/>
            </main>
        );
    }
}
export default Portfolio;