import './app-filter.css';

function AppFilter() {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-light"
      >
        All
      </button>

      <button
        type="button"
        className="btn btn-outline-light"
      >
        To Up
      </button>

      <button
        type="button"
        className="btn btn-outline-light"
      >
        &gt 1000$
      </button>
    </div>
  );
}

export default AppFilter;
