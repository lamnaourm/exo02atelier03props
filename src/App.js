import './App.css';
import Liste from './components/Liste';

const listeElements = [
  { id: 1, text: "Faire les courses", completed : true },
   { id: 2, text: "Réviser pour l'examen" , completed : false },
   { id: 3, text: "Aller chez le médecin", completed : true },
   { id: 4, text: "Aller chez le dentiste", completed : false },
   { id: 5, text: "Reviser mes cours", completed : true },
  ];
function App() {
  return (
    <div className="container">
      <Liste elements={listeElements} />
    </div>
  );
}

export default App;
