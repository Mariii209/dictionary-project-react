import "./App.css";
import DictionarySearch from "./DictionarySearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://www.shecodes.io/assets/branding/logo-shecodes-3dfa60aeab8ef361842da5a2b6d46db3af1b7afafefee3dde0a9846389de754b.png"
          alt=""
          className="img-fluid w-25"
        />
        <DictionarySearch />
      </header>
    </div>
  );
}

export default App;
