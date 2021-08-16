import React, {Component} from 'react';
import './crumbs.css'
class Crumbs extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <nav className="breadcrumb">
                        <ul>
                            <li><a href="">ParisNail</a></li>
                            <li><a href="">О компании</a></li>
                            <li><a href="" className="page">Доставка</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

Crumbs.propTypes = {};

export default Crumbs;