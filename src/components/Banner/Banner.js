import React, {Component} from 'react';
import OwlCarousel from "react-owl-carousel";
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import BannerItem from "./BannerItem";
class Banner extends Component {
    render() {
        return (
            <div className="banner-block">
                <div className="container">
                    <OwlCarousel className="owl-theme" items={1}>
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

Banner.propTypes = {};

export default Banner;