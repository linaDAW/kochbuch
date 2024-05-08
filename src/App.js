import { Route, Routes } from "react-router-dom";
import Aufgabe from "./components/Aufgabe"
import Ingredients from "./components/Ingredients";
import Foodlist from "./components/Foodlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Aufgabe />} />
      <Route path="/ingredients/:id" element={<Ingredients />} />
      <Route path="/foodlist/:category?" element={<Foodlist />} />
    </Routes>
  );
}

export default App;
