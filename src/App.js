import React, { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';

function App() {
	const [cards, setCards] = useState([]);

	const addNewCard = (cardInfo) => {
		setCards(cards.concat(cardInfo));
	}

	return (
		<div>
			<Form onSubmit={addNewCard} />
			<CardList cards={cards} />
		</div>
	);
}

export default App;
