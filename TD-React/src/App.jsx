/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logoEmsi from '../public/logo.png'
import viteLogo from '/vite.svg'
import './App.css'
import data from '../../data.json'

function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
// function Menu() {
//   const handleClick = (text) => {
//     alert(`Vous avez cliqué sur : ${text}`);
//   };

//   return (
//     <nav className="menu">
//       <ul>
//         <li onClick={() => handleClick('Notes')}>Notes</li>
//         <li onClick={() => handleClick('Etudiants')}>Etudiants</li>
//         <li onClick={() => handleClick('Matières')}>Matières</li>
//         <li onClick={() => handleClick('A propos')}>A propos</li>
//       </ul>
//     </nav>
//   );
// }

function Menu({ activeItem, onClick }) {
  const MenuItems = ['Notes', 'Etudiants', 'Matières', 'A propos'];
  return (
    <nav className="menu">
      <ul>
        {MenuItems.map((item) => (
          <li
            key={item}
            className={item === activeItem ? 'active' : null}
            onClick={() => {
              alert(`You clicked on ${item}`);
              onClick(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Header({ activeItem, onClick }) {
  return (
    <header>
      <Menu activeItem={activeItem} onClick={onClick} />
      <img src={logoEmsi} className="logo" alt="Emsi logo" style={{ width: '380px', height: '120px' }} />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  )
}

function MainContent() {
  const [date, setDate] = useState(new Date()); // Date fixe jusqu'à mise à jour

  const updateDate = () => {
    setDate(new Date());
  };

  const day = date.toLocaleString('fr-FR', { weekday: 'long' });
  const month = date.toLocaleString('fr-FR', { month: 'long' });
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return (
    <div>
      <p>Bonjour, on est le {day}, {month}, {year} et il est {hours}:{minutes}:{seconds}</p>
      <button onClick={updateDate}>Mettre à jour la date et heure</button>
     
    </div>
  );
}

function GradeDetails({ item }) {
  return (
    <div className="grade-details">
      <h3>{item.course}</h3>
      <p>Étudiant: {item.student.firstname} {item.student.lastname}</p>
      <p>Date: {item.date}</p>
      <p>Note: {item.grade}</p>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} - Dounia.Mzioued, Tous droits réservés.</p>
    </footer>
  );
}

function App() {

  const [activeItem, setActiveItem] = useState('Notes');
  const [randomItem, setRandomItem] = useState(getRandomItem(data));

  const updateRandomItem = () => {
    setRandomItem(getRandomItem(data));
  };

  return (
    <>
    <div>
      <Header activeItem={activeItem} onClick={setActiveItem} />
      <MainContent activeItem={activeItem} />
      <GradeDetails item={randomItem} />
      <button onClick={updateRandomItem}>Changer élément aléatoire</button>
    </div>
    <Footer />
  </>
  )
}

export default App