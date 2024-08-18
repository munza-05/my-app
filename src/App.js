  
  import Item from './components/item';
  import Cart from './components/Cart';
import './App.css';

function App() {
  
  return (
   <div className="App" > 
   <Item name="Laptop" price={500}/>
   <Item name="Watch" price={100}/>
   <Item name="mobile" price={300}/>
   <Cart/>
   </div>
  );
}

export default App;
