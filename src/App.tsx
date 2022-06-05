import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/home";
import { Detail } from "./component/detail";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
