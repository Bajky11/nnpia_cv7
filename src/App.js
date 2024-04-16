import ReactConcept from "./ReactConcept";
import { initData } from "./initData";

function App() {
  return (
    <div className="app">
      {initData.map((concept, index) => (
        <ReactConcept key={index} title={concept.title} description={concept.description} />
      ))}
    </div>
  );
}

export default App;
