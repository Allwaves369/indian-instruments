import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img src={'/media/imgs/india1.jpg'} alt="instruments"/>
        <h2> {props.instrument.name} </h2>
        <p> Instrument type: {props.instrument.type} </p>
        <ul> Famous Musicians: <li>{props.instrument.famousmusicians}</li></ul>
    </div>
);


