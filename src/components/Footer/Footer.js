import React, {Component} from 'react';
import './footer.css';
import gpay from '../../assets/img/static/google-play.png';
import apppay from '../../assets/img/static/applepay.png';
import visa from '../../assets/img/static/visa.png';
import master from '../../assets/img/static/master.png';
import google from '../../assets/img/static/google-pay.png';
import paykeeper from '../../assets/img/static/paykeep.png';
import apple from '../../assets/img/static/apple.png';
import vk from '../../assets/img/static/vk-social-logotype.svg'
import insta from '../../assets/img/static/instagram.svg'
import youtube from '../../assets/img/static/youtube.svg'
import subs from '../../assets/img/static/mail.svg'
import eye from '../../assets/img/static/Group.svg'
import sitemap from '../../assets/img/static/site-map.svg'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-content_left">
                            <div className="footer-col xs-show">
                                <div className="footer-social">
                                    <p>ParisNail в соцсетях</p>
                                    <a href=""><img src={vk} alt=""/></a>
                                    <a href=""><img src={insta} alt=""/></a>
                                    <a href=""><img src={youtube} alt=""/></a>
                                </div>
                            </div>
                            <div className="footer-col">
                                <ul>
                                    <li>Бонусная программа</li>
                                    <li>Помощь</li>
                                    <li>Доставка и оплата</li>
                                    <li>Как сделать заказ</li>
                                    <li>Возврат</li>
                                    <li>Политика конфиденциальности</li>
                                    <li>Ограничения по скидкам</li>
                                    <li>Beauty-коины</li>
                                    <li>Отзывы о компании</li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <ul>
                                    <li>О компании</li>
                                    <li>Блог</li>
                                    <li>Вакансии</li>
                                    <li>Условия оплаты банковской картой</li>
                                    <li>Условия публичной оферты</li>
                                    <li>Сотрудничество</li>
                                    <li>Представители</li>
                                    <li>Борьба с мошенниками</li>
                                    <li>Дипломы и сертификаты</li>
                                    <li>Биржа труда</li>
                                </ul>
                            </div>
                            <div className="footer-col  xs-hidden">
                                <ul>
                                    <li>Мобильное приложение</li>
                                    <li className="download-app">
                                        <a href=""><img src={gpay} alt=""/></a>
                                        <a href=""><img src={apppay} alt=""/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-content_right">
                            <div className="footer-col">
                                <div className="footer-social xs-hidden">
                                    <p>ParisNail в соцсетях</p>
                                    <a href=""><img src={vk} alt=""/></a>
                                    <a href=""><img src={insta} alt=""/></a>
                                    <a href=""><img src={youtube} alt=""/></a>
                                </div>
                                <div className="pay-method">
                                    <p>Способы оплаты</p>
                                    <ul className="group-pay">
                                        <li className="logo-pay">
                                            <img src={visa} alt=""/>
                                        </li>
                                        <li className="logo-pay">
                                            <img src={master} alt=""/>
                                        </li>

                                        <li className="logo-pay">
                                            <img src={paykeeper} alt=""/>
                                        </li>

                                        <li className="logo-pay">
                                            <img src={apple} alt=""/>
                                        </li>
                                        <li className="logo-pay">
                                            <img src={google} alt=""/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="other-btns">
                                    <ul className="footer-subscribe">
                                        <li className="xs-show">Мобильное приложение</li>
                                        <li className="download-app xs-show">
                                            <a href=""><img src={gpay} alt=""/></a>
                                            <a href=""><img src={apppay} alt=""/></a>
                                        </li>
                                        <li><a href=""><img src={subs} alt=""/>Подписка на новости</a></li>
                                        <li><a href=""><img src={eye} alt=""/>Версия для слабовидящих</a></li>
                                        <li><a href=""><img src={sitemap} alt=""/>Карта сайта</a></li>
                                    </ul>
                                </div>
                                <a className="feedback-btn">Оставить обратную связь</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright"/>
                </div>
                <script src="../../assets/js/jquery-3.6.0.js"/>
                <script src="../../assets/js/owl.carousel.js"/>
            </div>
        );
    }
}

Footer.propTypes = {};

export default Footer;
