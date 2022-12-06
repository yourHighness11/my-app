import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/create/Create";
import Delete from "./components/delete/Delete";
import CollapsibleExample from "./components/navbar/Navbar";
import Read from "./components/read/Read";
import Update from "./components/update/Update";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollapsibleExample />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/update/:pathId" element={<Update />} />
        <Route exact path="/delete/:pathId" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
