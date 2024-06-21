import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <h1>UTSAV PATEL</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section id="home" className="section">
      <h2>Welcome to My Portfolio</h2>
      <p>Hello! I'm Utsav Patel, a passionate  Web Developer and also knowledge about Antenna Design suing HFSS based in Gandhinager. I specialize in creating dynamic and beautiful web applications. I have a deep love for coding, design, and problem-solving, and I'm always looking for new challenges and opportunities to learn and grow.</p>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>With a degree in Electronics and Communication, I have developed a strong foundation in both hardware and software domains. Over the years, I discovered my passion for web development and have honed my skills in creating responsive, user-friendly websites and applications.</p>
      <p>I am proficient in frontend technologies like HTML, CSS, and JavaScript, as well as frameworks like ReactJS. Additionally, I have experience with backend development using Node.js and database management with MongoDB.</p>
      <p>When I'm not coding, you can find me exploring new technologies, working on personal projects, or enjoying hobbies like hiking and reading. I believe in continuous learning and am always excited to take on new projects that push my boundaries.</p> 
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <p>Description of your project. <a href="#">Link to project</a></p>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>Description of your project. <a href="#">Link to project</a></p>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul>
         <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>Git & GitHub</li>
        <li>Xcode</li>
        <li>Swift</li>
        <li>Ansys Softwere</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>You can reach me at: <a href="patelutsav3732@gmail.com">patelutsav3732@gmail.com</a></p>
      <p>My X handle <a href="https://x.com/11UtsavPatel">11UtsavPatel</a></p>
    </section>
  );
}

export default App;
