import React from 'react';
import './Person.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faUser, faCalendar, faMoneyCheckAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    const person = props.person;
    const { name, balance, picture, age, gender, address } = person;
    const arrow = <FontAwesomeIcon icon={faArrowAltCircleRight} />
    const genderIcon = <FontAwesomeIcon icon={faUser} />
    const ageIcon = <FontAwesomeIcon icon={faCalendar} />
    const moneyIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />
    const addressIcon = <FontAwesomeIcon icon={faAddressCard} />
    return (
        <div className="person">

            <img src={picture} alt="" />
            <h2>{name}</h2>
            <div className="info">
                <br />
                <h4>{genderIcon}</h4><span>{gender}</span><br />
                <h4>{ageIcon}</h4><span>{age} years</span><br />
                <h4>{moneyIcon}</h4><span>{balance}</span><br />
                <h4>{addressIcon}</h4><span>{address}</span><br />
            </div>
            <button onClick={() => props.handleHire(person)} id="hire">Hire Me {arrow}</button>
        </div>
    );
};

export default Person;