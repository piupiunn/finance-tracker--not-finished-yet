import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";

import List from "./components/list/List";
import Create from "./components/create/Create";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />

          <Route path={"/list"} element={<List />} />

          <Route path={"/create"} element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
