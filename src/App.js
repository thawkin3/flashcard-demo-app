import { useState } from 'react'
import './App.css';

const cards = [
  { front: 'Hello', back: 'Bonjour' },
  { front: 'Good evening', back: 'Bonsoir' },
  { front: 'Hi', back: 'Salut' },
  { front: 'Goodbye', back: 'Au revoir' },
  { front: 'Please', back: "S'il vous plaît" },
  { front: 'Thank you', back: 'Merci' },
  { front: "You're welcome", back: 'De rien' },
  { front: 'See you tomorrow', back: 'A demain' },
  { front: "Let's go!", back: 'Allons-y!' },
  { front: 'How are you?', back: 'Comment allez-vous?' },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [sideOfCard, setSideOfCard] = useState('front');

  const navigateToPreviousCard = () => {
    setCurrentCardIndex(currentCardIndex => currentCardIndex - 1);
  }

  const navigateToNextCard = () => {
    setCurrentCardIndex(currentCardIndex => currentCardIndex + 1);
  }

  const flipCard = () => {
    setSideOfCard(sideOfCard => sideOfCard === 'front' ? 'back' : 'front');
  }

  return (
    <main className="app">
      <h1>Flashcards Demo App</h1>
      <div className="flashcardsContainer">
        <button
          type="button"
          className="flashcardNavigationButton"
          onClick={navigateToPreviousCard}
          disabled={currentCardIndex === 0}
          aria-label="Previous"
        >
          {'<<'}
        </button>
        <button
          type="button"
          className="card"
          onClick={flipCard}
        >
          {cards[currentCardIndex][sideOfCard]}
        </button>
        <button
          type="button"
          className="flashcardNavigationButton"
          onClick={navigateToNextCard}
          disabled={currentCardIndex === cards.length - 1}
          aria-label="Next"
        >
          {'>>'}
        </button>
      </div>
    </main>
  );
}

export default App;
