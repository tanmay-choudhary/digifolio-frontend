import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
        </Routes>
      </Router>
      {/* <Registration />
      <Login /> */}
    </div>
  );
}

export default App;
