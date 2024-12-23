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

function Header() {
  return (
    <header>
      <img src={logoEmsi} className="logo" alt="Emsi logo" style={{ width: '380px', height: '120px' }} />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  )
}

function MainContent() {
  const now = new Date();
  const day = now.toLocaleString('fr-FR', { weekday: 'long' });
  const month = now.toLocaleString('fr-FR', { month: 'long' });
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return (
    <div>
      <p>Bonjour, on est le {day}, {month}, {year} et il est {hours}:{minutes}:{seconds}</p>
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

  const randomItem = getRandomItem(data);

  return (
    <>
      <div>
        <Header></Header>
        <MainContent></MainContent>
        <GradeDetails item={randomItem} />
      </div>
      <Footer></Footer>
    </>
  )
}

export default App