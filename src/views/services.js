import React,{Component} from "react";
import ServicesExt from "../components/services-ext";
import ServicesShort from "../components/services-short";

class Services extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <ServicesShort/>
                <ServicesExt/>
            </main>
        );
    }
}
export default Services;