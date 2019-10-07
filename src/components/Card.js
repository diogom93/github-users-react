import React from 'react';

const Card = (props) => {
    const handleRemove = () => {
        props.onDelete(props.cardNumber);
    }

    return (
        <div style={{margin: '1em'}}>
            <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
            <div>
                <div style={{ fontWeight: 'bold' }}>{props.name}</div>
                <a href={props.html_url}>Profile</a>
                <br/>
                <a href={props.blog}>{props.blog}</a>
            </div>
            <button type="button" onClick={handleRemove}>Remove card</button>
        </div>
    );
}

export default Card;