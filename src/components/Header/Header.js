import React, {Component} from 'react';
import './header.css';
import logo from '../../assets/img/static/main-logo.svg';
import search from '../../assets/img/content/search.svg';
import favorites from '../../assets/img/content/heart-black.svg';
import cart from '../../assets/img/static/cart.svg';
import auth from '../../assets/img/static/man.svg';
import ShopMenu from "./shop-menu/ShopMenu";
import SchoolMenu from "./school-menu/SchoolMenu";
class Header extends Component {
    render() {
        return (
            <header>
                <div className="h-top">
                    <div className="container">
                        <div className="header-directions">
                            <button className="header-tab-btn shop">Магазин</button>
                            <button className="header-tab-btn school active">Школа</button>
                            <button className="header-tab-btn wholesale">Опт</button>
                        </div>
                    </div>
                </div>
                <div className="h-middle">
                    <div className="container">
                        <div className="header-info">
                            <div className="header-logo">
                                <img src={logo} alt=""/>
                                <div className="city-select">
                                    Санкт-Петербург
                                </div>
                            </div>
                            <div className="header-contacts">
                                <p className="sup-phone">Ежедневно 7:00-22:00 (мск)</p>
                                <p className="phone">8(800)550-98-50</p>
                                <p className="sub-phone"><span>Заказ звонка</span> или <span>чат</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-nav">
                    <div className="container">
                        <ShopMenu />
                        {/*<SchoolMenu />*/}
                        <div className="dropdown">
                            <button className="dropbtn">Еще</button>
                            <div className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-dash">
                    <div className="container">
                        <div className="left-side">
                            <div className="burger">
                                <div className="burger-elements-wrapper">
                                    <span className="burger-elements-wrapper_top"></span>
                                    <span className="burger-elements-wrapper_middle"></span>
                                    <span className="burger-elements-wrapper_bottom"></span>
                                </div>
                                <span>Товары</span>
                            </div>
                            <button className="search-input-btn_outer"><img src={search} alt=""/></button>
                            <div className="search-input-wrapper">
                                <input type="text" value="Найти" className="search-input"/>
                                <button className="search-input-btn"><img src={search} alt=""/></button>
                            </div>

                        </div>
                        <div className="right-side">
                            <div className="right-side_favorites"><a href=""><img src={favorites} alt=""/><span>Избранное</span></a></div>
                            <div className="right-side_auth"><a href=""><img src={auth} alt=""/><span>Авторизация</span></a></div>
                            <div className="right-side_cart"><a href=""><img src={cart} alt=""/><span>Корзина</span> <span>(666)</span></a></div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {};

export default Header;
