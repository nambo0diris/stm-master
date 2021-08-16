import React, {Component} from 'react';
import './needs.css';
class Needs extends Component {
    render() {
        return (
            <div className="needs">
                <div className="container">
                    <h2>Мы разработали уникальные технологии, по которым создали товары, удовлетворяющие все
                        потребности:</h2>
                    <div className="needs_items_wrapper">
                        <div className="needs_item">
                            <div className="needs_items__numb">1</div>
                            <div className="needs_items__text">
                                <div className="needs_item_title">Доступная стоимость</div>
                                <div className="needs_item_descr">Выгодные цены на рынке и бонусы для клиентов и партнеров
                                </div>
                            </div>
                        </div>
                        <div className="needs_item">
                            <div className="needs_items__numb">2</div>
                            <div className="needs_items__text">
                                <div className="needs_item_title">Комфорт в использовании</div>
                                <div className="needs_item_descr">Удобные тюбики, подробные инструкции, большой объем,
                                    стильная упаковка и др.
                                </div>
                            </div>
                        </div>
                        <div className="needs_item">
                            <div className="needs_items__numb">3</div>
                            <div className="needs_items__text">
                                <div className="needs_item_title">Гарантия</div>
                                <div className="needs_item_descr">Удобные тюбики, подробные инструкции, большой объем,
                                    стильная упаковка и др.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Needs.propTypes = {};

export default Needs;