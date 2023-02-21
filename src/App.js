import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const someCondition = false;
  const shoppingListItems = ['Bread', 'Milk', 'Eggs'];

  return (
    <div className="App">
      <header className="App-header">
        <p>New text here {2 + 2}</p>
        {someCondition && (<p>The condition was true</p>)}
        {someCondition ? <p>The condition was true</p> : <p>The condition was false</p>}

        <Counter />
        <Counter />

        <ol>
          <li>Bread</li>
          <li>Milk</li>
          <li>Eggs</li>
        </ol>

        <ol>
          {shoppingListItems.map(item => <li key={item}>{item}</li>)}
        </ol>

        <ShoppingList items={shoppingListItems} />
        <ShoppingList items={['Oreos', 'Gummy Worms']} />
      </header>
    </div>
  );
}

function ShoppingList(props) {
  return (
    <>
      <h2>My shopping list</h2>
      <ol>
        {props.items.map(item => <li key={item}>{item}</li>)}
      </ol>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count => count + 1);
  }

  return (
    <>
      <h2>My Counter</h2>
      <p>Count: {count}</p>
      <button type="button" disabled={count >= 10} onClick={incrementCounter}>Increment Counter</button>
    </>
  )
}

export default App;
