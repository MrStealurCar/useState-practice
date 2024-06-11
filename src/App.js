import "./App.css";
import "./App.css";
import Counter from "./counter";
import NameSetter from "./name";
import ToggleVisibility from "./visibility";
import MirrorText from "./textMirror";
import UppercaseConverter from "./uppercase";
import DropdownBar from "./dropdown";
import PasswordConfirmation from "./password";
import CharCount from "./inputCount";

function App() {
  return (
    <div className="App">
      <h1>useState() Practice:</h1>
      <h2>Name Generator:</h2>
      <NameSetter />
      <br />
      <h2>Number Counter:</h2>
      <Counter />
      <br />
      <h2>Toggle Visibility:</h2>
      <ToggleVisibility />
      <br />
      <h2>Text Mirror:</h2>
      <MirrorText />
      <br />
      <h2>Uppercase Converter:</h2>
      <UppercaseConverter />
      <br />
      <h2>Option Selector:</h2>
      <DropdownBar />
      <br />
      <h2>Password Confirmer:</h2>
      <PasswordConfirmation />
      <br />
      <h2>Character count</h2>
      <CharCount />
    </div>
  );
}

export default App;
