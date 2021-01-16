import React from 'react';
import './styles.css';
import contactsData from "./contacts.json";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="information-address info">
                        <h4 className="title">Address</h4>
                        <ul className="contacts">
                            <li>Stockholm, Sweden</li>
                            <li>Hammarby allé 32 lgh 1403</li>
                            <li>120 61 Stockholm</li>
                        </ul>
                    </div>

                    <div className="information-sources info">
                        <h4 className="title">Sources</h4>
                        <ul className="contacts">
                            <li><a href="https://reactjs.org/">React</a></li>
                            <li><a href="https://developer.mozilla.org/">MDN web docs</a></li>
                            <li><a href="https://www.freecodecamp.org/">freeCodeCamp</a></li>
                            <li><a href="https://www.udemy.com/">Udemy</a></li>
                            <li><a href="https://css-tricks.com/">CSS-tricks</a></li>
                        </ul>
                    </div>

                    <div className="information-contacts info">
                        <h4 className="title">Contacts</h4>
                        <ul className="contacts">
                            {contactsData.map((data) => {
                                return (

                                    <li key={data.id}>
                                        <img src={data.img}
                                             alt="social icons"
                                             className="footer-img"
                                        />
                                        <a href={data.path}>
                                            {data.title}
                                        </a>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
