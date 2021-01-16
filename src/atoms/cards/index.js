import React from 'react';
import './styles.css';
import cards from './cardsData.json';
import useModal from "../modalToggle";
import ModalWindow from "../../molecules/modalWindow";

function Cards() {
    const {isShow, toggle} = useModal();

    return (
        <div>
            <ModalWindow
                isShow={isShow}
                toggle={toggle}
            />
        <div className="main">
            {cards.map((item, index) =>
                <div className="products" key={index}>
                    <h3 className="product-title">{item.title}</h3>
                    <img
                        src={item.img}
                        className="p-image"
                        alt=""
                    />
                    <button
                        className="about"
                        onClick={toggle}
                    >
                        {item.direction}
                    </button>
                </div>
            )}
        </div>
        </div>
    )
}

export default Cards;
