import './card.css'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const { item } = props;

    return (
        <Link to={`/item/${item.id}`}>
            <div className="card" >
                <div className="image">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="matn">
                    <h1>{item.title}</h1>
                    <p>تومان {item.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;