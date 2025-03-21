import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to My Beautiful One-Page Website</h1>
        <p>This is a simple and elegant website built with React and Vite.</p>
      </header>
      <main className="app-main">
        <section className="feature">
          <h2>Feature 1</h2>
          <p>Description of feature 1.</p>
        </section>
        <section className="feature">
          <h2>Feature 2</h2>
          <p>Description of feature 2.</p>
        </section>
        <section className="feature">
          <h2>Feature 3</h2>
          <p>Description of feature 3.</p>
        </section>
      </main>
      <footer className="app-footer">
        <p>Contact us at: info@example.com</p>
      </footer>
    </div>
  );
}

export default App;
