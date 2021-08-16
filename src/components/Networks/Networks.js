import React, {Component} from 'react';
import './networks.css'
import {ReactComponent as Vk} from '../../assets/img/static/vk-black-icon.svg';
import {ReactComponent as Insta} from '../../assets/img/static/instagram-black-icon.svg';
import {ReactComponent as Fb} from '../../assets/img/static/fb-black-icon.svg';
class Networks extends Component {
    render() {
        return (

            <div className="networks">
                <div className="container">
                    <h2>Мы в социальных сетях</h2>
                    <div className="social_icons">
                        <a href=""><Vk /></a>
                        <a href=""><Insta /></a>
                        <a href=""><Fb /></a>
                    </div>
                    <p><b>Санкт-Петербург</b></p>
                    <p><b>8 (800) 550-98-50</b></p>
                    <p><b>sales_opt@parisnail.ru</b></p>

                </div>
            </div>

        );
    }
}

Networks.propTypes = {};

export default Networks;
