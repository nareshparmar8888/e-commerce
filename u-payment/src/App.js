import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Components/HomePage";
import Description from "./Components/Description.js";
import CreateProduct from "./Components/CreateProduct";
import { ErrorPage } from "./Components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/description" element={<Description />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
