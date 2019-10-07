import React, { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';

function App() {
	const [cards, setCards] = useState([]);

	const addNewCard = (cardInfo) => {
		setCards([...cards, cardInfo]);
	}

	const removeCard = (card) => {
		cards.splice(card, 1);
		setCards([...cards]);
	}

	return (
		<div>
			<Form onSubmit={addNewCard} />
			<CardList cards={cards} onDelete={removeCard} />
		</div>
	);
}

export default App;
