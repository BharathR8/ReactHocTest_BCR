import "./App.css";
import AuthorizedView from "./Components/AuthorizedView";
import UnauthorizedView from "./Components/UnauthorizedView";

function App() {
  return (
    <div className="App">
      <AuthorizedView />
      <UnauthorizedView />
    </div>
  );
}

export default App;
