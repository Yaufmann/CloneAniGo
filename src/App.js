import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router";
import NavBar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Router/>
    </BrowserRouter>
  );
}

export default App;
