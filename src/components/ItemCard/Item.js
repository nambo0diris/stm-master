import React, {Component} from 'react';
import './item.css';
import like1 from '../../assets/img/static/like1.png'
import item from '../../assets/img/content/item2.jpg'
import top from '../../assets/img/static/top.png'
class Item extends Component {
    render() {
        return (
            <div className="item">
                <div className="item-top">
                    <div className="itemCard-photo">
                        <img src={item} alt=""/>
                    </div>
                    <div className="itemCard-descr">Профессиональная лампа UV/LED Pro 6 48 Вт белая ParisNail</div>
                    <div className="itemCard-price"><span className="leftSide">Цена</span><span className="rightSide">9 900 ₽</span></div>
                    <div className="btn_wrap">
                        <button className="cart-btn">В корзину</button>
                    </div>

                    <div className="itemCardTop">
                        <div className="top_new">
                            <span>NEW!</span>
                        </div>
                        <div className="top_top">
                            <img src={top} alt=""/>
                            <span>ХИТ!</span>
                        </div>
                        <div className="top_like">
                            <img src={like1} alt="like"/>
                        </div>
                    </div>
                </div>
                <div className="item-bottom">
                    <div className="itemCard-photo">
                        <img src={item} alt=""/>
                    </div>
                    <div className="itemCard-descr">Профессиональная лампа UV/LED Pro 6 48 Вт белая ParisNail</div>
                    <div className="itemCard-price"><span className="leftSide">Цена</span><span className="rightSide">9 900 ₽</span></div>
                    <div className="btn_wrap">
                        <button className="cart-btn">В корзину</button>
                    </div>

                    <div className="itemCardTop">
                        <div className="top_new">
                            <span>NEW!</span>
                        </div>
                        <div className="top_top">
                            <img src={top} alt=""/>
                            <span>ХИТ!</span>
                        </div>
                        <div className="top_like">
                            <img src={like1} alt="like"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

Item.propTypes = {};

export default Item;
