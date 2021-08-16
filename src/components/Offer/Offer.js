import React, {Component} from 'react';
import './offer.css'
class Offer extends Component {
    render() {
        return (

                <div className="offer">
                    <div className="container">
                    <h2>Предложение для крупных клинтов и торговых представителей</h2>
                    <div className="offer_items_wrapper">
                        <div className="offer_item">
                            <div className="offer_item_title">Комфортные условия сотрудничества</div>
                            <hr className="divider"/>
                            <div className="offer_item_descr">
                                <p><b>скидка от 10%</b>
                                    (при заказе от 10 000 руб.) <b>до 50%</b> (при заказе от 250 000 руб.), возможность обмена
                                    товаров и рассрочка.
                                </p>
                            </div>
                        </div>
                        <div className="offer_item">
                            <div className="offer_item_title">Профессиональное сопровождение партнера</div>
                            <hr className="divider"/>
                            <div className="offer_item_descr">
                                <p>у каждого партнера есть <b>персональный менеджер</b>, который оповещает о выгодных предложениях
                                    и консультирует по ассортименту.
                                </p>
                            </div>
                        </div>
                        <div className="offer_item">
                            <div className="offer_item_title">Обновление и расширение ассортимента</div>
                            <hr className="divider"/>
                            <div className="offer_item_descr">
                                <p>линейка товаров ParisNail в ближайший год существенно расширится – <b>от гель-лаков
                                    до оборудования</b>.
                                </p>
                            </div>
                        </div>

                    </div>
                    <hr className="divider"/>
                    <div className="offer_cta">
                        <h2>Узнать условия оптовых закупок</h2>
                        <div className="btn_wrapper">
                            <a className="offer_btn" href="">Подробнее</a>
                            <a className="offer_btn" href="">Стать представителем ParisNail</a>
                        </div>

                    </div>


                </div>

            </div>

        );
    }
}

Offer.propTypes = {};

export default Offer;