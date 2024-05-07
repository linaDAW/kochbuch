import { Route, Routes } from "react-router-dom";
import Aufgabe from "./components/Aufgabe"
import Ingredients from "./components/Ingredients";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Aufgabe />} />
      <Route path="/ingredients/:id" element={<Ingredients />} />
    </Routes>
  );
}

export default App;
