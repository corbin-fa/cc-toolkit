import logo from "../logo.svg";
import "../App.css";
import ToolBar from "../Components/ToolBar.js";

function Home() {
    return (
        <div className="App">
            <h1>Welcome to CC Toolkit</h1>
            <h2>Select a Tool Below</h2>
            <ToolBar />
        </div>
  );
}

export default Home;