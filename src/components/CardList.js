import React from 'react';
import Card from './Card';

const CardList = (props) => {
    return (
        <div>
            {props.cards.map((card, index) => (
                <Card {...card}
                    key={index}
                    cardNumber={index}
                    onDelete={props.onDelete}
                    selectUser={props.selectUser} />
            ))}
        </div>
    );
}

export default CardList;