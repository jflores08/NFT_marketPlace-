// Import react components
import { Switch, Route, } from "react-router-dom";

// Import css
// import "./App.css";

// Import local components
// import { ResponsiveTopNavigation } from "./components/ResponsiveTopNavigation";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <ResponsiveTopNavigation /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
