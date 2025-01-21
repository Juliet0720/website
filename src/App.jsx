import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  let name = "Juliet Icawalo"
  return (
    <>
      <header>
        <h1>My Online Portfolio</h1>
        <h2>{name}</h2>
        <nav>
          <ul>
            <li> <a href=''>About Me</a></li>
            <li> <a href=''>Projects</a></li>
            <li> <a href=''>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Building web applications using modern technologies like React, JavaScript, HTML, and
            CSS.
          </p>
        </section>
        <section>
          <h2>My Projects</h2>
          <ul>
            <li>
              <strong>Project 1:</strong> E-commerce Website - SupplyEase
              <p>An online store with a shopping cart and payment gateway.</p>
            </li>
           
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: julieticawalo07@gmail.com</p>
          <p>Phone: 0938 117 5740</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
