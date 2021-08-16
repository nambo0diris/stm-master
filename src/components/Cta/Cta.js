import React, {Component} from 'react';
import './cta.css';
import background from '../../assets/img/static/cta-background.jpg'
class Cta extends Component {
    render() {
        return (

                <div className="cta" style={{backgroundImage:`url(${background})`}}>
                    <div className="container">

                    <h2>Продукцию ParisNail уже можно приобрести у наших партнеров</h2>
                    <div className="btn_wrapper">
                        <a className="offer_btn" href="">Посмотреть список партнеров</a>
                    </div>

                </div>
            </div>
        );
    }
}

Cta.propTypes = {};

export default Cta;
