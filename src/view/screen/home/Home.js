import React, {Component} from 'react';
import HomeMainSection from "./HomeMainSection";
import MenuNav from "./MenuNav";
import Menu from "./Menu";
import DownloadSection from "./DownloadSection";
import ContactSection from "./ContactSection";
import SubscribeSection from "./SubscribeSection";
import Footer from "../../component/Footer";

export default class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {showMenu: false};
    }

    render()
    {
        return (
            <div>

                <Menu show={this.state.showMenu} close={() => this.setState({showMenu: false})}/>
                <MenuNav onClick={() => this.setState({showMenu: true})}/>
                <HomeMainSection/>

                <DownloadSection/>
                <ContactSection/>
                <SubscribeSection/>

                <Footer/>


            </div>
        );
    }



}
