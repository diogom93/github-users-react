import React from 'react';

const Card = (props) => {
    return (
        <a href={props.html_url} style={{margin: '1em'}}>
            <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
            <div>
                <div style={{ fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.blog}</div>
            </div>
        </a>
    );
}

export default Card;