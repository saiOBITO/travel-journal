import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import data from "./data"





function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.title}
            item={item}
        />
    )
})   
  return (
    <div className="App">
       <Navbar />
       <section className="cards-list">
                {cards}
            </section>
    </div>
  );
}

export default App;
