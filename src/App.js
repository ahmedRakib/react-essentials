import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Arena</h1>
    </header>
  )
}

function Main() {
  return(
    <section>
      <p>Welcome to my world. Let the game begin</p>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright @ Rakib {props.date}</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Rakib" />
      <Main />
      <Footer date={new Date().getFullYear()} />
    </div>
  );
}

export default App;
