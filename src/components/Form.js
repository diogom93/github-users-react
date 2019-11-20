import  React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const [username, setUsername] = useState('');

    const searchUser = (user) => {
        return axios.get(`https://api.github.com/users/${user}`);
    }

    const handleChange = (user) => {
        setUsername(user);

        searchUser(user).then(response => {
            props.onSearch(response.data);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        searchUser(event.target.value).then(response => {
            props.onSubmit(response.data);
            setUsername('');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={event => handleChange(event.target.value)}
                placeholder="GitHub username"
                required />
            <button type="submit">Add card</button>
        </form>
    );
}

export default Form;