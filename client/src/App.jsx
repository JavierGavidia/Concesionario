function App() {

  return (
    <>
      <header className="header">
        <div className="container">
          <h2>Concesionario</h2>
          <button className="btn-custom">Contacto</button>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1>Encuentra tu coche ideal</h1>
        </section>

        <section className="cars">
          <div className="card-car">
            <h3>BMW Serie 3</h3>
            <p>30.000€</p>
          </div>

          <div className="card-car">
            <h3>Audi A4</h3>
            <p>28.000€</p>
          </div>

          <div className="card-car">
            <h3>Porche Cayenne</h3>
            <p>48.000€</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Concesionario</p>
      </footer>
    </>
  );
}

export default App
