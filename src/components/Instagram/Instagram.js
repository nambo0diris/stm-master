import React, {Component} from 'react';
import './instagram.css'
import insta  from '../../assets/img/static/instagram-black-icon.svg';
import insta1 from '../../assets/img/content/instagram.jpg';
import insta2 from '../../assets/img/content/instagram2.jpg';
import insta3 from '../../assets/img/content/instagram3.jpg';
import insta4 from '../../assets/img/content/instagram4.jpg';
import insta5 from '../../assets/img/content/instagram5.jpg';
class Instagram extends Component {
    render() {
        return (
            <div className="instagram">
                <div className="container">
                    <div className="title">
                        <h2>Наш инстаграм</h2>
                        <a href=""><img src={insta} alt="insta"/>@parisnail_stamping</a>
                    </div>
                    <div className="instagram_wrapper">
                        <a href="" className="ins_item"><img src={insta1} alt="insta"/></a>
                        <a href="" className="ins_item"><img src={insta2} alt="insta"/></a>
                        <a href="" className="ins_item"><img src={insta3} alt="insta"/></a>
                        <a href="" className="ins_item"><img src={insta4} alt="insta"/></a>
                        <a href="" className="ins_item"><img src={insta5} alt="insta"/></a>

                        {/*<div className="ins_item">*/}
                        {/*    <a href=""><img src={insta2} alt="insta"/></a>*/}
                        {/*</div>*/}
                        {/*<div className="ins_item">*/}
                        {/*    <a href=""><img src={insta3} alt="insta"/></a>*/}
                        {/*</div>*/}
                        {/*<div className="ins_item">*/}
                        {/*    <a href=""><img src={insta4} alt="insta"/></a>*/}
                        {/*</div>*/}
                        {/*<div className="ins_item">*/}
                        {/*    <a href=""><img src={insta5} alt="insta"/></a>*/}
                        {/*</div>*/}
                        {/*<div className="ins_item">*/}
                        {/*    <a href=""><img src={insta5} alt="insta"/></a>*/}
                        {/*</div>*/}
                        {/*<div className="categorie_item">*/}
                        {/*    <a href="">photo</a>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>

        );
    }
}

Instagram.propTypes = {};

export default Instagram;
