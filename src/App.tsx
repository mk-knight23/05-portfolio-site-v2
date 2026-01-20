import React from 'react';
import Auth from './Auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To React Js Course</h1>
        <ul>
          <li>Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
          <li>Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application.</li>
          <li>Learn Once, Write Anywhere: You can develop new features in React without rewriting existing code.</li>
          <li>JSX: JSX is a syntax extension that makes it easier to write and add HTML in React.</li>
          <li>Virtual DOM: React creates an in-memory data structure cache, computes the changes, and efficiently updates the browser’s displayed DOM.</li>
          <li>React Hooks: Hooks let you use state and other React features without writing a class.</li>
        </ul>
        <Auth />
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>Name: Kazi</p>
          <p>Place: Latur</p>
          <p>Email: Kazi@gmail.com</p>
          <p>Contact: 876534567</p>
          <form>
            <h3>Feedback</h3>
            <textarea placeholder="Your feedback" rows={4} cols={50} />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
