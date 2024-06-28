import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import SelectAge from "./pages/SelectAge/SelectAge";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gift-finder" element={<SelectAge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
