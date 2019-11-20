import React, { useState } from 'react';
import Form from './components/Form';
import CardList from './components/CardList';
import './App.css';

function App() {
	const [cards, setCards] = useState([]);

	const selectSearchCard = (cardIndex) => {
		const card = cards[cardIndex];
		card.search = false;
		setCards(cards.filter(card => !card.search));
	}

	const addHoverCard = (cardInfo) => {
		cardInfo.search = true;
		setCards([...cards, cardInfo]);
	}

	const addNewCard = (cardInfo) => {
		setCards([...cards.filter(card => !card.search), cardInfo]);
	}

	const removeCard = (card) => {
		cards.splice(card, 1);
		setCards([...cards]);
	}

	return (
		<div>
			<Form onSubmit={addNewCard} onSearch={addHoverCard} />
			<CardList cards={cards} onDelete={removeCard} selectUser={selectSearchCard} />
		</div>
	);
}

export default App;
