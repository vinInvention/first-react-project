import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Homer from './Home'; 

function App() {
  return (
    <div className="App">
      <header className="">        
        <Navbar />        
      </header>
      <main className='content'>
        <section >
          <Homer />
        </section>
      </main>
      <footer></footer>

    </div>
  );
}

export default App;
