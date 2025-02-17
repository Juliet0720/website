import { Route, Routes } from 'react-router-dom';
import './App.css'
import Hero from '/src/components/Hero'

function App() {
  /* const [count, setCount] = useState(0);
  let name = "Juliet Icawalo"; */
  return (
    
      <div>
        <Routes>
          <Route path='/' element={<Hero/>} />
        </Routes>
      </div>
    
  );
}

export default App;


/*
      <header className='header'>
        <h1 className='title'>My Online Portfolio</h1>
        <nav>
          <ul>
            <li> <a href=''>About Me</a></li>
            <li> <a href=''>Projects</a></li>
            <li> <a href=''>Contact</a></li>
          </ul>
        </nav>
        <section className='sec_name'>
        <h2 className='name'>{name}</h2>
        </section>
      
       
      </header>
      <main>
        <section className='about'>
          <h2>About Me</h2>
          <p>
            Building web applications using modern technologies like React, JavaScript, HTML, and
            CSS.
          </p>
        </section>
        <section className='project'>
          <h2>My Projects</h2>
          <ul>
            <li>
              <strong>Project 1:</strong> E-commerce Website - SupplyEase
              <p>An online store with a shopping cart and payment gateway.</p>
            </li>
           
          </ul>
        </section>
        <section className='contact'>
          <h2>Contact</h2>
          <p>Email: julieticawalo07@gmail.com</p>
          <p>Phone: 0938 117 5740</p>
        </section>
      </main>
      <footer className='footer'>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer> */

