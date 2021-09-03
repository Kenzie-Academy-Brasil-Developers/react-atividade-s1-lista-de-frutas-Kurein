import './App.css';
import {useState} from "react"

function App() {

  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
   ]);

   function filterRedFruits(){
     setFruits(fruits.filter(element => element.color === "red"))
   }

   const totalPrice = fruits.reduce((acumulador, element) => {
    return acumulador + element.price
   }, 0)

  return (
    <div className="App">

      <h2> Preço total = {totalPrice}</h2>

      <ul>
        {fruits.map(element => <li>{element.name}</li>)}
      </ul>
      <button onClick={filterRedFruits}>Mostrar vermelhas</button>
    </div>
  );
}

export default App;
