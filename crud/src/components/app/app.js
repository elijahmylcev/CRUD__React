import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';

function App() {
  return (
    <div className="app">
      <AppInfo />
      <SearchPanel />
      <div className="container" />
    </div>
  );
}

export default App;
