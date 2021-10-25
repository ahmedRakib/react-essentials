import './App.css';
import image from './img.jpg'

//const dishObjects = [{ id : 1, name : "Biriyani" }, { id : 1, name : "Pulao" }, { id : 1, name : "Burger" }]

//other way of creating dish objects
const dishes = ["Biriyani", "Pulao", "Burger"]
const dishObjects = dishes.map((data, i) => ({ id: i, name: data }));

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
      <img src={image} alt="Hochschule fulda" height = "390" width = "1380"></img>
    </header>
  )
}

console.log(dishObjects);

function Main(props) {
  return(
    <section>
      <p>Welcome to my Kitchen. Let the game begin</p>
      <ul style={ { textAlign:"left" } }>
        {props.dishes.map((data) => <li key={data.id}>{data.name}</li> )}
      </ul>
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
      <Main dishes = {dishObjects}/>
      <Footer date={new Date().getFullYear()} />
    </div>
  );
}

export default App;
