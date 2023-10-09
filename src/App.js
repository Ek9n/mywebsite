import Intro from "./containers/intro/intro";
import Projects from "./containers/projects/projects";
import Closing from "./containers/closing/closing";

function App() {
  return (
    <div className="App">
      <Intro />
      <Projects />
      <Closing />
    </div>
  );
}

export default App;
