import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import Item from "../ItemCard/Item";

class Slider extends Component {
    render() {
        const responsive = {
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }

        }
        return (

                <div className="tab_sliders">
                    <div className="container">
                    <div className="tab_slider_top">
                        <OwlCarousel className="owl-carousel owl-theme" items={5} dots={0} margin={20} responsive={responsive} nav={true}>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </OwlCarousel>
                    </div>

                </div>


            </div>

        );
    }
}

Slider.propTypes = {};

export default Slider;
