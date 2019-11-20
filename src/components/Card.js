import React from 'react';

const Card = (props) => {
    const handleRemove = () => {
        props.onDelete(props.cardNumber);
    }

    const handleClick = () => {
        if (props.search) {
            props.selectUser(props.cardNumber);
        }
    }

    return (
        <div onClick={handleClick} style={props.search ? {margin: '1em', opacity: 0.5} : {margin: '1em', opacity: 1}}>
            <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
            <div>
                <div style={{ fontWeight: 'bold' }}>{props.name}</div>
                <a href={props.html_url}>Profile</a>
                <br/>
                <a href={props.blog}>{props.blog}</a>
            </div>
            <button style={props.search ? {display: 'none'} : {}} type="button" onClick={handleRemove}>Remove card</button>
        </div>
    );
}

export default Card;