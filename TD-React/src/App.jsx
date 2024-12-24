/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logoEmsi from '../public/logo.png'
import viteLogo from '/vite.svg'
import './App.css'
import data from '../../data.json'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

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
function TableData({array}){
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell>Course</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
          {array.map((item) => (
            <TableRow
              key={item.course}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item">
                {item.course}
              </TableCell>
              <TableCell align="right">{item.student.firstname}</TableCell>
              <TableCell align="right">{item.student.lastname}</TableCell>
              <TableCell align="right">{item.date}</TableCell>
              <TableCell align="right">{item.grade}</TableCell>
            </TableRow>
          ))}
         
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
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
      <TableData array={data}/>
    </div>
    <Footer />
  </>
  )
}

export default App