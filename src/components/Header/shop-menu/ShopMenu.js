import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShopMenu extends Component {
    render() {
        return (
            <ul className="horizontal-menu shop-menu">
                <li><a href="" className="horizontal-menu-link active">Доставка</a></li>
                <li><a href="" className="horizontal-menu-link">Магазины</a></li>
                <li><a href="" className="horizontal-menu-link">Акции</a></li>
                <li><a href="" className="horizontal-menu-link">Распродажа</a></li>
                <li><a href="" className="horizontal-menu-link">О комании</a></li>
                <li><a href="" className="horizontal-menu-link">Контакты</a></li>
                <li><a href="" className="horizontal-menu-link">Товары ParisNail</a></li>
            </ul>
        );
    }
}

ShopMenu.propTypes = {};

export default ShopMenu;