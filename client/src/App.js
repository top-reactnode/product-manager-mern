import { Router } from "@reach/router";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/product/:id" />
        <Update path="/product/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
