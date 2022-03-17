import AppFilter from '../app-filter/app-filter';
import './search-panel.css';

function SearchPanel() {
  return (
    <div className="search-panel">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search..."
      />

      <AppFilter />
    </div>
  );
}

export default SearchPanel;
