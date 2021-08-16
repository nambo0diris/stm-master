import React, {Component} from 'react';
import Header from "../Header/Header";
import Crumbs from "../Crumbs/Crumbs";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";
import Categories from "../Categories/Categories";
import Instagram from "../Instagram/Instagram";
import Offer from "../Offer/Offer";
import Cta from "../Cta/Cta";
import Needs from "../Needs/Needs";
import Networks from "../Networks/Networks";
import Footer from "../Footer/Footer";

class Main extends Component {
    render() {
        return (
            <div className="inner">
                <Header />
                <Crumbs />
                <Banner />
                <Slider />
                <Categories />
                <Instagram />
                <Offer />
                <Cta />
                <Needs />
                <Networks />
                <Footer />
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;