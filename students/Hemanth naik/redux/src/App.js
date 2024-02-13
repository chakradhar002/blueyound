import "./App.css";
import profile from "./components/profile";
import Login from "./components/Login";
import changecolor from "./components/changecolor";

function App() {
  return (
    <div className="App">
      <profile />
      <Login />
      <changecolor />
    </div>
  );
}

export default App;
