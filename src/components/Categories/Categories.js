import React, {Component} from 'react';
import './categories.css';
import img1 from '../../assets/img/content/categories6.jpg';
import img2 from '../../assets/img/content/categories7.jpg';
import img3 from '../../assets/img/content/categories8.jpg';
import img4 from '../../assets/img/content/categories9.jpg';
import img5 from '../../assets/img/content/categories10.jpg';
class Categories extends Component {
    render() {
        return (
            <div className="categories">
                <div className="container">
                    <div className="title">
                        <h2>Наши категории</h2>
                    </div>
                    <div className="categories_wrapper">
                        <div className="categorie_item">
                            <img src={img1} alt=""/>
                            <a className="categorie_btn" href="">Оборудование</a>
                        </div><div className="categorie_item">
                            <img src={img2} alt=""/>
                            <a className="categorie_btn" href="">Оборудование</a>
                        </div><div className="categorie_item">
                            <img src={img3} alt=""/>
                            <a className="categorie_btn" href="">Оборудование</a>
                        </div><div className="categorie_item">
                            <img src={img4} alt=""/>
                            <a className="categorie_btn" href="">Оборудование</a>
                        </div><div className="categorie_item">
                            <img src={img5} alt=""/>
                            <a className="categorie_btn" href="">Оборудование</a>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

Categories.propTypes = {};

export default Categories;
